from rest_framework import serializers

from .models import SEEMarksheet, CIECategorywiseMarksheet, CIEMarksheet


class SEEMarksheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SEEMarksheet
        fields = (
            "id",
            "course_pk",
            "exam_roll",
            "clo1",
            "clo2",
            "clo3",
            "clo4",
            "clo5",
            "marks_obtained",
        )


class CIECategorywiseMarksheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = CIECategorywiseMarksheet
        fields = "__all__"


class CIEMarksheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = CIEMarksheet
        fields = (
            "id",
            "course_pk",
            "student_id",
            "tutorial",
            "assignment",
            "curricular",
            "quiz",
            "marks_obtained",
        )
