from django.shortcuts import render
from django.core.serializers import serialize
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Course
from .serializers import CourseSerializer


# Create your views here.
@api_view(["GET", "POST"])
def show(request):
    if request.method == "GET":
        c = Course.objects.all()
        serializer = CourseSerializer(c, context={"request": request}, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED, data=serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT", "DELETE"])
def detail(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "PUT":
        serializer = CourseSerializer(
            course, data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["PUT"])
def change_status(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CourseSerializer(
        course, data=request.data, context={"request": request}
    )
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def get_completed_courses(request):
    try:
        course = Course.objects.filter(completed_status=True)
    except Course.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CourseSerializer(course, context={"request": request}, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_pending_courses(request):
    try:
        course = Course.objects.filter(completed_status=False)
    except Course.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CourseSerializer(course, context={"request": request}, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_course_ids(request):
    try:
        courses = (
            Course.objects.filter(completed_status=True).values("course_id").distinct()
        )
    except Course.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(courses)


@api_view(["GET"])
def get_titles(request, c_id):
    try:
        courses = (
            Course.objects.filter(completed_status=True, course_id=c_id)
            .values("exam_title")
            .distinct()
        )
    except Course.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(courses)

@api_view(["GET"])
def get_pk(request, c_id, e_title):
    try:
        course = Course.objects.get(course_id=c_id, exam_title=e_title)
    except Course.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response({'id': course.id})

@api_view(["GET"])
def get_count(request):
    courses_count = Course.objects.count()
    pending_courses_count = Course.objects.filter(completed_status=False).count()
    counts={
        'all_courses_count': courses_count,
        'pending_courses_count': pending_courses_count
    }
    return Response(counts)