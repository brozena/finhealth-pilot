from .models import Account, Transaction, PlaidItem

from celery import shared_task

def process_webhook(data):
    item_id = data['item_id']
    access_token = PlaidItem.objects.filter(item_id=item_id).values_list('access_token')[0]

    if (webhook['webhook_type'] == "TRANSACTIONS") & (webhook['webhook_code'] == "HISTORICAL_UPDATE"):
        print(f"{webhook['new_transactions']} new transactions available to be retrieved.")
        get_transactions(data, access_token, item_id)
    else: 
        print(f"Unhandled event type: {webhook['webhook_type']}, {webhook['webhook_code']}")

    return HttpResponse(status=200)


