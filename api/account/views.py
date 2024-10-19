from account.serializers import *
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.generics import GenericAPIView
from rest_framework import generics, permissions, status

class LoginView(GenericAPIView):  # Change to GenericAPIView
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer  # Ensure serializer is set

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)  # Use get_serializer method
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        user = authenticate(username=email, password=password)

        if user:
            # Delete old token and generate a new one
            Token.objects.filter(user=user).delete()
            token, created = Token.objects.get_or_create(user=user)

            return Response({
                'token': token.key,
                'user': UserSerializer(user).data,  # Use your user serializer if needed
                'message': 'Login successful.'
            }, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid email or password.'}, status=status.HTTP_400_BAD_REQUEST)