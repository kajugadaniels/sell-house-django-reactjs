from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('home.urls')),
    path('api/auth/', include('account.urls')),
]
