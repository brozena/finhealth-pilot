from django.db import models


class PID(models.Model):
    participant_id = models.PositiveSmallIntegerField(unique=True, null=False, blank=False, default=None)

