# Generated by Django 5.0 on 2024-07-25 08:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_delete_login_donor_delete_login_seeker_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='broadcastmodel',
            options={'ordering': ['created_at']},
        ),
    ]