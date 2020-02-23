from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import View, ListView, DetailView
from .models import *
from .forms import *

from .utils import *

from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator

from django.db.models import Q
import datetime

def main(request):
    return render(request, 'main/main.html')


def events(request):

    filter_date_query_start = request.GET.get('filter_date_query_start', '')
    filter_date_query_end = request.GET.get('filter_date_query_end', '')
    filter_category_query = request.GET.get('filter_category_query', '')
    filter_country_query = request.GET.get('filter_county_query', '')
    search_query = request.GET.get('search', '')
    categories = Category.objects.all()
    addresses = Address.objects.all().values('country').distinct()
    
    if filter_category_query:
        events = Event.objects.filter(Q(category_id = filter_category_query))
        
    if filter_country_query and filter_country_query != "Выбрать..":
        events = Event.objects.filter(address__country = filter_country_query)

    if filter_date_query_start and filter_date_query_end:
        start_date = filter_date_query_start
        end_date = filter_date_query_end
        events = Event.objects.filter(Q(events_holding_date__gte=start_date, events_holding_date__lte = end_date))
    
    if search_query:  
        events = Event.objects.filter(Q(title__icontains=search_query) | Q(body__icontains=search_query))

    else:
        events = Event.objects.all()


    paginator = Paginator(events, 9)
    page_number = request.GET.get('page', 1)
    page = paginator.get_page(page_number)

    is_paginated = page.has_other_pages()

    if page.has_previous():
        prev_url = '?page={}'.format(page.previous_page_number())
    else:
        prev_url = ''

    if page.has_next():
        next_url = '?page={}'.format(page.next_page_number())
    else:
        next_url = ''



    context = {
        'page_object': page, 
        'is_paginated': is_paginated, 
        'prev_url': prev_url,
        'next_url': next_url,
        'categories': categories,
        'addresses': addresses,
        }

    return render(request, 'main/events.html', context)
    

class EventDetail(ObjectDetailMixin, View):
    model = Event
    template = 'main/event_detail.html'

class EventCreate(LoginRequiredMixin,ObjectCreateMixin,View):
    form_model = EventForm
    template = 'main/event_create.html'
    raise_exception = True

class EventUpdate(LoginRequiredMixin,ObjectUpdateMixin,View):
    model = Event
    model_form = EventForm
    template = 'main/event_update.html'
    raise_exception = True

class EventDelete(LoginRequiredMixin,ObjectDeleteMixin,View):
    model = Event
    template = 'main/event_delete.html'
    redirect_url = 'events'
    raise_exception = True


class CategoryDetail(ObjectDetailMixin, View):
    model = Category
    template = 'main/Category_detail.html'

class CategoryCreate(LoginRequiredMixin,ObjectCreateMixin,View):
    form_model = CategoryForm
    template = 'main/Category_create.html'
    raise_exception = True

class CategoryUpdate(LoginRequiredMixin,ObjectUpdateMixin,View):
    model = Category
    model_form = CategoryForm
    template = 'main/Category_update.html'
    raise_exception = True
    
class CategoryDelete(LoginRequiredMixin,ObjectDeleteMixin,View):
    model = Category
    template = 'main/Category_delete.html'
    redirect_url = 'Categorys_list_url'
    raise_exception = True
    
class CategoryList(ListView):
    model = Category
    queryset = Category.objects.all()
    

def blog(request):
    return render(request, 'main/blog.html')

def about(request):
    return render(request, 'main/about.html')

def support(request):
    return render(request, 'main/support.html')