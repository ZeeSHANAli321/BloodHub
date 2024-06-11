# Generated by Django 4.2.4 on 2024-06-10 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_donor_complete_address_donor_confirm_password_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Seeker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=50)),
                ('lastName', models.CharField(max_length=50)),
                ('mobileNo', models.IntegerField()),
                ('emailId', models.CharField(max_length=50)),
                ('bloodGroup', models.CharField(choices=[('', ''), ('A+', 'A+'), ('A-', 'A-'), ('B+', 'B+'), ('B-', 'B-'), ('O+', 'O+'), ('O-', 'O-'), ('AB+', 'AB+'), ('AB-', 'AB-')], max_length=10)),
                ('dateOfBirth', models.DateField()),
                ('Gender', models.CharField(choices=[('', ''), ('Male', 'M'), ('Female', 'F'), ('Other', 'O')], max_length=10)),
                ('any_blood_related_disease', models.TextField(blank=True)),
                ('pincode', models.CharField(default='000000', max_length=10)),
                ('complete_address', models.TextField(blank=True)),
                ('password', models.CharField(default='0000', max_length=50)),
                ('confirm_password', models.CharField(default='0000', max_length=50)),
                ('required_unit', models.IntegerField()),
                ('purpose', models.TextField(blank=True)),
                ('when_Needed', models.TextField(blank=True)),
                ('hospital_name', models.TextField(blank=True)),
                ('want_to_broadcast', models.BooleanField(default=False)),
                ('broadcast_message', models.TextField(blank=True)),
            ],
        ),
        migrations.AlterField(
            model_name='donor',
            name='Gender',
            field=models.CharField(choices=[('', ''), ('Male', 'M'), ('Female', 'F'), ('Other', 'O')], max_length=10),
        ),
        migrations.AlterField(
            model_name='donor',
            name='bloodGroup',
            field=models.CharField(choices=[('', ''), ('A+', 'A+'), ('A-', 'A-'), ('B+', 'B+'), ('B-', 'B-'), ('O+', 'O+'), ('O-', 'O-'), ('AB+', 'AB+'), ('AB-', 'AB-')], max_length=10),
        ),
    ]