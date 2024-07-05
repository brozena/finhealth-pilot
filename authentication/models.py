from django.db import models
from django.conf import settings

from pilot.models import PID

class PlaidItem(models.Model):
    access_token = models.CharField(max_length=64, default='')
    item_id = models.CharField(max_length=200, unique=True)
    participant_id = models.ForeignKey(PID, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('access_token', 'participant_id')
