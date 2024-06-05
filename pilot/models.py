import datetime

from django.db import models

class Transaction(models.Model):
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
    check_number = models.CharField(max_length=500, null=True, blank=True)
    merchant_name = models.CharField(max_length=500, null=True, blank=True)
    personal_finance_category = models.CharField(max_length=500, null=True, blank=True)
    transaction_type = models.CharField(max_length=500, null=True, blank=True)
