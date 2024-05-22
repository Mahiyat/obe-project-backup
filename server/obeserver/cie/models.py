from django.db import models

from courses.models import Course

# Create your models here.
class CIE(models.Model):
  course_pk=models.ForeignKey(Course, on_delete=models.CASCADE)
  type=models.CharField(max_length=50, blank=True, null=True)
  name=models.CharField(max_length=50, blank=True, null=True)
  def __str__(self):
    return self.course_pk+" "+self.exam
  # def __iter__(self):
  #   yield self.course_pk
  #   yield self.exam