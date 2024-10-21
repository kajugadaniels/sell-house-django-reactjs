from home.models import *
from home.serializers import *
from account.serializers import *
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.core.exceptions import PermissionDenied
from rest_framework import generics, status, permissions
from rest_framework.permissions import IsAuthenticated, AllowAny

class projectListCreateView(generics.ListCreateAPIView):
    """
    View to list all Projects or create a new Project.
    GET: Accessible by all users.
    POST: Only accessible by users with 'Admin' role or superusers.
    """
    queryset = Project.objects.all().order_by('-id')
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

class projectRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    API view to retrieve, update, or delete a project. Only accessible to users with the 'Admin' role or superusers.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        project = get_object_or_404(Project, pk=self.kwargs['pk'])
        return project

    def get(self, request, *args, **kwargs):
        # Check if the user is a superuser or has the 'Admin' role
        if not request.user.is_superuser and request.user.role != 'Admin':
            raise PermissionDenied({'message': "You do not have permission to view this project."})
        return super().retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        # Check if the user is a superuser or has the 'Admin' role
        if not request.user.is_superuser and request.user.role != 'Admin':
            raise PermissionDenied({'message': "You do not have permission to update this project."})

        response = super().update(request, *args, **kwargs)
        if response.status_code == status.HTTP_200_OK:
            response.data['message'] = 'Project updated successfully.'
            return Response(response.data, status=status.HTTP_200_OK)
        else:
            return Response({
                'message': 'Project update failed.',
                'errors': response.data
            }, status=response.status_code)

    def delete(self, request, *args, **kwargs):
        # Check if the user is a superuser or has the 'Admin' role
        if not request.user.is_superuser and request.user.role != 'Admin':
            raise PermissionDenied({'message': "You do not have permission to delete this project."})

        project = self.get_object()
        project.delete()
        return Response({'message': 'Project deleted successfully.'}, status=status.HTTP_200_OK)

class contactListCreateView(generics.ListCreateAPIView):
    """
    View to list all Contact messages or create a new Contact message.
    GET: Only accessible by users with 'Admin' role or superusers.
    POST: Any user can create a contact message without authentication.
    """
    queryset = Contact.objects.all().order_by('-id')
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