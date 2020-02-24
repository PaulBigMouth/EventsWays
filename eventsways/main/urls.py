from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('main/', main, name='main'),
    path('events/', EventListView.as_view(), name='events'),
    path('events/create/', EventCreate.as_view(), name='event_create_url'),
    path('events/<str:slug>/', EventDetail.as_view(), name='event_detail_url'), 
    path('about/', about, name='about'),
    path('support/', support, name='support'),
]
