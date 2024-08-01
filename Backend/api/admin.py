from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Donor)
admin.site.register(Seeker)
admin.site.register(contact_us)
admin.site.register(BlogPost)
admin.site.register(UserDevice)
admin.site.register(BroadcastModel)
admin.site.register(Notifications)
admin.site.register(Message)
admin.site.register(ChatBase)

