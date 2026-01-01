from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.db.models import Case, When, IntegerField
from .models import *

def home(request):
    programs = Academics.objects.filter(level="bachelors").order_by(
        Case(
            When(program_key="csit", then=0),
            When(program_key="bca", then=1),
            default=2,
            output_field=IntegerField()
        ),
        "title"
    )
    default_program = programs.first()
    faqs = FAQs.objects.filter(level="bachelors").order_by("created")

    context = {
        "programs": programs,
        "default_program": default_program,
        "faqs": faqs
    }
    return render(request, "main/home.html", context)


def homePlus2(request):
    programs = Academics.objects.filter(level="plus2").order_by(
    Case(
        When(program_key="science", then=0),
        When(program_key="management", then=1),
        default=2,
        output_field=IntegerField()
    ),
    "title"
    )
    default_program = programs.first()
    faqs = FAQs.objects.filter(level="plus2").order_by("created")

    context = {
        "plus2": True,
        "programs": programs,
        "default_program": default_program,
        "faqs": faqs
    }
    return render(request, "main/home.html", context)

def academics(request, pk):
    program = Academics.objects.filter(program_key=pk).first()
    if program.level == "plus2":
        context = {
            "plus2": True,
            "program": program,
        }
        return render(request, "main/plus2academics.html", context)
    else:
        return render(request, "main/academics.html", {"program": program})

def admissions(request):
    return render(request, "main/admissions.html")

def alumini(request):
    return render(request, "main/alumini.html")

def events(request):
    return render(request, "main/events.html")

def faqs(request):
    return render(request, "main/faqs.html")