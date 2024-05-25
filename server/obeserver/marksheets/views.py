from django.shortcuts import render
from django.core.serializers import serialize
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import SEEMarksheet, CIECategorywiseMarksheet, CIEMarksheet
from .serializers import SEEMarksheetSerializer, CIECategorywiseMarksheetSerializer, CIEMarksheetSerializer
from students.models import Student
from students.serializers import StudentSerializer

# Create your views here.

# SEE Marksheet
@api_view(['GET'])
def see_show(request, c_pk):
  m=SEEMarksheet.objects.filter(course_pk=c_pk)
  serializer=SEEMarksheetSerializer(m, context={'request': request}, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def see_create(request, c_pk):
  student=Student.objects.all()
  student_serializer=StudentSerializer(student,many=True)
  errors = []
  for s in student_serializer.data:
    data = {'course_pk': c_pk, 'exam_roll': s['exam_roll']}
    serializer = SEEMarksheetSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
    else:
      errors.append(serializer.errors)
  if errors:
    return Response(errors, status=status.HTTP_400_BAD_REQUEST)
  return Response({'message': 'Marksheet created successfully.'}, status=status.HTTP_201_CREATED)

@api_view(['PUT', 'DELETE'])
def see_detail(request, pk):
  try:
    see = SEEMarksheet.objects.get(pk=pk)
  except SEEMarksheet.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if request.method == 'PUT':
    serializer = SEEMarksheetSerializer(see, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif request.method == 'DELETE':
    see.delete()
    return Response({'message': 'Marksheet record deleted successfully.'}, status=status.HTTP_200_OK)
  
# CIE Categorywise Marksheet
@api_view(['POST'])
def cie_category_create(request, i_pk):
  student=Student.objects.all()
  student_serializer=StudentSerializer(student,many=True)
  errors = []
  for s in student_serializer.data:
    data = {'cie_pk': i_pk, 'student_id': s['student_id']}
    serializer = CIECategorywiseMarksheetSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
    else:
      errors.append(serializer.errors)
  if errors:
    return Response(errors, status=status.HTTP_400_BAD_REQUEST)
  return Response({'message': 'Marksheets created successfully.'}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def cie_category_show(request, i_pk):
  m=CIECategorywiseMarksheet.objects.filter(cie_pk=i_pk)
  serializer=CIECategorywiseMarksheetSerializer(m, context={'request': request}, many=True)
  data = serializer.data
  for entry in data:
    student_id=entry['student_id']
    student = Student.objects.get(student_id=student_id)
    entry['name'] = student.name
  return Response(data)

@api_view(['PUT', 'DELETE'])
def cie_category_detail(request, pk):
  try:
    incourse = CIECategorywiseMarksheet.objects.get(pk=pk)
  except CIECategorywiseMarksheet.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if request.method == 'PUT':
    serializer = CIECategorywiseMarksheetSerializer(incourse, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif request.method == 'DELETE':
    incourse.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  
# CIE Marksheet
@api_view(['GET'])
def cie_show(request, c_pk):
  m=CIEMarksheet.objects.filter(course_pk=c_pk)
  serializer=CIEMarksheetSerializer(m, context={'request': request}, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def cie_create(request, c_pk):
  student=Student.objects.all()
  student_serializer=StudentSerializer(student,many=True)
  errors = []
  for s in student_serializer.data:
    data = {'course_pk': c_pk, 'exam_roll': s['exam_roll']}
    serializer = CIEMarksheetSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
    else:
      errors.append(serializer.errors)
  if errors:
    return Response(errors, status=status.HTTP_400_BAD_REQUEST)
  return Response({'message': 'Marksheet created successfully.'}, status=status.HTTP_201_CREATED)
