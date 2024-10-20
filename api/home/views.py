from home.models import *
from home.serializers import *
from account.serializers import *
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

class projectListCreateView(generics.ListCreateAPIView):
    """
    View to list all Projects or create a new Project.
    GET: Accessible by all users.
    POST: Only accessible by users with 'Admin' role or superusers.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]  # Default permission

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAuthenticated()]
        return [AllowAny()]

    def get(self, request, *args, **kwargs):
        # Allows anyone to list all Projects
        return super().list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        # Check if the user is a superuser or has the 'Admin' role
        if request.user.is_superuser or request.user.role == 'Admin':
            return self.create_project(request)
        else:
            return Response({
                'message': 'You do not have permission to create a project.'
            }, status=status.HTTP_403_FORBIDDEN)

    def create_project(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response({
                'message': 'Project created successfully.',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        
        return Response({
            'message': 'Project creation failed.',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class contactListCreateView(generics.ListCreateAPIView):
    """
    View to list all Contact messages or create a new Contact message.
    GET: Only accessible by users with 'Admin' role or superusers.
    POST: Any user can create a contact message without authentication.
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]  # Allows any user to access the view

    def get_permissions(self):
        if self.request.method == 'GET':
            return [IsAuthenticated()]
        return [AllowAny()]

    def get(self, request, *args, **kwargs):
        # Check if the user is a superuser or has the 'Admin' role
        if request.user.is_superuser or request.user.role == 'Admin':
            return super().list(request, *args, **kwargs)
        else:
            return Response({
                'message': 'You do not have permission to view contact messages.'
            }, status=status.HTTP_403_FORBIDDEN)

    def post(self, request, *args, **kwargs):
        # Allows any user to create a contact message without authentication
        return self.create_contact(request)

    def create_contact(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response({
                'message': 'Contact message created successfully.',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        
        return Response({
            'message': 'Contact message creation failed.',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)