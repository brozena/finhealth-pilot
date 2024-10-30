from django.views.generic import TemplateView
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'), 
    path('create_user/', views.create_user, name='create_user'),
    path('webhook_transactions/', views.webhook_transactions, name='webhook_transactions'),
    path('create_link_token/', views.create_link_token, name='create-link-token'),
    path('get_access_token/', views.get_access_token, name='get-access-token'),
    path('create_user/', views.create_user, name='create-user'),
    path('thanks/', TemplateView.as_view(template_name='thanks.html')) 
]
