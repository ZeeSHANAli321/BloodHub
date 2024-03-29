# Generated by Django 5.0 on 2024-01-02 07:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Donor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=50)),
                ('lastName', models.CharField(max_length=50)),
                ('mobileNo', models.IntegerField(max_length=10)),
                ('emailId', models.CharField(max_length=50)),
                ('bloodGroup', models.CharField(choices=[('A+', 'A+'), ('A-', 'A-'), ('B+', 'B+'), ('B-', 'B-'), ('O+', 'O+'), ('O-', 'O-'), ('AB+', 'AB+'), ('AB-', 'AB-')], max_length=10)),
                ('dateOfBirth', models.DateField()),
                ('Gender', models.CharField(choices=[('Male', 'M'), ('Female', 'F'), ('Other', 'O')], max_length=10)),
            ],
        ),
    ]
