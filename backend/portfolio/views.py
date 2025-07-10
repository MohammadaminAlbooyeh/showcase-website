from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm

class ContactAPIView(APIView):
    def post(self, request):
        form = ContactForm(request.data)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            subject = f"New Contact Message from {name}"
            body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"
            send_mail(
                subject,
                body,
                settings.DEFAULT_FROM_EMAIL,
                ['amin.albooyeh@gmail.com'],
                fail_silently=False,
            )
            return Response({'success': True}, status=status.HTTP_200_OK)
        return Response({'success': False, 'errors': form.errors}, status=status.HTTP_400_BAD_REQUEST)
from rest_framework import viewsets
from .models import AboutMe, PortfolioItem, Project, Resume
from .serializers import AboutMeSerializer, PortfolioItemSerializer, ProjectSerializer, ResumeSerializer

class AboutMeViewSet(viewsets.ModelViewSet):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer

class PortfolioItemViewSet(viewsets.ModelViewSet):
    queryset = PortfolioItem.objects.all()
    serializer_class = PortfolioItemSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
