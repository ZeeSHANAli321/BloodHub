# Generated by Django 5.0 on 2024-08-03 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0039_remove_slider_captitle_seeker_bloodseeked'),
    ]

    operations = [
        migrations.AddField(
            model_name='broadcastmodel',
            name='donated',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='broadcastmodel',
            name='donor_assign',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
