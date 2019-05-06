# Generated by Django 2.2 on 2019-04-22 11:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TaskList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('due_on', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('D', 'DONE'), ('UD', 'UNDONE')], max_length=100)),
                ('task_list', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.TaskList')),
            ],
        ),
    ]
