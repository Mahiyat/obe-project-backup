from django.shortcuts import render
from django.core.serializers import serialize
from django.db.models import Avg
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import SEEMarksheet, CIECategorywiseMarksheet, CIEMarksheet
from .serializers import (
    SEEMarksheetSerializer,
    CIECategorywiseMarksheetSerializer,
    CIEMarksheetSerializer,
)
from students.models import Student
from students.serializers import StudentSerializer
from cie.models import CIE
from courses.models import Course

# Create your views here.


# SEE Marksheet
@api_view(["GET"])
def see_show(request, c_pk):
    m = SEEMarksheet.objects.filter(course_pk=c_pk)
    serializer = SEEMarksheetSerializer(m, context={"request": request}, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def see_create(request, c_pk):
    student = Student.objects.all()
    student_serializer = StudentSerializer(student, many=True)
    errors = []
    for s in student_serializer.data:
        data = {"course_pk": c_pk, "exam_roll": s["exam_roll"]}
        serializer = SEEMarksheetSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        else:
            errors.append(serializer.errors)
    if errors:
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(
        {"message": "Marksheet created successfully."}, status=status.HTTP_201_CREATED
    )


@api_view(["PUT", "DELETE"])
def see_detail(request, pk):
    try:
        see = SEEMarksheet.objects.get(pk=pk)
    except SEEMarksheet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "PUT":
        serializer = SEEMarksheetSerializer(
            see, data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        see.delete()
        return Response(
            {"message": "Marksheet record deleted successfully."},
            status=status.HTTP_200_OK,
        )


# CIE Categorywise Marksheet
@api_view(["POST"])
def cie_category_create(request, i_pk):
    student = Student.objects.all()
    student_serializer = StudentSerializer(student, many=True)
    errors = []
    for s in student_serializer.data:
        data = {"cie_pk": i_pk, "student_id": s["student_id"]}
        serializer = CIECategorywiseMarksheetSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        else:
            errors.append(serializer.errors)
    if errors:
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(
        {"message": "Marksheets created successfully."}, status=status.HTTP_201_CREATED
    )


@api_view(["GET"])
def cie_category_show(request, i_pk):
    m = CIECategorywiseMarksheet.objects.filter(cie_pk=i_pk)
    serializer = CIECategorywiseMarksheetSerializer(
        m, context={"request": request}, many=True
    )
    data = serializer.data
    for entry in data:
        student_id = entry["student_id"]
        student = Student.objects.get(student_id=student_id)
        entry["name"] = student.name
    return Response(data)


@api_view(["PUT", "DELETE"])
def cie_category_detail(request, pk):
    try:
        incourse = CIECategorywiseMarksheet.objects.get(pk=pk)
    except CIECategorywiseMarksheet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "PUT":
        serializer = CIECategorywiseMarksheetSerializer(
            incourse, data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        incourse.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# CIE Marksheet
@api_view(["GET"])
def cie_show(request, c_pk):
    # Define the categories
    categories = ["tutorial", "assignment", "curricular", "quiz"]
    category_field_mapping = {
        "tutorial": "tutorial",
        "assignment": "assignment",
        "curricular": "curricular",
        "quiz": "quiz",
    }

    # Get all students who have marks in the specified course
    students = (
        CIEMarksheet.objects.filter(course_pk=c_pk)
        .values_list("student_id", flat=True)
        .distinct()
    )

    for student_id in students:
        averages = {}

        # Calculate the average marks for each category for the student
        for category in categories:
            averages[category] = (
                CIECategorywiseMarksheet.objects.filter(
                    cie_pk__course_pk=c_pk, cie_pk__type=category, student_id=student_id
                ).aggregate(avg_marks=Avg("marks_obtained"))["avg_marks"]
                or 0
            )

        # Update the CIEMarksheet entry for the student with the calculated averages
        CIEMarksheet.objects.filter(course_pk=c_pk, student_id=student_id).update(
            tutorial=averages["tutorial"],
            assignment=averages["assignment"],
            curricular=averages["curricular"],
            quiz=averages["quiz"],
        )

    # Retrieve the updated entries
    m = CIEMarksheet.objects.filter(course_pk=c_pk)
    serializer = CIEMarksheetSerializer(m, context={"request": request}, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def cie_create(request, c_pk):
    student = Student.objects.all()
    student_serializer = StudentSerializer(student, many=True)
    errors = []
    for s in student_serializer.data:
        data = {"course_pk": c_pk, "student_id": s["student_id"]}
        serializer = CIEMarksheetSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        else:
            errors.append(serializer.errors)
    if errors:
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(
        {"message": "Marksheet created successfully."}, status=status.HTTP_201_CREATED
    )


# Result Statistics
@api_view(["GET"])
def get_cie_stats(request, c_pk, assessment_type):
    marksheet = CIEMarksheet.objects.filter(course_pk=c_pk).values_list(
        assessment_type, flat=True
    )
    ranges = [
        (80, 100),
        (70, 79),
        (60, 69),
        (50, 59),
        (40, 49),
        (0, 39),
    ]
    counts = {"80_100": 0, "70_79": 0, "60_69": 0, "50_59": 0, "40_49": 0, "0_39": 0}
    full_marks = {"tutorial": 20, "assignment": 10, "curricular": 5, "quiz": 5}.get(
        assessment_type
    )
    min_marks = [round(((lower / 100) * full_marks),2) for lower, _ in ranges]
    max_marks = [round(((upper / 100) * full_marks),2) for _, upper in ranges]
    for i, (lower, upper) in enumerate(ranges):
        for mark in marksheet:
            if min_marks[i] <= mark <= max_marks[i]:
                counts[f"{lower}_{upper}"] += 1
    return Response(counts)


@api_view(["GET"])
def get_see_stats(request, c_pk):
    marksheet = SEEMarksheet.objects.filter(course_pk=c_pk)
    averages = marksheet.aggregate(
        avg_clo1=Avg("clo1"),
        avg_clo2=Avg("clo2"),
        avg_clo3=Avg("clo3"),
        avg_clo4=Avg("clo4"),
        avg_clo5=Avg("clo5"),
    )
    percentage_clo1 = round(((averages['avg_clo1'] / 12) * 100),2) if averages['avg_clo1'] is not None else 0
    percentage_clo2 = round(((averages['avg_clo2'] / 12) * 100),2) if averages['avg_clo2'] is not None else 0
    percentage_clo3 = round(((averages['avg_clo3'] / 12) * 100),2) if averages['avg_clo3'] is not None else 0
    percentage_clo4 = round(((averages['avg_clo4'] / 12) * 100),2) if averages['avg_clo4'] is not None else 0
    percentage_clo5 = round(((averages['avg_clo5'] / 12) * 100),2) if averages['avg_clo5'] is not None else 0
    stats = {
        'clo1': percentage_clo1,
        'clo2': percentage_clo2,
        'clo3': percentage_clo3,
        'clo4': percentage_clo4,
        'clo5': percentage_clo5
    }
    return Response(stats)

@api_view(["GET"])
def get_clo_stats(request, c_pk, clo_type):
    marksheet = SEEMarksheet.objects.filter(course_pk=c_pk).values_list(
        clo_type, flat=True
    )
    ranges = [
        (80, 100),
        (70, 79),
        (60, 69),
        (50, 59),
        (40, 49),
        (0, 39),
    ]
    counts = {"80_100": 0, "70_79": 0, "60_69": 0, "50_59": 0, "40_49": 0, "0_39": 0}
    min_marks = [round(((lower / 100) * 12),2) for lower, _ in ranges]
    max_marks = [round(((upper / 100) * 12),2) for _, upper in ranges]
    for i, (lower, upper) in enumerate(ranges):
        for mark in marksheet:
            if min_marks[i] <= mark <= max_marks[i]:
                counts[f"{lower}_{upper}"] += 1
    return Response(counts)

@api_view(["GET"])
def get_all_courses_see_stats(request):
    courses = Course.objects.filter(completed_status=True)
    overall = {}
    for course in courses:
        marksheet = SEEMarksheet.objects.filter(course_pk=course.pk)
        averages = marksheet.aggregate(
            avg_clo1=Avg("clo1"),
            avg_clo2=Avg("clo2"),
            avg_clo3=Avg("clo3"),
            avg_clo4=Avg("clo4"),
            avg_clo5=Avg("clo5"),
        )
        percentage_clo1 = round(((averages['avg_clo1'] / 12) * 100),2) if averages['avg_clo1'] is not None else 0
        percentage_clo2 = round(((averages['avg_clo2'] / 12) * 100),2) if averages['avg_clo2'] is not None else 0
        percentage_clo3 = round(((averages['avg_clo3'] / 12) * 100),2) if averages['avg_clo3'] is not None else 0
        percentage_clo4 = round(((averages['avg_clo4'] / 12) * 100),2) if averages['avg_clo4'] is not None else 0
        percentage_clo5 = round(((averages['avg_clo5'] / 12) * 100),2) if averages['avg_clo5'] is not None else 0
        stats = {
            'label': course.course_id,
            'clo1': percentage_clo1,
            'clo2': percentage_clo2,
            'clo3': percentage_clo3,
            'clo4': percentage_clo4,
            'clo5': percentage_clo5
        }
        overall[course.course_id] = stats
    return Response(overall)
