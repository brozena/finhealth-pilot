from .models import Account, Transaction, PlaidItem

from .utils import get_transactions

from celery import shared_task

import logging

logger = logging.getLogger(__name__)


@shared_task
def process_webhook(data):

    item_id = data['item_id']
    plaid_item = PlaidItem.objects.get(item_id=item_id)
    user = plaid_item.user
    access_token = plaid_item.access_token

    logger.debug("item_id: {0}  username: {1}".format(item_id, user))

    if (data['webhook_type'] == "TRANSACTIONS") and (data['webhook_code'] == "HISTORICAL_UPDATE"):
        get_transactions(user, data, item_id, access_token)
    else: 
        logger.debug(f"Unhandled event type: {data['webhook_type']}, {data['webhook_code']}")

    return
