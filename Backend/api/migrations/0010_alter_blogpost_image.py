# Generated by Django 4.2.4 on 2024-06-12 10:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_blogpost'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='image',
            field=models.ImageField(upload_to='blog_images/'),
        ),
    ]
