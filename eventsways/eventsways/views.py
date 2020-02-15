from django.http import HttpResponse
from django.shortcuts import redirect


def redirect_events(request):
    return redirect('events', permanent=True)