from django.views.generic import TemplateView
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'), 
    path('create_user/', views.create_user, name='create_user'),
    path('get_transactions/', views.get_transactions, name='get_transactions'),
    path('link_account', views.link_account, name='link-account'),
    path('create_link_token', views.create_link_token, name='create-link-token'),
    path('get_access_token', views.get_access_token, name='get-access-token'),
    path('create_user', views.create_user, name='create-user'),
]
