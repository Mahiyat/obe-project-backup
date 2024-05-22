from django.shortcuts import render
from django.core.serializers import serialize
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import CIE
from .serializers import CIESerializer

# Create your views here.
@api_view(['GET'])
def show(request, c_pk):
  try:
    c=CIE.objects.filter(course_pk=c_pk)
    serializer=CIESerializer(c, context={'request': request}, many=True)
  except CIE.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  return Response(serializer.data)

@api_view(['POST'])
def create(request):
  serializer=CIESerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(status=status.HTTP_201_CREATED, data=serializer.data)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def detail(request, pk):
  try:
    cie = CIE.objects.get(pk=pk)
  except CIE.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if request.method == 'PUT':
    serializer = CIESerializer(cie, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif request.method == 'DELETE':
    cie.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
