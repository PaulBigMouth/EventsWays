from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import View, ListView, DetailView
from .models import *
from .forms import *

from .utils import *

from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator

from django.db.models import Q
from .filters import EventFilter

def main(request):
    return render(request, 'main/main.html')


def events(request):

    search_query = request.GET.get('search', '')

    if search_query:
        events = Event.objects.filter(Q(title__icontains=search_query) | Q(body__icontains=search_query))
    else:
        events = Event.objects.all()

    paginator = Paginator(events, 4)
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