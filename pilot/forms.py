from django import forms
from pilot.models import PID

class PIDForm(forms.ModelForm):
    class Meta:
        model = PID
        fields = ['participant_id']
