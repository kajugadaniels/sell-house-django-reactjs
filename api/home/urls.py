from django.urls import path
from django.conf import settings
from home.views import *
from django.conf.urls.static import static

app_name = 'users'

urlpatterns = [
    path('projects/', projectListCreateView.as_view(), name='projectListCreate'),
    path('contacts/', contactListCreateView.as_view(), name='contactListCreate'),
]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)