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
