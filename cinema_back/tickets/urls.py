from rest_framework import routers
from .views import ScreeningViewSet


router = routers.DefaultRouter()
router.register('api/screenings', ScreeningViewSet, 'screening')

urlpatterns = router.urls