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
    image = models.ImageField(upload_to='academics')  # unified image field
    level = models.CharField(max_length=12, choices=PROGRAM_LEVEL)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('academics', kwargs={'pk': self.program_key})

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