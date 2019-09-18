from django.urls import path
from pages import views

urlpatterns = [
	path('home/', views.HomePage.as_view(), name='home'),
	path('about/', views.AboutPage.as_view(), name='about'),
]