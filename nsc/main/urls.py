from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('academics/<str:pk>/', views.academics, name='academics'),
    path('admissions/', views.admissions, name="admissions"),
    path('faculty/', views.faculty, name="faculty"),
    path('events/', views.events, name="events"),
    path('faqs/', views.faqs, name="faqs"),

    path('plus2/', views.homePlus2, name="plus2"),
]