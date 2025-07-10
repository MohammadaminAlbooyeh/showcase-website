from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AboutMeViewSet, PortfolioItemViewSet, ProjectViewSet, ResumeViewSet, ContactAPIView

router = DefaultRouter()
router.register(r'aboutme', AboutMeViewSet)
router.register(r'portfolio', PortfolioItemViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'resume', ResumeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('contact/', ContactAPIView.as_view(), name='contact'),
]
