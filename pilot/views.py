"""
Views for the Pilot application.

This module contains views for handling user creation, Plaid link token creation,
access token exchange, and webhook processing for financial data.
"""
# Standard library imports
import json
import logging

# Django imports
from django.conf import settings
from django.contrib.auth import login
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Third-party imports
import plaid
from plaid.api import plaid_api
from plaid.exceptions import ApiException
from plaid.model.country_code import CountryCode
from plaid.model.item_public_token_exchange_request import ItemPublicTokenExchangeRequest
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
from plaid.model.link_token_transactions import LinkTokenTransactions
from plaid.model.products import Products

# Local imports
from .models import PlaidItem
from .plaid_config import PlaidConfig
from .tasks import process_webhook
from .utils import get_transactions

# Configure logger
logger = logging.getLogger(__name__)

# Initialize Plaid client
plaid_config = PlaidConfig(plaid.Environment.Production)
client = plaid_config.client()


def index(request):
    """
    Render the index page.
    
    Args:
        request: HTTP request object
        
    Returns:
        Rendered index.html template
    """
    return render(request, 'pilot/index.html')


@csrf_exempt
def create_user(request):
    """
    Create a new user or log in an existing user.
    
    Args:
        request: HTTP request object with username in POST data
        
    Returns:
        Rendered link.html template with user logged in
    """
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST requests are supported'}, status=405)
    
    try:
        username = request.POST['username']
        
        # Allow repeated usernames/participant IDs in case of multiple accounts
        if User.objects.filter(username=username).exists():
            user = User.objects.filter(username=username).get()
            login(request, user) 
        else: 
            user = User.objects.create_user(username=username)
            login(request, user)

        return render(request, 'pilot/link.html')
    except KeyError:
        return JsonResponse({'error': 'Username is required'}, status=400)
    except Exception as e:
        logger.error(f"Error creating user: {str(e)}")
        return JsonResponse({'error': f'Failed to create user: {str(e)}'}, status=500)


@csrf_exempt
def create_link_token(request):
    """
    Create a Plaid Link token for initializing the Link process.
    
    Args:
        request: HTTP request object
        
    Returns:
        JSON response with the Link token
    """
    try:
        user = request.user
        
        # Use client ID as user ID for Plaid
        user_id = settings.PLAID_CLIENT_ID
        
        # Create Link token request
        plaid_request = LinkTokenCreateRequest(
            products=[Products("transactions")],
            transactions=LinkTokenTransactions(
                days_requested=730
            ),
            client_name="Finhealth Pilot",
            country_codes=[CountryCode('US')],
            language='en',
            user=LinkTokenCreateRequestUser(
                client_user_id=user_id
            ),
            webhook=settings.PLAID_WEBHOOK_URL
        )
        
        # Get Link token from Plaid
        plaid_response = client.link_token_create(plaid_request)
        return JsonResponse(plaid_response.to_dict())
    except ApiException as e:
        logger.error(f"Plaid API error: {str(e)}")
        return JsonResponse({'error': f'Plaid API error: {str(e)}'}, status=500)
    except Exception as e:
        logger.error(f"Error creating link token: {str(e)}")
        return JsonResponse({'error': f'Failed to create link token: {str(e)}'}, status=500)


@csrf_exempt
def get_access_token(request):
    """
    Exchange a public token for an access token and item ID.
    
    Args:
        request: HTTP request object with public_token in body
        
    Returns:
        JSON response with the access token and item ID
    """
    try:
        user = request.user
        
        # Parse request body
        body_data = json.loads(request.body.decode())
        public_token = body_data.get("public_token")
        
        if not public_token:
            return JsonResponse({'error': 'Public token is required'}, status=400)
        
        # Exchange public token for access token
        exchange_request = ItemPublicTokenExchangeRequest(public_token=public_token)
        exchange_response = client.item_public_token_exchange(exchange_request) 
        
        item_id = exchange_response['item_id']
        access_token = exchange_response['access_token']
        
        # Save Plaid item to database
        new_plaid_item = PlaidItem(user=user, access_token=access_token, item_id=item_id)
        new_plaid_item.save()
        
        return JsonResponse(exchange_response.to_dict())
    except ApiException as e:
        logger.error(f"Plaid API error: {str(e)}")
        return JsonResponse({'error': f'Plaid API error: {str(e)}'}, status=500)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON in request body'}, status=400)
    except Exception as e:
        logger.error(f"Error exchanging token: {str(e)}")
        return JsonResponse({'error': f'Failed to exchange token: {str(e)}'}, status=500)


@csrf_exempt
def webhook_transactions(request):
    """
    Handle Plaid webhooks for transaction updates.
    
    Args:
        request: HTTP request object with webhook data in body
        
    Returns:
        JSON response acknowledging receipt of webhook
    """
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST requests are supported'}, status=405)
    
    try:
        # Parse webhook data
        body = json.loads(request.body)
        
        # Extract relevant data for processing
        data = {
            "item_id": body["item_id"],
            "webhook_type": body["webhook_type"],
            "webhook_code": body["webhook_code"]
        }
        
        # Process webhook asynchronously
        process_webhook.delay(data)
        
        logger.debug(f"Webhook received: {body}")
        return JsonResponse({'status': 'Webhook received.'}, status=200)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON in request body'}, status=400)
    except KeyError as e:
        return JsonResponse({'error': f'Missing required field: {str(e)}'}, status=400)
    except Exception as e:
        logger.error(f"Error processing webhook: {str(e)}")
        return JsonResponse({'error': f'Failed to process webhook: {str(e)}'}, status=500)
