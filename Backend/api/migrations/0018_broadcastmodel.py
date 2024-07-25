# Generated by Django 5.0 on 2024-07-25 06:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_alter_userdevice_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='BroadcastModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bloodGroup', models.CharField(choices=[('', ''), ('A+', 'A+'), ('A-', 'A-'), ('B+', 'B+'), ('B-', 'B-'), ('O+', 'O+'), ('O-', 'O-'), ('AB+', 'AB+'), ('AB-', 'AB-')], max_length=10)),
                ('requireUnit', models.IntegerField()),
                ('address', models.CharField(max_length=150)),
                ('msg', models.CharField(max_length=150)),
                ('userId', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
