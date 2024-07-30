
import datetime
from django.db import models

from django.conf import settings
from django.contrib.auth.models import User


class PlaidItem(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=False, blank=False, on_delete=models.CASCADE, default=None)
    access_token = models.CharField(max_length=64, default='', unique=True)
    item_id = models.CharField(max_length=200, unique=True)


class Account(models.Model):
    id = models.AutoField(primary_key=True)
    plaid_account_id = models.CharField(max_length=200, null=True, unique=False)
    balances = models.FloatField(default=0)
    mask = models.CharField(max_length=200, null=True)
    name = models.CharField(max_length=200, null=True)
    official_name = models.CharField(max_length=200, null=True)
    subtype = models.CharField(max_length=200, null=True)
    account_type = models.CharField(max_length=200, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.CASCADE, default=None)
    item = models.ForeignKey(PlaidItem, default=None, null=True, blank=True, on_delete=models.CASCADE)
    


class Transaction(models.Model):
    id = models.AutoField(primary_key=True)
    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True)
    pending_transaction_id = models.CharField(max_length=1000, null=True, blank=True)
    category_id = models.CharField(max_length=500, null=True, blank=True)
    category = models.CharField(max_length=500, null=True, blank=True)
    account_owner = models.CharField(max_length=500, null=True, blank=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    amount = models.FloatField(default=0)
    iso_currency_code = models.CharField(max_length=500, null=True, blank=True)
    unofficial_currency_code = models.CharField(max_length=500, null=True, blank=True)
    date = models.CharField(max_length=1000, null=True, blank=True)
    pending = models.CharField(max_length=50, null=True, blank=True)
    original_description = models.CharField(max_length=1000, null=True, blank=True)
    transaction_id = models.CharField(max_length=500, null=True, blank=True)
    payment_channel = models.CharField(max_length=500, null=True, blank=True)
    authorized_date = models.CharField(max_length=1000, null=True, blank=True)
    authorized_datetime = models.CharField(max_length=1000, null=True, blank=True)
    datetime = models.CharField(max_length=1000, null=True, blank=True)
    transaction_code = models.CharField(max_length=500, null=True, blank=True)
    merchant_name = models.CharField(max_length=500, null=True, blank=True)
    personal_finance_category = models.CharField(max_length=500, null=True, blank=True)
    transaction_type = models.CharField(max_length=500, null=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.CASCADE, default=None)
