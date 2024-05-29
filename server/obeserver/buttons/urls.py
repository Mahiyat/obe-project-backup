from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path("$", views.create, name="create"),
    re_path("show/(\d{1,2})/$", views.show, name="show"),
    re_path(r"^(?P<c_pk>\d{1,2})/(?P<type>\w+)$", views.update, name="update"),
    re_path(
        "courses/incomplete$",
        views.get_incomplete_course_buttons,
        name="incomplete_course_buttons",
    ),
]
