from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from django.core.serializers import serialize
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
from django.contrib.auth.hashers import check_password


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

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        userEmail = data.get('userEmail')
        password = data.get('password')
        isDonor = data.get('isDonor')
    
        if isDonor:
            user = Donor.objects.filter(emailId=userEmail,password=password).first()
            user_type = "donor"
        else:
            user = Seeker.objects.filter(emailId=userEmail,password=password).first()
            user_type = "seeker"

        if user is not None :
            user_data = json.loads(serialize('json', [user]))[0]['fields']
            user_data['id'] = user.id  
            return JsonResponse({
                "message": "Login successful",
                "type": user_type,
                'status': 'success',
                "user": user_data,
            }, status=200)
        else:
            return JsonResponse({
                "message": "Invalid credentials",
                'status': 'failed'
            }, status=400)

@csrf_exempt
def get_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        userEmail = data.get('userEmail')
        password = data.get('password')
        isDonor = data.get('isDonor')
        if isDonor:
            user = Donor.objects.filter(emailId=userEmail, password=password).first()
        else:
            user = Seeker.objects.filter(emailId=userEmail, password=password).first()

        if user is not None:
            user_data = json.loads(serialize('json', [user]))[0]['fields']
            user_data['id'] = user.id  
            return JsonResponse({
                "message": "Login successful",
                'status': 'success',
                "user": user_data,
            }, status=200)
        else:
            return JsonResponse({
                "message": "Invalid credentials",
                'status': 'failed'
            }, status=400)
    return JsonResponse({
        "message": "Invalid request method",
        'status': 'failed'
    }, status=405)
    