from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path('$',views.show,name='show'),
    re_path('completed$',views.get_completed_courses,name='get_completed_courses'),
    re_path('pending$',views.get_pending_courses,name='get_pending_courses'),
    re_path('(\d{1,2})$', views.detail, name='detail'),
    re_path('status/(\d{1,2})$', views.change_status, name='change_status'),
]