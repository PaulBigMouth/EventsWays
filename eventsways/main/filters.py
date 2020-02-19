import django_filters
from .models import Event


class EventFilter(django_filters.FilterSet):
    date_between = django_filters.DateFromToRangeFilter(name='date', label='Date (Between)')

    class Meta:
        model = Event
        fields = ('events_holding_date',)