from django.views.generic import TemplateView
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'), 
    path('authentication/', include('authentication.urls')),
    path('balance/', include('balance.urls')),
    path('transactions/', include('transaction.urls')),
    path('pid/', views.pid, name='pid'),
]
