from django.urls import path
from api import views

urlpatterns = [
	path('posts/', views.PostView.as_view(), name='home'),
	path('posts/<int:pk>/', views.PostDetailView.as_view(), name='post_detail'),
	path('posts/new/', views.BlogCreateView.as_view(), name="post_new"),
	path('posts/<int:pk>/edit/', views.BlogUpdateView.as_view(), name='post_edit'),
	path('posts/<int:pk>/delete', views.BlogDeleteView.as_view(), name='post_delete')
]