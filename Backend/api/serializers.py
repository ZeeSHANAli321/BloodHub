from rest_framework import serializers
from .models import *


class donorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Donor
        fields="__all__"
    def create(self, validated_data):
        validated_data.pop('confirm_password')
        return Donor.objects.create(**validated_data)

class seekerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Seeker
        fields="__all__"

class contact_usSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=contact_us
        fields = "__all__"  

class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogPost
<<<<<<< HEAD
        fields = ['title','image','description','id']                       
        
class BroadcastModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BroadcastModel
        fields = "__all__"
=======
        fields = ['title','image','description','id']                       
>>>>>>> 74adefbcd49cfd5b286f1236fdd16d657ffda096
