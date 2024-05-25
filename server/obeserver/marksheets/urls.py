from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path('cie/category/show/(\d{1,2})$',views.cie_category_show,name='cie_category_show'),
    re_path('cie/category/create/(\d{1,2})$',views.cie_category_create,name='cie_category_create'),
    re_path('cie/category/(\d{1,2})$', views.cie_category_detail, name='cie_category_detail'),
    re_path('see/show/(\d{1,2})$',views.see_show,name='see_show'),
    re_path('see/create/(\d{1,2})$',views.see_create,name='see_create'),
    re_path('see/(\d{1,2})$', views.see_detail, name='see_detail'),
    re_path('cie/show/(\d{1,2})$',views.cie_show,name='cie_show'),
    re_path('cie/create/(\d{1,2})$',views.cie_create,name='cie_create'),

]