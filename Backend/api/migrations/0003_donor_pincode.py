# Generated by Django 4.2.4 on 2024-06-10 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_donor_any_blood_related_disease_alter_donor_mobileno'),
    ]

    operations = [
        migrations.AddField(
            model_name='donor',
            name='pincode',
            field=models.CharField(default='000000', max_length=10),
        ),
    ]
