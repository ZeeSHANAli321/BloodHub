# Generated by Django 5.0 on 2024-08-04 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0044_notifications_broadcastid_alter_notifications_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='broadcastmodel',
            name='accepted_donors',
            field=models.ManyToManyField(blank=True, related_name='accepted_broadcasts', to='api.donor'),
        ),
        migrations.AddField(
            model_name='broadcastmodel',
            name='denied_donors',
            field=models.ManyToManyField(blank=True, related_name='denied_broadcasts', to='api.donor'),
        ),
        migrations.AlterField(
            model_name='broadcastmodel',
            name='notified_donors',
            field=models.ManyToManyField(blank=True, related_name='notified_broadcasts', to='api.donor'),
        ),
    ]
