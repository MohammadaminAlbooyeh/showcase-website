from django.contrib import admin

from .models import AboutMe, PortfolioItem, Project, Resume

admin.site.register(AboutMe)
admin.site.register(PortfolioItem)
admin.site.register(Project)
admin.site.register(Resume)
