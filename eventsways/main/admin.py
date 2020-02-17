from django.contrib import admin

from .models import *
# Register your models here.


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug')
    


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'slug', 'events_holding_date', 'events_holding_time', 'events_image')

