from django.urls import path, re_path
from todoList import views

urlpatterns = [
    path('index/', views.index),
    path('time/<int:pk>/', views.current_time),
    re_path(r'arg/\d{1,3}/', views.current_time_2)
]