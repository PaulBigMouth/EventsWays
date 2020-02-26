from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
import random
from random import choice
from .models import *


class ObjectDetailMixin:
    model = None
    template = None
    
    def get(self, request, slug):
        obj = get_object_or_404(self.model, slug__iexact=slug)
        count = Event.objects.filter(checked=True).count()
        slice = random.random() * (count - 4)
        if count > 4:
            random_events = Event.objects.filter(checked=True)[slice: slice+4]
        else:
            random_events = None
        context = {
            self.model.__name__.lower(): obj,
            'random_events': random_events,
            'count': count,
            }
        return render(request, self.template, context)

class ObjectCreateMixin:
    form_model = None
    template = None     

    def get(self, request):
        form = self.form_model()
        context = {'form': form}
        return render(request, self.template, context)

    def post(self, request):
        bound_form = self.form_model(request.POST)

        if bound_form.is_valid():
            new_obj = bound_form.save()
            return redirect(new_obj)

        context = {'form': bound_form}
        return render(request, self.template, context)

class ObjectUpdateMixin:
    model = None
    model_form = None
    template = None
    def get(self, request, slug):
        obj = self.model.objects.get(slug__iexact=slug)
        bound_form = self.model_form(instance=obj)
        context = {'form': bound_form, self.model.__name__.lower(): obj}
        return render(request, self.template, context)

    def post(self,request, slug):
        obj = self.model.objects.get(slug__iexact=slug)
        bound_form = self.model_form(request.POST,instance=obj)

        if bound_form.is_valid():
            new_obj = bound_form.save()
            return redirect(new_obj)
        context = {'form': bound_form, self.model.__name__.lower(): obj}
        return render(request, self.template, context)


class ObjectDeleteMixin:
    model = None
    template = None
    redirect_url = None
    
    def get(self, request, slug):
        obj = self.model.objects.get(slug__iexact=slug)
        context = {self.model.__name__.lower(): obj}
        return render(request, self.template, context)

    def post(self, request, slug):
        obj = self.model.objects.get(slug__iexact=slug)
        obj.delete()
        return redirect(reverse(self.redirect_url))