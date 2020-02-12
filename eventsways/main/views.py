from django.shortcuts import render

# Create your views here.

def main(request):
    return render(request, 'main/main.html')

def events(request):
    return render(request, 'main/events.html')

def blog(request):
    return render(request, 'main/blog.html')

def about(request):
    return render(request, 'main/about.html')

def support(request):
    return render(request, 'main/support.html')