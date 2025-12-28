from django.db import models
from django.urls import reverse

class Academics(models.Model):
    PROGRAM_CHOICES = [
        ('csit', 'BSc CSIT'),
        ('bca', 'BCA'),
        ('bbm', 'BBM'),
        ('bbs', 'BBS'),
    ]

    program_key = models.CharField(max_length=10, choices=PROGRAM_CHOICES, unique=True)
    title = models.CharField(max_length=150)

    what = models.TextField()
    how = models.TextField()
    why = models.TextField()
    description = models.TextField()

    image1 = models.ImageField(upload_to='academics')
    image2 = models.ImageField(upload_to='academics')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('academics', kwargs={'pk': self.program_key})