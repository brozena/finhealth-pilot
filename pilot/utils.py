from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

import plaid
from .plaid_config import PlaidConfig
from plaid.model.transactions_get_request import TransactionsGetRequest
from plaid.model.transactions_get_request_options import TransactionsGetRequestOptions
from plaid.model.item_remove_request import ItemRemoveRequest

import datetime as dt
from dateutil.relativedelta import relativedelta
import logging

from .models import Account, Transaction, PlaidItem

logger = logging.getLogger(__name__)

plaid_config = PlaidConfig(plaid.Environment.Production)
client = plaid_config.client()

def get_transactions(user, data, item_id, access_token):
    logger.debug(f"get_transactions util: {user}")
    user = user
    item_id = item_id
    access_token = access_token

    transactions = []

    # send multiple calls to manage Plaid's transaction pagination
    # see https://github.com/plaid/plaid-python#retrieve-transactions-older-method

    request = TransactionsGetRequest(access_token=access_token,
                        start_date=(dt.date.today() - relativedelta(months=24)),
                        end_date=dt.date.today(), options=TransactionsGetRequestOptions(
                            include_original_description=True)
                        )

    response = client.transactions_get(request)
    transactions = response['transactions']
    accounts = response['accounts']

    while len(transactions) < response['total_transactions']:
        options = TransactionsGetRequestOptions()
        options.offset = len(transactions)

        request = TransactionsGetRequest(access_token=access_token,
            start_date=(dt.date.today() - relativedelta(months=24)),
            end_date=dt.date.today(), options=TransactionsGetRequestOptions(
                include_original_description=True)
        )
        response = client.transactions_get(request)    
        transactions.extend(response(['transactions'])

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
        new_trans.date = dt.datetime.strftime(transaction['date'], '%Y-%m-%d')
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

    logger.debug(f"wrote {response['total_transactions']} total transactions to db")

    request = ItemRemoveRequest(access_token=access_token)
    response = client.item_remove(request)

    return
