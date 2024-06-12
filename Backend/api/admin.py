from django.contrib import admin
from .models import Donor
from .models import Seeker
from .models import login_Donor
from .models import login_Seeker
from .models import contact_us
from .models import BlogPost
# Register your models here.
admin.site.register(Donor)
admin.site.register(Seeker)
admin.site.register(login_Donor)
admin.site.register(login_Seeker)
admin.site.register(contact_us)
admin.site.register(BlogPost)

