from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import View
from .models import *
from .forms import *

from .utils import *

from django.contrib.auth.mixins import LoginRequiredMixin

def main(request):
    return render(request, 'main/main.html')


def events(request):
    events = Event.objects.all()
    context = {'events': events}
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


class TagDetail(ObjectDetailMixin, View):
    model = Tag
    template = 'main/tag_detail.html'

class TagCreate(LoginRequiredMixin,ObjectCreateMixin,View):
    form_model = TagForm
    template = 'main/tag_create.html'
    raise_exception = True

class TagUpdate(LoginRequiredMixin,ObjectUpdateMixin,View):
    model = Tag
    model_form = TagForm
    template = 'main/tag_update.html'
    raise_exception = True
    
class TagDelete(LoginRequiredMixin,ObjectDeleteMixin,View):
    model = Tag
    template = 'main/tag_delete.html'
    redirect_url = 'tags_list_url'
    raise_exception = True
    
def tags_list(request):
    tags = Tag.objects.all()
    context = {'tags': tags}
    return render(request, 'main/tags_list.html', context)  


def blog(request):
    return render(request, 'main/blog.html')

def about(request):
    return render(request, 'main/about.html')

def support(request):
    return render(request, 'main/support.html')