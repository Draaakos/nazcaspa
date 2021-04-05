from django.contrib import admin
from web.models import Image

@admin.register(Image)
class GenericImage(admin.ModelAdmin):
    ordering = ('id', )
    list_display = ('id', 'image',)
    list_editable = ('image',)