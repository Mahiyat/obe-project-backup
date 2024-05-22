from django.db import models

from courses.models import Course

# Create your models here.
class Button(models.Model):
  course_pk=models.ForeignKey(Course, on_delete=models.CASCADE)
  type=models.CharField(max_length=50, blank=True, null=True)
  click_status=models.BooleanField(default=False)
  def __str__(self):
    return self.course_pk+" "+self.type
