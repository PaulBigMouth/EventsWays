from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Event, Category
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
    list_display = ('title', 'body', 'slug', 'events_holding_date', 'events_holding_time', 'get_image', 'category', 'checked', 'country','city','street_and_premis', 'place')
    list_filter = ("events_holding_date",'category', 'checked')
    search_fields = ('title', 'body', 'category__title',)
    save_as = True
    readonly_fields = ('get_image',)
    list_editable = ("checked",)
    save_on_top = True
    actions = ["published", "unpublished"]
    form = EventAdminForm

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.events_image.url} width="50px" height="60px"')

    get_image.short_description = "Изображение"

    def unpublished(self, request, queryset):
        row_update = queryset.update(checked=True)

        if row_update == "1":
            message_bit = "1 запись была обновлена"
        else:
            message_bit = f"{row_update} записей были обновлены"

    def published(self, request, queryset):
        row_update = queryset.update(checked=False)

        if row_update == "1":
            message_bit = "1 запись была обновлена"
        else:
            message_bit = f"{row_update} записей были обновлены"

        self.message_user(request, f"{message_bit}")    

admin.site.site_title = 'EventsWays'
admin.site.site_header = 'EventsWays'