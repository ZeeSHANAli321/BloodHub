from django.urls import path,include
from .views import donorViewSets
from .views import BlogPostList
from .views import seekerViewSets
from .views import login_DonorViewSets
from .views import login_SeekerViewSets
from .views import contact_usViewSets
from rest_framework import routers
from .views import BlogPostDetail



router = routers.DefaultRouter()
router.register(r'donor',donorViewSets)
router.register(r'seeker',seekerViewSets)
router.register(r'login_Donor',login_DonorViewSets)
router.register(r'login_Seeker',login_SeekerViewSets)
router.register(r'contact_us',contact_usViewSets)


urlpatterns = [
        path('',include(router.urls)),
        path('blog-posts/', BlogPostList.as_view(), name='blog-post-list'),
        path('api/blog-posts/<int:id>/', BlogPostDetail.as_view(), name='blog-post-detail'),
]
