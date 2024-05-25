from django.db import models

from cie.models import CIE
from students.models import Student
from courses.models import Course

# Create your models here.
class SEEMarksheet(models.Model):
  course_pk=models.ForeignKey(Course, on_delete=models.CASCADE)
  exam_roll=models.ForeignKey(Student, to_field="exam_roll", db_column="exam_roll", on_delete=models.CASCADE)
  clo1=models.FloatField(default=0)
  clo2=models.FloatField(default=0)
  clo3=models.FloatField(default=0)
  clo4=models.FloatField(default=0)
  clo5=models.FloatField(default=0)

  @property
  def marks_obtained(self):
    return self.clo1+self.clo2+self.clo3+self.clo4+self.clo5
  
class CIECategorywiseMarksheet(models.Model):
  cie_pk=models.ForeignKey(CIE, on_delete=models.CASCADE)
  student_id=models.ForeignKey(Student, to_field="student_id", db_column="student_id", on_delete=models.CASCADE)
  marks_obtained=models.FloatField(default=0)

class CIEMarksheet(models.Model):
  course_pk=models.ForeignKey(Course, on_delete=models.CASCADE)
  student_id=models.ForeignKey(Student, to_field="student_id", db_column="student_id", on_delete=models.CASCADE)
  tutorial=models.FloatField(default=0)
  assignment=models.FloatField(default=0)
  curricular=models.FloatField(default=0)
  quiz=models.FloatField(default=0)

  @property
  def marks_obtained(self):
    return self.tutorial+self.assignment+self.curricular+self.quiz