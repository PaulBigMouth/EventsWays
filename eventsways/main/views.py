from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import View, ListView, DetailView
from .models import *
from .forms import *
from .filters import *
from .utils import *
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator
from django_filters.views import FilterView
from django.db.models import Q
import datetime, random

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
    paginate_by = 1

    countries = Address.objects.all().values_list('country', flat=True).distinct()

    def get_queryset(self):
        # Get the queryset however you usually would.  For example:
        queryset = Event.objects.filter(checked=True)
        # Then use the query parameters and the queryset to
        # instantiate a filterset and save it as an attribute
        # on the view instance for later.
        self.filterset = self.filterset_class(self.request.GET, queryset=queryset)
        # Return the filtered queryset
        return self.filterset.qs.distinct()
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Pass the filterset to the template - it provides the form.

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
        #random_events = Event.objects.filter(checked=True)[:4]
        count = Event.objects.filter(checked=True).count()
        slice = random.random() * (count - 4)
        random_events = Event.objects.filter(checked=True)[slice: slice+4]
        context = {
            'form': form,
            'random_events': random_events,
        }
        return render(request, self.template, context)


def about(request):
    items = Event.objects.filter(checked=True)
    random_item = random.choice(items)
    context = {
        'random_item': random_item,
    }
    return render(request, 'main/about.html', context)

def support(request):
    return render(request, 'main/support.html')