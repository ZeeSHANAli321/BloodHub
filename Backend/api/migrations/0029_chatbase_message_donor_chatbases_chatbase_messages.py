# Generated by Django 5.0 on 2024-07-31 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0028_rename_created_at_notifications_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChatBase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('msg_from', models.CharField(max_length=100)),
                ('msg_to', models.CharField(max_length=100)),
                ('dateTime', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('saved', 'saved'), ('read', 'read')], max_length=15)),
            ],
        ),
        migrations.AddField(
            model_name='donor',
            name='ChatBases',
            field=models.ManyToManyField(to='api.chatbase'),
        ),
        migrations.AddField(
            model_name='chatbase',
            name='messages',
            field=models.ManyToManyField(to='api.message'),
        ),
    ]