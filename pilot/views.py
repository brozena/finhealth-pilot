from django.shortcuts import render, get_object_or_404, redirect, HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect, csrf_exempt

from pilot.forms import PIDForm

def index(request):
    form = PIDForm()
    return render(request, 'pilot/index.html', {"form": form})

@csrf_protect
def pid(request):
    if request.method == "POST":
        form = PIDForm(request.POST)
        
        if form.is_valid():
            participant_id = form.cleaned_data['participant_id']
            form.save()
        
    return render(request, 'pilot/link.html', {"form": form})
