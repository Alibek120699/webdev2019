from django.db import models
from datetime import datetime

class TaskList(models.Model):
    name = models.CharField(max_length=50)


class Task(models.Model):
    STATUS_CHOICES = (
        ('D', 'DONE'),
        ('UD', 'UNDONE')
    )

    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(datetime.now())