from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def todo(request):
    page = """
    <h1>Todo</h1>
    <h2>1) Create Django Project</h2>
    """
    return HttpResponse(page)