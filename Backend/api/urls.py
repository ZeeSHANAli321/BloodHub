from django.urls import path,include
from . import views
from .views import *
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r'donor',donorViewSets)
router.register(r'seeker',seekerViewSets)
router.register(r'contact_us',contact_usViewSets)
router.register(r'blogs',blog_ViewSets)
router.register(r'BroadcastModel',BroadcastModel_ViewSets)
router.register(r'Notifications',NotificationModel_ViewSets)
router.register(r'ChatBase',ChatBaseModel_Viewsets)
router.register(r'Message',MessageModel_Viewsets)
router.register(r'Slider',Slider_viewsets)


urlpatterns = [
        path('',include(router.urls)),
        path('login/',views.login_view,name="loging in "),
        path('get_user/',views.get_user,name="get_user"),
        path('save_token/',views.saveDeviceToken,name='save token'),
        path('send_notification/',views.SendNotification,name='sendNotification'),
        path('broadcast_notification/',views.BroadCastNotification,name='broadcast_notification'),
        path('remove_notification/',views.removeNotification,name='remove_notification'),
        path('get_broadcastList/<int:id>/',views.get_my_broadcast,name='get_broadcast'),
        path('update_donors/',views.update_donors,name='update_donors'),
        path('assign_donors/',views.assign_donors,name='assign_donors'),
        path('remove_assign_donors/',views.remove_assign_donors,name='remove_assign_donors'),
]
