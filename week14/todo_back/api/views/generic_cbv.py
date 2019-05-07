from django.http import Http404
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

from api.models import TaskList, Task
from api.serializers import TaskListSerializer, TaskSerializer
from api.filters import TaskFilter


class TaskLists(generics.ListCreateAPIView):
    # queryset = TaskList.objects.all()
    # serializer_class = TaskListSerializer

    permission_classes = ( IsAuthenticated, )

    def get_queryset(self):
        return TaskList.objects.for_user(self.request.user)

    def get_serializer_class(self):
        return TaskListSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class TaskListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer

class TasksOfTaskList(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    pagination_class = LimitOffsetPagination
    filter_backends = (DjangoFilterBackend,
                       filters.SearchFilter,
                       filters.OrderingFilter)

    # TODO DjangoFilterBackend
    filter_class = TaskFilter

    # TODO SearFilter
    search_fields = ('name', 'id')
    ordering = ('name',)

    def get_queryset(self):
        # tasklist = get_object_or_404(TaskList, id=self.kwargs.get('pk'))
        try:
            tasklist = TaskList.objects.get(id=self.kwargs.get('pk'))
        except TaskList.DoesNotExist:
            raise Http404
        queryset = tasklist.tasks.all()
        return queryset

