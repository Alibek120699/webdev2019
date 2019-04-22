from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('tasklist/', views.tasklists),
    path('tasklist/<int:pk>/', views.tasklist_detail),
    path('tasklist/<int:pk>/tasks/', views.tasks_of_tasklist)
]
