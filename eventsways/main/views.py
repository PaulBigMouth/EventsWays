from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import View, ListView, DetailView
from .models import Event, Category
from .forms import EventForm, CategoryForm
from .filters import EventFilter
from .utils import *
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator
from django_filters.views import FilterView
from django.db.models import Q
import datetime, random
from random import choice

def main(request):
    top_events = Event.objects.filter(checked=True)[:8]
    context = {
        'top_events': top_events,
    }
    return render(request, 'main/main.html', context)


class EventListView(FilterView):
    model = Event
    template_name = 'main/events.html'
    filterset_class = EventFilter
    paginate_by = 9
    countries = Event.objects.filter(checked=True).values_list('country', flat=True).distinct()
    #print(countries)
    def get_queryset(self):
        queryset = Event.objects.filter(checked=True)
        self.filterset = self.filterset_class(self.request.GET, queryset=queryset)
        return self.filterset.qs.distinct()
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filterset'] = self.filterset
        context['countries'] = self.countries
        return context

class EventDetail(ObjectDetailMixin, View):
    model = Event
    template = 'main/event_detail.html'


class EventCreate(LoginRequiredMixin,ObjectCreateMixin,View):
    form_model = EventForm
    template = 'main/event_create.html'
    raise_exception = True
        
    def get(self, request):
        form = self.form_model()
        count = Event.objects.filter(checked=True).count()
        slice = random.random() * (count - 4)
        if count > 4:
            random_events = Event.objects.filter(checked=True)[slice: slice+4]
        else:
            random_events = None
        context = {
            'form': form,
            'random_events': random_events,
            'count': count,
        }
        return render(request, self.template, context)


def about(request):
    count = Event.objects.filter(checked=True).count()
    items = Event.objects.filter(checked=True)
    if count > 1:
        random_item = random.choice(items)
    else:
        random_item = None
    context = {
        'random_item': random_item,
    }
    return render(request, 'main/about.html', context)

def support(request):
    return render(request, 'main/support.html')