from django.shortcuts import render
from django.views.generic import ListView
from posts.models import Post
class PostView(ListView):
	model = Post
	template_name = 'home.html'
