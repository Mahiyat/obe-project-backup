from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path('show/(\d{1,2})/$', views.show, name='show'),
    re_path('$', views.create, name='create'),
    re_path('(\d{1,2})$', views.detail, name='detail'),

]