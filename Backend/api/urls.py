from django.urls import path,include
from .views import donorViewSets
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'donor',donorViewSets)

urlpatterns = [
        path('',include(router.urls))
]
