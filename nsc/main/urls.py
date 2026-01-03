from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('academics/<str:pk>/', views.academics, name='academics'),
    path('admissions/', views.admissions, name="admissions"),
    path('faculty/', views.faculty, name="faculty"),
    path('about/', views.about, name="about"),

    path('plus2/', views.homePlus2, name="plus2"),
    path('form/', views.form, name="form"),
]