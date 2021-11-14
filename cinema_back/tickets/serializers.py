from rest_framework import serializers
from .models import Screening


class ScreeningSerializer(serializers.ModelSerializer):
	class Meta:
		model = Screening
		fields = '__all__'
