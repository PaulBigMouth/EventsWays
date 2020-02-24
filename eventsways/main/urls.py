from django.contrib import admin
from django.urls import path
from django_filters.views import object_filter
from .views import *

urlpatterns = [
    path('main/', main, name='main'),
    path('events/', EventListView.as_view(), name='events'),
    path('events/create/', EventCreate.as_view(), name='event_create_url'),
    path('events/<str:slug>/', EventDetail.as_view(), name='event_detail_url'), 
    path('events/<str:slug>/delete/', EventDelete.as_view(), name='event_delete_url'),
    path('events/<str:slug>/update/', EventUpdate.as_view(), name='event_update_url'),  
    path('category/', CategoryList.as_view(), name='category_list_url'),
    path('category/create/', CategoryCreate.as_view(), name = 'category_create_url'),
    path('category/<str:slug>/', CategoryDetail.as_view(), name='category_detail_url'),
    path('category/<str:slug>/delete/', CategoryDelete.as_view(), name='category_delete_url'),
    path('category/<str:slug>/update/', CategoryUpdate.as_view(), name='category_update_url'),
    path('blog/', blog, name='blog'),
    path('about/', about, name='about'),
    path('support/', support, name='support'),
]
