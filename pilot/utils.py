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

def get_transactions(user, item_id, access_token):
    """
    Retrieve transactions from Plaid API with pagination handling.

    Args:
        user: User object
        item_id: Plaid item ID
        access_token: Plaid access token

    Returns:
        tuple: (transactions list, accounts list, error message)
    """

    logger.debug(f"get_transactions util: {user}")
    user = user
    item_id = item_id
    access_token = access_token

    try:
        start_date = dt.date.today() - relativedelta(months=24)
        end_date = dt.date.today()
        transactions = []

        # Initial request
        request = TransactionsGetRequest(
            access_token=access_token,
            start_date=start_date,
            end_date=end_date,
            options=TransactionsGetRequestOptions(
                include_original_description=True
            )
        )

        response = client.transactions_get(request)
        transactions.extend(response['transactions'])
        total_transactions = response['total_transactions']
        accounts = response['accounts']

        # Handle pagination
        while len(transactions) < total_transactions:
            request = TransactionsGetRequest(
                access_token=access_token,
                start_date=start_date,
                end_date=end_date,
                options=TransactionsGetRequestOptions(
                    include_original_description=True,
                    offset=len(transactions)
                )
            )
            response = client.transactions_get(request)
            transactions.extend(response['transactions'])

    except Exception as e:
        logger.error(f"Error retrieving transactions for user {user}: {str(e)}")

    # Write to model
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
        new_trans.payment_channel = transaction['payment_channel']
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

    return render(None, 'pilot/thanks.html')
