from .models import Academics
from django.db.models import Case, When, IntegerField

def academic_program(request):
    plus_programs = Academics.objects.filter(level="plus2").order_by(
    Case(
        When(program_key="science", then=0),
        When(program_key="management", then=1),
        default=2,
        output_field=IntegerField()
    ),
    "title"
    )

    bachelors_programs = Academics.objects.filter(level="bachelors").order_by(
        Case(
            When(program_key="csit", then=0),
            When(program_key="bca", then=1),
            default=2,
            output_field=IntegerField()
        ),
        "title"
    )

    return {'plus2_programs': plus_programs, 'bachelors_programs': bachelors_programs}