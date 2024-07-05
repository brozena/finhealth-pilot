import datetime
from django.db import models
from pilot.models import PID

class PlaidItem(models.Model):
    id = models.AutoField(primary_key=True)
    access_token = models.CharField(max_length=200, unique=True)
    item_id = models.CharField(max_length=200, unique=True)


class Account(models.Model):
    id = models.AutoField(primary_key=True)
    plaid_account_id = models.CharField(max_length=200, null=True, unique=True)
    balances = models.JSONField(null=True)
    mask = models.CharField(max_length=200, null=True)
    name = models.CharField(max_length=200, null=True)
    official_name = models.CharField(max_length=200, null=True)
    subtype = models.CharField(max_length=200, null=True)
    account_type = models.CharField(max_length=200, null=True)
    participant_id = models.ForeignKey(PID, null=False, blank=False, default=None, on_delete=models.CASCADE)
    item = models.ForeignKey(PlaidItem, on_delete=models.CASCADE, default=None, null=True, blank=True)


class Transaction(models.Model):
    id = models.AutoField(primary_key=True)
    participant_id = models.ForeignKey(PID, on_delete=models.CASCADE, default=None, null=True, blank=True)
    plaid_account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True)
    pending_transaction_id = models.CharField(max_length=1000, null=True, blank=True)
    category_id = models.CharField(max_length=500, null=True, blank=True)
    category = models.CharField(max_length=500, null=True, blank=True)
    location = models.CharField(max_length=500, null=True, blank=True)
    payment_meta = models.CharField(max_length=10000, null=True, blank=True)
    account_owner = models.CharField(max_length=500, null=True, blank=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    account_id = models.CharField(max_length=500, null=True, blank=True)
    amount = models.FloatField(default=0)
    iso_currency_code = models.CharField(max_length=500, null=True, blank=True)
    unofficial_currency_code = models.CharField(max_length=500, null=True, blank=True)
    date = models.CharField(max_length=1000, null=True, blank=True)
    pending = models.CharField(max_length=50, null=True, blank=True)
    transaction_id = models.CharField(max_length=500, null=True, blank=True)
    payment_channel = models.CharField(max_length=500, null=True, blank=True)
    authorized_date = models.CharField(max_length=1000, null=True, blank=True)
    authorized_datetime = models.CharField(max_length=1000, null=True, blank=True)
    datetime = models.CharField(max_length=1000, null=True, blank=True)
    transaction_code = models.CharField(max_length=500, null=True, blank=True)
    merchant_name = models.CharField(max_length=500, null=True, blank=True)
    personal_finance_category = models.CharField(max_length=500, null=True, blank=True)
    transaction_type = models.CharField(max_length=500, null=True, blank=True)
