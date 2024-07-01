from django.views.generic import TemplateView
from django.urls import path, include

from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='pilot/index.html')),
    path('transactions', TemplateView.as_view(template_name='pilot/transactions.html')),
    path('authentication/', include('authentication.urls')),
    path('finance/balance/', include('balance.urls')),
    path('finance/transactions/', include('transaction.urls')),
    path('pid', views.pid, name='pid'),
]
