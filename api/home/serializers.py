import string
from home.models import *
from rest_framework import serializers
from django.contrib.auth.models import Permission

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'phone_number', 'message']