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
import datetime

def main(request):
    return render(request, 'main/main.html')


class EventListView(FilterView):
    model = Event
    template_name = 'main/events.html'
    filterset_class = EventFilter
    paginate_by = 9

    def get_queryset(self):
        # Get the queryset however you usually would.  For example:
        queryset = super().get_queryset()
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
        return context


class EventDetail(ObjectDetailMixin, View):
    model = Event
    template = 'main/event_detail.html'

class EventCreate(LoginRequiredMixin,ObjectCreateMixin,View):
    form_model = EventForm
    template = 'main/event_create.html'
    raise_exception = True

def about(request):
    return render(request, 'main/about.html')

def support(request):
    return render(request, 'main/support.html')