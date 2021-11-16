from rest_framework import routers
from .views import ScreeningViewSet, MovieViewSet, OrderViewSet


router = routers.DefaultRouter()
router.register('api/screenings', ScreeningViewSet)
router.register('api/movies', MovieViewSet)
router.register('api/orders', OrderViewSet)

urlpatterns = router.urls
