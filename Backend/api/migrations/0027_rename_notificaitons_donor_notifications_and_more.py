# Generated by Django 5.0 on 2024-07-31 10:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0026_rename_url_notifications_page_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='donor',
            old_name='notificaitons',
            new_name='notifications',
        ),
        migrations.RenameField(
            model_name='seeker',
            old_name='notificaitons',
            new_name='notifications',
        ),
    ]
