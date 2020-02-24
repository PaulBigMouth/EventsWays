import django_filters
from django_filters.widgets import RangeWidget, SuffixedMultiWidget, CSVWidget
from .models import Event, Category
from django import forms

class EventFilter(django_filters.FilterSet):
    events_holding_date = django_filters.DateFromToRangeFilter(widget=RangeWidget(attrs={'type': 'date','placeholder': 'YYYY/MM/DD',}))
    category = django_filters.ModelMultipleChoiceFilter(queryset=Category.objects.all(),widget= forms.CheckboxSelectMultiple)

    class Meta:
        model = Event
        fields = ['events_holding_date', 'category']