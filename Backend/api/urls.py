from django.urls import path,include
from . import views
<<<<<<< HEAD
from .views import *
=======
from .views import donorViewSets
from .views import seekerViewSets
from .views import login_DonorViewSets
from .views import login_SeekerViewSets
from .views import contact_usViewSets
from .views import blog_ViewSets
>>>>>>> 74adefbcd49cfd5b286f1236fdd16d657ffda096
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r'donor',donorViewSets)
router.register(r'seeker',seekerViewSets)
router.register(r'contact_us',contact_usViewSets)
router.register(r'blogs',blog_ViewSets)
<<<<<<< HEAD
router.register(r'BroadcastModel',BroadcastModel_ViewSets)
=======
>>>>>>> 74adefbcd49cfd5b286f1236fdd16d657ffda096


urlpatterns = [
        path('',include(router.urls)),
        path('login/',views.login_view,name="loging in "),
<<<<<<< HEAD
        path('get_user/',views.get_user,name="get_user"),
        path('save_token/',views.saveDeviceToken,name='save token'),
        path('send_notification/',views.SendNotification,name='sendNotification'),
        path('broadcast_notification/',views.BroadCastNotification,name='broadcast_notification'),
=======
        path('get_user/',views.get_user,name="get_user")
        
>>>>>>> 74adefbcd49cfd5b286f1236fdd16d657ffda096
]
