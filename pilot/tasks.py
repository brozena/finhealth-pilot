from .models import Account, Transaction, PlaidItem

from .utils import get_transactions

from celery import shared_task

@shared_task
def process_webhook(data):
    item_id = data['item_id']
    access_token = PlaidItem.objects.filter(item_id=item_id).values_list('access_token')[0]

    if (data['webhook_type'] == "TRANSACTIONS") and (data['webhook_code'] == "HISTORICAL_UPDATE"):
        print(f"{data['new_transactions']} new transactions available to be retrieved.")
        get_transactions(data, item_id, access_token)
    else: 
        print(f"Unhandled event type: {data['webhook_type']}, {data['webhook_code']}")

    return
