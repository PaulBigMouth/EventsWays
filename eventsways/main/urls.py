from django.contrib import admin
from django.urls import path

from .views import *

urlpatterns = [
    path('main/', main, name='main'),
    path('events/', events, name='events'),
    path('events/create/', EventCreate.as_view(), name='event_create_url'),
    path('events/<str:slug>/', EventDetail.as_view(), name='event_detail_url'), 
    path('events/<str:slug>/delete/', EventDelete.as_view(), name='event_delete_url'),
    path('events/<str:slug>/update/', EventUpdate.as_view(), name='event_update_url'),  
    path('tags/', tags_list, name='tags_list_url'),
    path('tag/create/', TagCreate.as_view(), name = 'tag_create_url'),
    path('tag/<str:slug>/', TagDetail.as_view(), name='tag_detail_url'),
    path('tag/<str:slug>/delete/', TagDelete.as_view(), name='tag_delete_url'),
    path('tag/<str:slug>/update/', TagUpdate.as_view(), name='tag_update_url'),
    path('blog/', blog, name='blog'),
    path('about/', about, name='about'),
    path('support/', support, name='support'),
]
