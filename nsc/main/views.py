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

from django.shortcuts import get_object_or_404, render
from .models import Academics, Course, Career

def academics(request, pk):
    program = get_object_or_404(Academics, program_key=pk)

    if program.level == "plus2":
        core_subjects = SubjectPlus2.objects.filter(program=program, optional=False)
        optional_subjects = SubjectPlus2.objects.filter(program=program, optional=True)
        careers = CareerPlus2.objects.filter(program=program)
        program.criteria = program.criteria.split('\n') if program.criteria else []


        context = {
            "plus2": True,
            "program": program,
            "core_subjects": core_subjects,
            "optional_subjects": optional_subjects,
            "careers": careers,
        }
        return render(request, "main/plus2academics.html", context)

    courses = Course.objects.filter(program=program).order_by('year', 'semester')
    careers = Career.objects.filter(program=program)
    program.criteria = program.criteria.split('\n') if program.criteria else []

    context = {
        "program": program,
        "courses": courses,
        "careers": careers,
    }

    return render(request, "main/academics.html", context)


def admissions(request):
    return render(request, "main/admissions.html")

def alumini(request):
    return render(request, "main/alumini.html")

def events(request):
    return render(request, "main/events.html")

def faqs(request):
    return render(request, "main/faqs.html")