from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from datetime import datetime
from main.models import Task

def tasks(request):
    t = tasks.objects.all()
    t = [task.to_json() for task in tasks]
    data = {
        'tasks': t
    }
    return JsonResponse(data, safe=False)
