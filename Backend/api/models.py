from django.db import models

# Create your models here.
class Notifications(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    logo = models.ImageField(upload_to='notification_logos/',null=True)
    page_url = models.TextField(null=True)
    date = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=10,choices=(('Chat','Chat'),
                                                   ('Broadcast','Broadcast'),
                                                   ('Map','Map'),
                                                   ('BloodCamp','BloodCamp'),
                                                   ('','')))
class Message(models.Model):
    text = models.TextField()
    msg_from = models.CharField(max_length=100)
    msg_to = models.CharField(max_length=100)
    dateTime = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=15,choices=(('saved','saved'),
                                                     ('read','read')))
    def __str__(self):
        return f"{self.msg_from} to {self.msg_to} : {self.text}"
    
class ChatBase(models.Model):
    name = models.CharField(max_length=100)
    messages = models.ManyToManyField(Message,related_name='chat_bases')
    
    def __str__(self):
        return f"{self.name}'s"
    
class Donor(models.Model):
    type=models.CharField(default="DONOR", max_length=50 )
    dp = models.ImageField(upload_to='dp_images/',default="default_pics/blooddonor.png")
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    mobileNo = models.IntegerField()
    emailId = models.CharField(max_length=50,unique=True)
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
    password = models.CharField(max_length=50)
    
    lat = models.DecimalField(max_digits=9, decimal_places=6,null=True)
    lng = models.DecimalField(max_digits=9, decimal_places=6,null=True)

    notifications = models.ManyToManyField(Notifications,related_name='donors')
    ChatBases = models.ManyToManyField(ChatBase,related_name='donors')
    def __str__(self):
        return f"{self.firstName} {self.lastName}"
class BroadcastModel(models.Model):
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
    requireUnit = models.IntegerField()
    address = models.CharField(max_length=150)
    msg = models.CharField(max_length=150)
    userId = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['created_at'] 
    def __str__(self):
        return f"{self.userId}'s created at {self.created_at}"
        
class Seeker(models.Model):
    type=models.CharField(default="SEEKER", max_length=50 )
    dp = models.ImageField(upload_to='dp_images/',default="default_pics/job-seeker.png")
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    mobileNo = models.IntegerField()
    emailId = models.CharField(max_length=50,unique=True)
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
    password = models.CharField(max_length=50 )
    required_unit = models.IntegerField()
    purpose = models.TextField(blank=True)
    when_Needed = models.TextField(blank=True)
    hospital_name = models.TextField(blank=True)
    want_to_broadcast = models.BooleanField(default=False)
    broadcast_message = models.TextField(blank=True)
    
    lat = models.DecimalField(max_digits=9, decimal_places=6,null=True)
    lng = models.DecimalField(max_digits=9, decimal_places=6,null=True)
    
    broadcastList = models.ManyToManyField(BroadcastModel,related_name='Seeker')
    notifications = models.ManyToManyField(Notifications,related_name='Seeker')
    ChatBases = models.ManyToManyField(ChatBase,related_name='Seeker')

    def __str__(self):
        return f"{self.firstName} {self.lastName}"

class contact_us(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.TextField(blank=True)
    message = models.TextField(blank=True)
    def __str__(self):
        return f"{self.name}"

class BlogPost(models.Model):
    
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='blog_images/')
    description = models.TextField()
    def __str__(self):
        return f"{self.title}"

class UserDevice(models.Model):
    user = models.CharField(max_length=100,default="User not found",unique=True)
    device_token = models.CharField(max_length=255)
    def __str__(self):
        return F"{self.user}'s Device Token"

