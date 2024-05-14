from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.welcome, name="welcome"),
    path('user/signup',views.register,name="signup"),
    path('user/login',views.signIn,name='signIn'),
    path('user/logout',views.signout,name='signout'),
    path('user/chat',views.chat,name="chat"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
