from django.contrib import admin
from .models import *


class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'description','image')
    search_fields = ('title', 'description' , 'image')
    list_editable=('image',)

class NotificationsAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'created_at', 'type')  
    search_fields = ('title', 'description')  
    list_filter = ('type', 'created_at') 

class DonorAdmin(admin.ModelAdmin):
    list_display = ('firstName', 'lastName', 'emailId', 'bloodGroup', 'mobileNo')  # Customize list view
    search_fields = ('firstName', 'lastName', 'emailId')  # Enable searching
    list_filter = ('bloodGroup', 'Gender')  # Add filters     

class BroadcastModelAdmin(admin.ModelAdmin):
    list_display = ('bloodGroup', 'requireUnit', 'address', 'userId', 'created_at')
    search_fields = ('userId', 'msg')
    list_filter = ('bloodGroup', 'created_at')

class SeekerAdmin(admin.ModelAdmin):
    list_display = ('firstName', 'lastName', 'emailId', 'bloodGroup', 'required_unit', 'want_to_broadcast')
    search_fields = ('firstName', 'lastName', 'emailId')
    list_filter = ('bloodGroup', 'want_to_broadcast')    


class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject')
    search_fields = ('name', 'email')

class UserDeviceAdmin(admin.ModelAdmin):
    list_display = ('user', 'device_token')
    search_fields = ('user',)


# Register your models here.
admin.site.register(Donor,DonorAdmin)
admin.site.register(Seeker, SeekerAdmin)
admin.site.register(contact_us , ContactUsAdmin)
admin.site.register(BlogPost , BlogPostAdmin)
admin.site.register(UserDevice,UserDeviceAdmin)
admin.site.register(BroadcastModel , BroadcastModelAdmin)
admin.site.register(Notifications , NotificationsAdmin)

