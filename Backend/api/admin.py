from django.contrib import admin
<<<<<<< HEAD
from .models import Donor
from .models import Seeker
from .models import login_Donor
from .models import login_Seeker
from .models import contact_us
from .models import BlogPost

class DonorAdmin(admin.ModelAdmin):
    list_display=('firstName','lastName','bloodGroup','address','password','confirm_password')
    list_editable=('password','confirm_password','bloodGroup')
    list_filter=('bloodGroup',)

class SeekerAdmin(admin.ModelAdmin):
    list_display=('firstName','lastName','bloodGroup','complete_address')  
    list_filter=('bloodGroup',)

class AdminBlogPost(admin.ModelAdmin):
    list_display=('title','image','description')  
    list_editable=('image',)
    list_filter=('title',)      

class contact_usAdmin(admin.ModelAdmin):
    list_display=('name','email','subject','message')


# Register your models here.
admin.site.register(Donor,DonorAdmin)
admin.site.register(Seeker,SeekerAdmin)
admin.site.register(login_Donor)
admin.site.register(login_Seeker)
admin.site.register(contact_us,contact_usAdmin)
admin.site.register(BlogPost,AdminBlogPost)
=======
from .models import *

# Register your models here.
admin.site.register(Donor)
admin.site.register(Seeker)
admin.site.register(contact_us)
admin.site.register(BlogPost)
admin.site.register(UserDevice)
admin.site.register(BroadcastModel)
>>>>>>> 6539a0056363fbe5bca17554793285cc107eecb4

