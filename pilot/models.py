from django.db import models


class PID(models.Model):
    participant_id = models.PositiveSmallIntegerField(primary_key=True, unique=True, null=False, blank=False, default=None)

