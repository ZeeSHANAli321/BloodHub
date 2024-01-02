from django.db import models

# Create your models here.
class Donor(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    mobileNo = models.IntegerField()
    emailId = models.CharField(max_length=50)
    bloodGroup = models.CharField(max_length=10,choices=(('A+','A+'),
                                                         ('A-','A-'),
                                                         ('B+','B+'),
                                                         ('B-','B-'),
                                                         ('O+','O+'),
                                                         ('O-','O-'),
                                                         ('AB+','AB+'),
                                                         ('AB-','AB-'),
                                                         ))
    dateOfBirth = models.DateField()
    Gender = models.CharField(max_length=10 , choices=(('Male','M'),
                                                       ('Female','F'),
                                                       ('Other','O')))