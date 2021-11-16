from .models import Screening, Movie, Order
from rest_framework import viewsets, permissions
from .serializers import ScreeningSerializer, MovieSerializer, OrderSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MovieSerializer


class ScreeningViewSet(viewsets.ModelViewSet):
    queryset = Screening.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ScreeningSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OrderSerializer
