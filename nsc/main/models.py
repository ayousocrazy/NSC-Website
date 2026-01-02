from django.db import models
from django.urls import reverse

class Academics(models.Model):
    PROGRAM_LEVEL = [
        ('plus2', '+2 (NEB)'),
        ('bachelors', 'Bachelors'),
    ]

    PROGRAM_CHOICES = [
        ('science', 'Science'),
        ('management', 'Management'),
        ('law', 'Law'),
        ('csit', 'BSc CSIT'),
        ('bca', 'BCA'),
        ('bbm', 'BBM'),
        ('bbs', 'BBS'),
    ]

    program_key = models.CharField(max_length=15, choices=PROGRAM_CHOICES, unique=True)
    title = models.CharField(max_length=150)
    description = models.TextField()
    image = models.ImageField(upload_to='academics', blank=True, null=True)
    level = models.CharField(max_length=12, choices=PROGRAM_LEVEL)
    overview = models.TextField(null=True, blank=True)
    criteria = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('academics', kwargs={'pk': self.program_key})
    
class Course(models.Model):
    program = models.ForeignKey(Academics, on_delete=models.CASCADE, related_name="courses")
    year = models.PositiveIntegerField()
    semester = models.PositiveIntegerField(null=True, blank=True)

    class Meta:
        unique_together = ('program', 'year', 'semester')
        ordering = ['year', 'semester']

    def __str__(self):
        return f"{self.program} — Year {self.year}, Semester {self.semester}"


class Subject(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="subjects")
    code = models.CharField(max_length=20)
    name = models.CharField(max_length=150)

    class Meta:
        unique_together = ('course', 'code')
        ordering = ['code']

    def __str__(self):
        return f"{self.code} {self.name}"
    
class Career(models.Model):
    program = models.ForeignKey(Academics, on_delete=models.CASCADE, related_name="careers")
    organization = models.CharField(max_length=150)
    positions = models.TextField()

    def __str__(self):
        return f"{self.program} {self.organization}"
    
class SubjectPlus2(models.Model):
    program = models.ForeignKey(Academics, on_delete=models.CASCADE, related_name="plus2_subjects")
    name = models.CharField(max_length=150)
    description = models.TextField()
    optional = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.program} {self.name}"

class CareerPlus2(models.Model):
    program = models.ForeignKey(Academics, on_delete=models.CASCADE, related_name="plus2_careers")
    degree = models.CharField(max_length=150)
    careers = models.TextField()

    def __str__(self):
        return f"{self.program} {self.degree}"

class FAQs(models.Model):
    PROGRAM_LEVEL = [
        ('plus2', '+2 (NEB)'),
        ('bachelors', 'Bachelors'),
    ]
    level = models.CharField(max_length=12, choices=PROGRAM_LEVEL)
    question = models.CharField(max_length=150)
    answer = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question

class Faculty(models.Model):
    CATEGORY_CHOICES = [
        ('MANAGEMENT', 'College Management'),  
        ('HOD', 'Heads of Departments'),       
        ('TEACHING', 'Teaching Faculty'),      
        ('NON_TEACHING', 'Non-Teaching Staff'),
    ]

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='faculty', blank=True, null=True)

    description = models.TextField(
        help_text="Designation, subjects taught, responsibilities, etc."
    )

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.name
