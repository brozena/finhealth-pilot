import datetime

from django.db import models


class PID(models.Model):
    id = models.AutoField(primary_key=True)
    participant_id = models.IntegerField(max_length=4)

