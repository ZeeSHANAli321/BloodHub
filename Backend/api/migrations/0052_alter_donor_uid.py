# Generated by Django 5.0 on 2024-08-05 01:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0051_alter_donor_uid_alter_seeker_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donor',
            name='uId',
            field=models.CharField(blank=True, max_length=50, unique=True),
        ),
    ]
