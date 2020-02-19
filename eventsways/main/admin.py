from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import *
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget

class EventAdminForm(forms.ModelForm):
    body = forms.CharField(widget=CKEditorUploadingWidget())
    class Meta:
        model = Event
        fields = '__all__'



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug')
    


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'slug', 'events_holding_date', 'events_holding_time', 'get_image', 'category')
    list_filter = ("events_holding_date",'category')
    search_fields = ('title', 'body', 'category')
    save_as = True
    readonly_fields = ('get_image',)

    form = EventAdminForm

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.events_image.url} width="50px" height="60px"')

    get_image.short_description = "Изображение"
    

admin.site.site_title = 'EventsWays'
admin.site.site_header = 'EventsWays'