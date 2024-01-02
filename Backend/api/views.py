from django.shortcuts import render
from rest_framework import viewsets
from .models import Donor
from .serializers import donorSerializer

# Create your views here.
class donorViewSets(viewsets.ModelViewSet):
    queryset = Donor.objects.all()
    serializer_class = donorSerializer
     