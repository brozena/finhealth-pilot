from django.db import models


class PID(models.Model):
    id = models.AutoField(primary_key=True)
    participant_id = models.PositiveIntegerField(unique=True, null=False, blank=False, default=None)

