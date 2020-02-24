import django_filters
from django_filters.widgets import RangeWidget, SuffixedMultiWidget, CSVWidget
from .models import Event, Category, Address
from django import forms
from django.forms.widgets import ChoiceWidget, Select

class EventFilter(django_filters.FilterSet):
    events_holding_date = django_filters.DateFromToRangeFilter(widget=RangeWidget(attrs={'type': 'date','placeholder': 'YYYY/MM/DD',}))
    category = django_filters.ModelMultipleChoiceFilter(queryset=Category.objects.all(),widget = forms.CheckboxSelectMultiple)
    #address__country = django_filters.ChoiceFilter(choices=[(country, country) for country in Address.objects.all().values_list('country', flat=True).distinct()])
    title = django_filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Event
        fields = ['title','events_holding_date', 'category', 'address__country',]
"""        widgets = {
              'address__country': ChoiceWidget(attrs={'type': 'text'}), 
          }"""
          