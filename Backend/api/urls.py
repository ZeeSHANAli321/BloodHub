from django.urls import path,include
from . import views
from .views import donorViewSets
from .views import seekerViewSets
from .views import login_DonorViewSets
from .views import login_SeekerViewSets
from .views import contact_usViewSets
from .views import blog_ViewSets
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r'donor',donorViewSets)
router.register(r'seeker',seekerViewSets)
router.register(r'login_Donor',login_DonorViewSets)
router.register(r'login_Seeker',login_SeekerViewSets)
router.register(r'contact_us',contact_usViewSets)
router.register(r'blogs',blog_ViewSets)


urlpatterns = [
        path('',include(router.urls)),
        path('login/',views.login_view,name="loging in "),
        path('get_user/',views.get_user,name="get_user")
        
]
