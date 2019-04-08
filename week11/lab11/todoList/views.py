from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

def index(request):
    variable = {
        'name': 'Alibek'
    }
    return render(request, 'index.html', variable)

def current_time(request, pk):
    return HttpResponse('<h1>{}-->{}</h1>'.format(datetime.now(), pk))

def current_time_2(request):
    return render(request, 'time.html')
    #return HttpResponse('<h1>arg num: {}</h1>'.format(num))