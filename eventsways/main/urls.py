from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('main/', views.main, name='main'),
    path('events/', views.events, name='events'),
    path('blog/', views.blog, name='blog'),
    path('about/', views.about, name='about'),
    path('support/', views.support, name='support'),
]
