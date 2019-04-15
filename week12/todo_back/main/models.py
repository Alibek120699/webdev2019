from django.db import models
from datetime import datetime

class Task(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return '{}: {}'.format(self.id, self.title)

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title
        }
