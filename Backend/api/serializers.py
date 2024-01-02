from rest_framework import serializers
from .models import Donor

class donorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Donor
        fields="__all__"