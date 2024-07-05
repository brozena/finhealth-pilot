from django.views.generic import TemplateView
from django.urls import path, include

from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='pilot/index.html')),
    path('transactions', TemplateView.as_view(template_name='pilot/transactions.html')),
    path('authentication/', include('authentication.urls')),
    path('balance/', include('balance.urls')),
    path('transactions/', include('transaction.urls')),
    path('get_pid/', views.get_pid, name='get_pid'),
]
