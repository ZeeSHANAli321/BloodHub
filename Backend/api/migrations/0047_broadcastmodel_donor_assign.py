# Generated by Django 5.0 on 2024-08-04 05:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0046_remove_broadcastmodel_donor_assign'),
    ]

    operations = [
        migrations.AddField(
            model_name='broadcastmodel',
            name='donor_assign',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='assigned_broadcasts', to='api.donor'),
        ),
    ]