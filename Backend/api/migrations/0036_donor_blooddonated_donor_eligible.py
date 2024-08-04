# Generated by Django 5.0 on 2024-08-03 07:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0035_slider'),
    ]

    operations = [
        migrations.AddField(
            model_name='donor',
            name='bloodDonated',
            field=models.ManyToManyField(related_name='donors', to='api.broadcastmodel'),
        ),
        migrations.AddField(
            model_name='donor',
            name='eligible',
            field=models.BooleanField(default=True),
        ),
    ]