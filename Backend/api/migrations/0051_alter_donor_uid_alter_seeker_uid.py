# Generated by Django 5.0 on 2024-08-05 01:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0050_alter_donor_blooddonated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donor',
            name='uId',
            field=models.CharField(default='DO', max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='seeker',
            name='uId',
            field=models.CharField(default='SE', max_length=50, unique=True),
        ),
    ]
