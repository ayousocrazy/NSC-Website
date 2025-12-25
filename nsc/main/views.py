from django.shortcuts import render

def home(request):
    return render(request, "main/home.html")

def academics(request):
    return render(request, "main/academics.html")

def admissions(request):
    return render(request, "main/admissions.html")

def alumini(request):
    return render(request, "main/alumini.html")

def contact(request):
    return render(request, "main/contact.html")

def events(request):
    return render(request, "main/events.html")

def faqs(request):
    return render(request, "main/faqs.html")