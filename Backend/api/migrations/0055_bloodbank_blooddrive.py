# Generated by Django 4.2.4 on 2024-08-06 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0054_alter_chatbase_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='BloodBank',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=200)),
                ('contact_phone', models.CharField(max_length=15)),
                ('lat', models.DecimalField(decimal_places=6, max_digits=9, null=True)),
                ('lng', models.DecimalField(decimal_places=6, max_digits=9, null=True)),
                ('contact_email', models.EmailField(max_length=254)),
                ('blood_Quantity', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='blood_bank_images/')),
            ],
        ),
        migrations.CreateModel(
            name='BloodDrive',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('organizer', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('address', models.CharField(max_length=200)),
                ('lat', models.DecimalField(decimal_places=6, max_digits=9, null=True)),
                ('lng', models.DecimalField(decimal_places=6, max_digits=9, null=True)),
                ('contact_phone', models.CharField(max_length=15)),
                ('contact_email', models.EmailField(max_length=254)),
                ('description', models.TextField(blank=True, null=True)),
                ('requirements', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='blood_drive_images/')),
            ],
        ),
    ]
