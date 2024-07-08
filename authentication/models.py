from django.db import models
from django.conf import settings

from pilot.models import PID


class PlaidItem(models.Model):
    participant_id = models.ForeignKey("PID.participant_id", on_delete=models.CASCADE)
    access_token = models.CharField(max_length=64, default='')
    item_id = models.CharField(max_length=200, unique=True)

    class Meta:
        unique_together = ('access_token', 'participant_id')
