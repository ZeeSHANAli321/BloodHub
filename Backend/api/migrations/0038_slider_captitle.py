# Generated by Django 5.0 on 2024-08-03 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0037_alter_seeker_chatbases_alter_seeker_broadcastlist_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='slider',
            name='capTitle',
            field=models.CharField(default='null', max_length=50),
        ),
    ]
