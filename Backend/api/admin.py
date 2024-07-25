from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Donor)
admin.site.register(Seeker)
admin.site.register(contact_us)
admin.site.register(BlogPost)
admin.site.register(UserDevice)
admin.site.register(BroadcastModel)

