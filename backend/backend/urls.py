from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from chatbot import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home),
    path('upload_image/', views.upload_image, name='upload_image'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
