from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from .models import Donor
from .models import Seeker
from .models import login_Donor
from .models import login_Seeker
from .models import contact_us
from .serializers import donorSerializer
from .serializers import seekerSerializer
from .serializers import login_DomorSerializer
from .serializers import login_SeekerSerializer
from .serializers import contact_usSerializer
from .models import BlogPost
from .serializers import BlogPostSerializer



# Create your views here.
class donorViewSets(viewsets.ModelViewSet):
    queryset = Donor.objects.all()
    serializer_class = donorSerializer
     
class seekerViewSets(viewsets.ModelViewSet):
    queryset = Seeker.objects.all()
    serializer_class = seekerSerializer

class login_DonorViewSets(viewsets.ModelViewSet):
    queryset = login_Donor.objects.all()
    serializer_class = login_DomorSerializer

class login_SeekerViewSets(viewsets.ModelViewSet):
    queryset = login_Seeker.objects.all()
    serializer_class = login_SeekerSerializer

class contact_usViewSets(viewsets.ModelViewSet):
    queryset = contact_us.objects.all()
    serializer_class = contact_usSerializer  

class BlogPostList(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer    

   
