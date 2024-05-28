from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path(
        "cie/category/show/(\d{1,9})$",
        views.cie_category_show,
        name="cie_category_show",
    ),
    re_path(
        "cie/category/create/(\d{1,9})$",
        views.cie_category_create,
        name="cie_category_create",
    ),
    re_path(
        "cie/category/(\d{1,9})$", views.cie_category_detail, name="cie_category_detail"
    ),
    re_path("see/show/(\d{1,9})$", views.see_show, name="see_show"),
    re_path("see/create/(\d{1,9})$", views.see_create, name="see_create"),
    re_path("see/(\d{1,9})$", views.see_detail, name="see_detail"),
    re_path("cie/show/(\d{1,9})$", views.cie_show, name="cie_show"),
    re_path("cie/create/(\d{1,9})$", views.cie_create, name="cie_create"),
    re_path(
        r"^cie/(?P<c_pk>\d{1,2})/(?P<assessment_type>\w+)$", views.get_cie_stats, name="get_cie_stats"
    ),
    re_path("see/stats/(\d{1,9})$", views.get_see_stats, name="get_see_stats"),
    re_path(
        r"^see/(?P<c_pk>\d{1,2})/(?P<clo_type>\w+)$", views.get_clo_stats, name="get_clo_stats"
    ),
    re_path("see/allcourses$", views.get_all_courses_see_stats, name="get_all_courses_see_stats")
]
