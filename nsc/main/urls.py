from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('academics/', views.academics, name="academics"),
    path('admissions/', views.admissions, name="admissions"),
    path('alumini/', views.alumini, name="alumini"),
    path('events/', views.events, name="events"),
    path('faqs/', views.faqs, name="faqs"),
]