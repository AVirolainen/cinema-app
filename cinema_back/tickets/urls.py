from rest_framework import routers
from .views import MovieViewSet, OrderViewSet


router = routers.DefaultRouter()
router.register('api/movies', MovieViewSet)
router.register('api/orders', OrderViewSet)

urlpatterns = router.urls
