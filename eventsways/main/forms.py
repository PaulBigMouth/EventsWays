from django import forms
from .models import Category, Event, Address
from django.core.exceptions import ValidationError


class AddressForm(forms.ModelForm):
    class Meta:
        model = Address
        fields = ['country', 'region','city','street','premises']

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
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
        fields = ['title', 'slug', 'body', 'events_holding_date', 'events_holding_time', 'events_image','category', 'address', 'lng', 'lat']

        widgets = {
            'title': forms.TextInput(),
            'slug': forms.TextInput(),
            'body': forms.Textarea(),
            'events_holding_date': forms.DateInput(attrs={'type': 'date'}),
            'events_holding_time': forms.TimeInput(attrs={'type': 'time'}),
            'lng': forms.TextInput(attrs={'class': 'lngInput'}),
            'lat': forms.TextInput(attrs={'class': 'latInput'}),
        }

    def clean_slug(self):
        new_slug = self.cleaned_data['slug'].lower()
        
        if new_slug == 'create':
            raise ValidationError('Slug may not be "Create"')
        return new_slug

    