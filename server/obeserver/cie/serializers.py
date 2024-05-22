from rest_framework import serializers

from .models import CIE

class CIESerializer(serializers.ModelSerializer):
  class Meta:
    model=CIE
    fields='__all__'