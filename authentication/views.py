import os
import json

from django.shortcuts import render
from django.http import JsonResponse
from django.http import QueryDict
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.clickjacking import xframe_options_deny
from asgiref.sync import iscoroutinefunction
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

import environ

import plaid
from plaid.exceptions import ApiException
from plaid.api import plaid_api
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
from plaid.model.item_public_token_exchange_request import ItemPublicTokenExchangeRequest
from plaid.model.products import Products
from plaid.model.country_code import CountryCode
from .plaid_config import PlaidConfig

from authentication.models import PlaidItem
from pilot.models import PID

plaid_config = PlaidConfig(plaid.Environment.Sandbox)
client = plaid_config.client()

@api_view(['POST'])
async def create_link_token(request):
    try:
        user_id = settings.PLAID_CLIENT_ID
        plaid_request = LinkTokenCreateRequest(
            products=[Products("transactions")],
            client_name="Finhealth Pilot",
            country_codes=[CountryCode('US')],
            language='en',
            user=LinkTokenCreateRequestUser(
                client_user_id=user_id
            )
        )
        response = client.link_token_create(plaid_request)
        return JsonResponse(response.to_dict())
    except plaid.ApiException as e:
        return json.dumps(e.body)

@api_view(['POST'])
async def exchange_public_token(request):
    try:
        public_token = json.loads(request.body.decode('utf-8'))['public_token']
        plaid_request = ItemPublicTokenExchangeRequest(public_token=public_token)

        response = client.item_public_token_exchange(plaid_request)
        access_token = response['access_token']
        item_id = response['item_id']

        os.environ['ACCESS_TOKEN'] = access_token
        os.environ['ITEM_ID'] = item_id

        #pid = PID.objects.get(id=
        plaid_item = None

        try:
            plaid_item = PlaidItem.get(item_id=item_id)
        except:
            new_plaid_item = PlaidItem(pid=participant_id, access_token=access_token, item_id=item_id)
            new_plaid_item.save()
            plaid_item = user.plaiditem_set.get(item_id=item_id)

        for account in accounts:
            try:
                existing_acct = user.account_set.get(plaid_account_id=account['account_id'])
                continue
            except:
                new_acct = Account()
                new_acct.plaid_account_id = account['id']
                new_acct.mask = account['mask']
                new_acct.name = account['name']
                new_acct.subtype = account['subtype']
                new_acct.account_type = account['type']
                new_acct.user = user
                new_acct.item = plaid_item
                new_acct.save()


        return JsonResponse(response.to_dict())
    except ApiException as e:
        return json.dumps(e.body)
