from django.shortcuts import render
from django.core.serializers import serialize
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Button
from .serializers import ButtonSerializer

# Create your views here.
@api_view(['POST'])
def create(request):
  serializer=ButtonSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(status=status.HTTP_201_CREATED, data=serializer.data)
  return Response(status=status.HTTP_201_CREATED, data=serializer.data)

@api_view(['GET'])
def show(request, c_pk):
  try:
    b=Button.objects.filter(course_pk=c_pk)
    serializer=ButtonSerializer(b, context={'request': request}, many=True)
  except Button.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  return Response(serializer.data)

@api_view(['PUT'])
def update(request, c_pk, type):
  try:
    button=Button.objects.get(course_pk=c_pk, type=type)
  except Button.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  data = request.data.copy()
  data['course_pk'] = c_pk
  data['type'] = type
  serializer=ButtonSerializer(button, data=data, context={'request': request})
  if serializer.is_valid():
    serializer.save()
    return Response(status=status.HTTP_204_NO_CONTENT)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
