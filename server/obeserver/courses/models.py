from django.db import models

# Create your models here.
class Course(models.Model):
  course_id=models.CharField(max_length=10, blank=True, null=True)
  course_name=models.CharField(max_length=40, blank=True, null=True)
  exam_title=models.CharField(max_length=60, blank=True, null=True)
  completed_status=models.BooleanField(default=False)
  def __str__(self) -> str:
    return self.course_id + ": "+self.exam_title
