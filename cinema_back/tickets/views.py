from .models import Screening
from rest_framework import viewsets, permissions
from .serializers import ScreeningSerializer


class ScreeningViewSet(viewsets.ModelViewSet):
    queryset = Screening.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ScreeningSerializer

