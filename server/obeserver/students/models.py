from django.db import models

# Create your models here.
class Student(models.Model):
  student_id=models.IntegerField(unique=True, max_length=5)
  exam_roll=models.IntegerField(unique=True, max_length=10)
  registration_no=models.CharField(max_length=20)
  name=models.CharField(max_length=50)
  batch=models.IntegerField(max_length=3)
  phone_no=models.CharField(max_length=20)
  email=models.CharField(max_length=50)
  def __str__(self) -> str:
    return str(self.student_id)+": "+self.name
  def __iter__(self):
    yield self.student_id
    yield self.exam_roll
    yield self.registration_no
    yield self.name
    yield self.batch
    yield self.phone_no
    yield self.email
