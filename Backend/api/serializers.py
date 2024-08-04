from rest_framework import serializers
from .models import *

class contact_usSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = contact_us
        fields = "__all__"

class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['title', 'image', 'description', 'id']



class NotificationModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Notifications
        fields = "__all__"

class MessageModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"

class ChatBaseModelSerializer(serializers.HyperlinkedModelSerializer):
    messages = MessageModelSerializer(many=True, read_only=True)
    class Meta:
        model = ChatBase
        fields = "__all__"

class donorSerializer(serializers.HyperlinkedModelSerializer):
    notifications = NotificationModelSerializer(many=True, read_only=True)
    ChatBases = ChatBaseModelSerializer(many=True, read_only=True)
    class Meta:
        model = Donor
        fields = "__all__"
        
class BroadcastModelSerializer(serializers.HyperlinkedModelSerializer):
    notified_donors = donorSerializer(many=True, read_only=True)
    accepted_donors = donorSerializer(many=True, read_only=True)
    denied_donors = donorSerializer(many=True, read_only=True)
    donor_assign = donorSerializer()
    class Meta:
        model = BroadcastModel
        fields = "__all__"
        
class seekerSerializer(serializers.HyperlinkedModelSerializer):
    notifications = NotificationModelSerializer(many=True, read_only=True)
    ChatBases = ChatBaseModelSerializer(many=True, read_only=True)
    class Meta:
        model = Seeker
        fields = "__all__"
        
class sliderSerialiszer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Slider
        fields = "__all__"
    
