# Generated by Django 5.0 on 2024-07-23 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_notificationsubscriptions_useremail'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserDevice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(default='User not found', max_length=200)),
                ('device_token', models.CharField(max_length=255)),
            ],
        ),
        migrations.DeleteModel(
            name='NotificationSubscriptions',
        ),
    ]
