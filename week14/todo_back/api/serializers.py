from rest_framework import serializers
from api.models import TaskList, Task
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', )

class TaskSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    tasklist_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Task
        fields = ('id', 'name', 'tasklist_id', )

class TaskListSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    created_by = UserSerializer(read_only=True)
    tasks = TaskSerializer(many=True)

    class Meta:
        model = TaskList
        fields = ('id', 'name', 'created_by', 'tasks',)

    def create(self, validated_data):
        tasks = validated_data.pop('tasks')
        tasklist = TaskList.objects.create(**validated_data)
        for t in tasks:
            Task.objects.create(tasklist=tasklist, **t)
        return tasklist


