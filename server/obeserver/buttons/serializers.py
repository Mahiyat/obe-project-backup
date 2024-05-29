from rest_framework import serializers
from .models import Button
from courses.models import Course

class ButtonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Button
        fields = '__all__'

class ClassButtonSerializer(serializers.ModelSerializer):
    course_id = serializers.SerializerMethodField()
    course_name = serializers.SerializerMethodField()
    exam_title = serializers.SerializerMethodField()
    text = serializers.SerializerMethodField()

    class Meta:
        model = Button
        fields = ['id', 'course_id', 'course_name', 'exam_title', 'text', 'click_status']  # Add other fields as needed

    def get_course_id(self, obj):
        return obj.course_pk.course_id if obj.course_pk else None

    def get_course_name(self, obj):
        return obj.course_pk.course_name if obj.course_pk else None

    def get_exam_title(self, obj):
        return obj.course_pk.exam_title if obj.course_pk else None

    def get_text(self, obj):
        return 'Continuous Internal Evaluation' if obj.type == 'cie' else 'Semester End Examination'
