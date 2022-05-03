from django.contrib import admin
from django.urls import path, include
from packages import views

urlpatterns = [
    path('', views.package_index, name="donations"),
    path('charge/', views.charge, name="charge"),
    path('success/<str:args>/', views.successMsg, name="success"),
]