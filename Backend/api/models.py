from django.db import models

# Create your models here.
class Donor(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    mobileNo = models.IntegerField()
    emailId = models.CharField(max_length=50)
    pincode = models.CharField(max_length=10, default='000000')
    bloodGroup = models.CharField(max_length=10,choices=(('',''),
                                                         ('A+','A+'),
                                                         ('A-','A-'),
                                                         ('B+','B+'),
                                                         ('B-','B-'),
                                                         ('O+','O+'),
                                                         ('O-','O-'),
                                                         ('AB+','AB+'),
                                                         ('AB-','AB-'),
                                                         ))
    dateOfBirth = models.DateField()
    Gender = models.CharField(max_length=10 , choices=(('',''),
                                                        ('Male','M'),
                                                       ('Female','F'),
                                                       ('Other','O')))

    address = models.CharField(max_length=250)
    any_blood_related_disease = models.TextField(blank=True)
    complete_address = models.TextField(blank=True)
    password = models.CharField(max_length=50 , default='0000')
    confirm_password = models.CharField(max_length=50 , default='0000')


class Seeker(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    mobileNo = models.IntegerField()
    emailId = models.CharField(max_length=50)
    bloodGroup = models.CharField(max_length=10,choices=(('',''),
                                                         ('A+','A+'),
                                                         ('A-','A-'),
                                                         ('B+','B+'),
                                                         ('B-','B-'),
                                                         ('O+','O+'),
                                                         ('O-','O-'),
                                                         ('AB+','AB+'),
                                                         ('AB-','AB-'),
                                                         ))
    dateOfBirth = models.DateField()
    Gender = models.CharField(max_length=10 , choices=(('',''),
                                                        ('Male','M'),
                                                       ('Female','F'),
                                                       ('Other','O')))
    any_blood_related_disease = models.TextField(blank=True)
    pincode = models.CharField(max_length=10, default='000000')
    complete_address = models.TextField(blank=True)
    password = models.CharField(max_length=50 , default='0000')
    confirm_password = models.CharField(max_length=50 , default='0000')
    required_unit = models.IntegerField()
    purpose = models.TextField(blank=True)
    when_Needed = models.TextField(blank=True)
    hospital_name = models.TextField(blank=True)
    want_to_broadcast = models.BooleanField(default=False)
    broadcast_message = models.TextField(blank=True)

class login_Donor(models.Model):
    email = models.EmailField()  
    password = models.CharField(max_length=50 , default='0000')

class login_Seeker(models.Model):
    email = models.EmailField()  
    password = models.CharField(max_length=50 , default='0000')

class contact_us(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.TextField(blank=True)
    message = models.TextField(blank=True)                     


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='blog_images/')
    description = models.TextField()


