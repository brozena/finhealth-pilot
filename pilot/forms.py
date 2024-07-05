from django.forms import ModelForm, Textarea
from django.db.models.fields import PositiveSmallIntegerField
from pilot.models import PID

class PIDForm(ModelForm):
    class Meta:
        model = PID
        fields = ['participant_id']
    widgets = {
        'participant_id': Textarea(),
    }
