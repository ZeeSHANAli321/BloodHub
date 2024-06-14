from rest_framework import serializers
from .models import Donor
from .models import Seeker
from .models import login_Donor
from .models import login_Seeker
from .models import contact_us
from .models import BlogPost

class donorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Donor
        fields="__all__"

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        return Donor.objects.create(**validated_data)

class seekerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Seeker
        fields="__all__"

class login_DomorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=login_Donor
        fields="__all__"

class login_SeekerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=login_Seeker
        fields="__all__"  

class contact_usSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=contact_us
        fields = "__all__"   

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'                       