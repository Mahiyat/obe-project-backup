from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path("$", views.show, name="show"),
    re_path("completed$", views.get_completed_courses, name="get_completed_courses"),
    re_path("pending$", views.get_pending_courses, name="get_pending_courses"),
    re_path("(\d{1,2})$", views.detail, name="detail"),
    re_path("status/(\d{1,2})$", views.change_status, name="change_status"),
    re_path("courseids$", views.get_course_ids, name="get_course_ids"),
    re_path(r"titles/([\w-]+)$", views.get_titles, name="get_titles"),
    re_path(
        r"getpk/(?P<c_id>[\w-]+)/(?P<e_title>[\w\s-]+)$", views.get_pk, name="get_pk"
    ),
]
