import json
import time
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.views.decorators.csrf import csrf_exempt

from datetime import datetime, timedelta

from django.http import JsonResponse
from django.http import QueryDict
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.clickjacking import xframe_options_deny
from asgiref.sync import iscoroutinefunction, sync_to_async 
from django.utils.decorators import sync_and_async_middleware
from django.conf import settings

from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from adrf.decorators import api_view

import plaid
from plaid.exceptions import ApiException
from plaid.api import plaid_api
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.link_token_transactions import LinkTokenTransactions
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
from plaid.model.item_public_token_exchange_request import ItemPublicTokenExchangeRequest
from plaid.model.item_remove_request import ItemRemoveRequest
from plaid.model.transactions_get_request import TransactionsGetRequest
from plaid.model.transactions_get_request_options import TransactionsGetRequestOptions
from plaid.model.products import Products
from plaid.model.country_code import CountryCode
from .plaid_config import PlaidConfig
from .models import Account, Transaction, PlaidItem

plaid_config = PlaidConfig(plaid.Environment.Production)
client = plaid_config.client()

def index(request):
    return render(request, 'pilot/index.html')


@csrf_exempt
def create_user(request):
    username=request.POST['username']
    
    # allow repeated usernames/participant IDs in case of multiple accounts
    if User.objects.filter(username=username).exists():
        user = User.objects.filter(username=username).get()
        login(request, user) 
    else: 
        user = User.objects.create(username=username)
        user.save()

        # apply .filter() to avoid setting a password
        user = User.objects.filter(username=username).get()
        login(request, user)

    return render(request, 'pilot/link.html')


@csrf_exempt
def create_link_token(request):
    user = request.user

    user_id = settings.PLAID_CLIENT_ID
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
            )
        )
    plaid_response = client.link_token_create(plaid_request)
    return JsonResponse(plaid_response.to_dict())


@csrf_exempt
def get_access_token(request):
    user = request.user

    body_data = json.loads(request.body.decode())
    public_token = body_data["public_token"]

    exchange_request = ItemPublicTokenExchangeRequest(public_token=public_token)
    exchange_response = client.item_public_token_exchange(exchange_request) 
    item_id = exchange_response['item_id']
    access_token = exchange_response['access_token']

    plaid_item = None
    new_plaid_item = PlaidItem(user=user, access_token=access_token, item_id=item_id)
    new_plaid_item.save()
    plaid_item = user.plaiditem_set.get(item_id=item_id)

    return JsonResponse(exchange_response.to_dict())


def get_transactions(request):
    user = request.user
    END_DATE = datetime.now().date()
    START_DATE = (datetime.now() + timedelta(weeks=(-4*24))).date()

    transactions = []
    item = user.plaiditem_set.latest('created')

    access_token = item.access_token

    request = TransactionsGetRequest(access_token=access_token,
                        start_date=START_DATE,
                        end_date=END_DATE,
                        options=TransactionsGetRequestOptions(
                            include_original_description=True)
                        )

    response = client.transactions_get(request)

    # wait 30 seconds for Plaid Transactions API. Rework to listen for Plaid's HISTORICAL_UPDATE webhook in future.
    time.sleep(30)

    transactions = response['transactions']
    accounts = response['accounts']

    error = None

    for account in accounts:
        new_acct = Account()
        new_acct.plaid_account_id = account['account_id']
        new_acct.balances = account['balances']['current']
        new_acct.mask = account['mask']
        new_acct.name = account['name']
        new_acct.official_name = account['official_name']
        new_acct.subtype = account['subtype']
        new_acct.account_type = account['type']
        new_acct.user = user
        new_acct.save()

    for transaction in transactions:
        new_trans = Transaction()
        new_trans.account = user.account_set.get(plaid_account_id=transaction['account_id']) 
        new_trans.account_owner = transaction['account_owner']
        new_trans.amount = transaction['amount']
        new_trans.authorized_date = transaction['authorized_date']
        new_trans.category = transaction['category']
        new_trans.category_id = transaction['category_id']
        new_trans.date = datetime.strftime(transaction['date'], '%Y-%m-%d')
        new_trans.iso_currency_code = transaction['iso_currency_code']
        new_trans.merchant_name = transaction['merchant_name']
        new_trans.name = transaction['name']
        new_trans.payment_channel = transaction['payment_channel']
        new_trans.original_description = transaction['original_description']
        new_trans.pending = transaction['pending']
        new_trans.pending_transaction_id = transaction['pending_transaction_id']
        new_trans.transaction_code = transaction['transaction_code']
        new_trans.transaction_id = transaction['transaction_id']
        new_trans.transaction_type = transaction['transaction_type']
        new_trans.unofficial_currency_code = transaction['unofficial_currency_code']
        new_trans.user = user
        new_trans.save()

    request = ItemRemoveRequest(access_token=access_token)
    response = client.item_remove(request)

    return render(None, 'pilot/thanks.html')
