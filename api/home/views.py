from home.models import *
from home.serializers import *
from account.serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status,permissions

class contactListCreateView(generics.ListCreateAPIView):
    """
    View to list all health facility types or create a new health facility type.
    Only accessible by users with appropriate permissions or superusers.
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Superusers have unrestricted access
        if request.user.is_superuser:
            return super().list(request, *args, **kwargs)
        
        return super().list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        # Superusers can create health facility types without restriction
        if request.user.is_superuser:
            return self.create_health_facility_type(request)

        return self.create_health_facility_type(request)

    def create_health_facility_type(self, request):        
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response({
                'message': 'Health facility type created successfully.',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        
        return Response({
            'message': 'Health facility type creation failed.',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)