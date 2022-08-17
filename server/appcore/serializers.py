from rest_framework import serializers

from appcore.models import *

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Message
        fields  = ['legalname', 'email', 'message']
