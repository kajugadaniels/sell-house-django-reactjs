import string
from home.models import *
from rest_framework import serializers
from django.contrib.auth.models import Permission

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'phone_number', 'message']

class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Project
        fields = ['id', 'title', 'slug', 'total_area', 'living_space', 'price', 'location', 'year', 'category', 'description', 'image']

    def update(self, instance, validated_data):
        # Handle image upload separately if provided
        if 'image' in validated_data:
            instance.image = validated_data.pop('image')

        # Update the other fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        
        instance.save()
        return instance