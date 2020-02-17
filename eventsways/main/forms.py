from django import forms
from .models import Tag, Event
from django.core.exceptions import ValidationError

class TagForm(forms.ModelForm):
    class Meta:
        model = Tag
        fields = ['title', 'slug']

        widgets = {
            'title': forms.TextInput(),
            'slug': forms.TextInput(),
        }

    def clean_slug(self):
        new_slug = self.cleaned_data['slug'].lower()
        
        if new_slug == 'create':
            raise ValidationError('Slug may not be "Create"')

        if Tag.objects.filter(slug__iexact=new_slug).count():
            raise ValidationError('Slug must be unique. We have "{}" slug already'.format(new_slug))

        return new_slug


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ['title', 'slug', 'body', 'events_holding_date', 'events_holding_time', 'events_image','tags']

        widgets = {
            'title': forms.TextInput(),
            'slug': forms.TextInput(),
            'body': forms.Textarea(),
            'events_holding_date': forms.DateInput(),
            'events_holding_time': forms.TimeInput(),
            #'events_image': forms.ImageField(required=False),
            'tags': forms.SelectMultiple(),
        }

    def clean_slug(self):
        new_slug = self.cleaned_data['slug'].lower()
        
        if new_slug == 'create':
            raise ValidationError('Slug may not be "Create"')
        return new_slug

    