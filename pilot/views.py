from django.shortcuts import render, get_object_or_404, redirect
from django.views.decorators.csrf import csrf_exempt

from pilot.models import PID
from pilot.forms import PIDForm

@csrf_exempt
def pid(request):
    f = PIDForm(request.POST)
    if f.is_valid():
        f.save()

    return redirect('/')
