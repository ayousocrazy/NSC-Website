from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from .models import *

def home(request):
    programs = Academics.objects.all()
    default_program = Academics.objects.filter(program_key="csit").first()

    context = {
        "programs": programs,      
        "default_program": default_program 
    }
    return render(request, "main/home.html", context)

def homePlus2(request):
    programs = AcademicsPlus2.objects.all()
    default_program = AcademicsPlus2.objects.filter(program_key="science").first()

    context = {
        "plus2": True,
        "programs": programs,      
        "default_program": default_program 
    }
    return render(request, "main/home.html", context)

def academics(request):
    return render(request, "main/academics.html")

def admissions(request):
    return render(request, "main/admissions.html")

def alumini(request):
    return render(request, "main/alumini.html")

def events(request):
    return render(request, "main/events.html")

def faqs(request):
    return render(request, "main/faqs.html")