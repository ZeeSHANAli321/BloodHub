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
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
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

class blog_ViewSets(viewsets.ModelViewSet):
    queryset =BlogPost.objects.all()
    serializer_class = BlogPostSerializer      

class BlogPostList(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer  

class BlogPostDetail(APIView):
    def get(self, request, id, format=None):
        try:
            blog_post = BlogPost.objects.get(pk=id)
            serializer = BlogPostSerializer(blog_post)
            return Response(serializer.data)
        except BlogPost.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)      

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"message": "Login successful"})
        else:
            return JsonResponse({"message": "Invalid credentials"}, status=400)    
