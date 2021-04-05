from django.http import JsonResponse
from django.views import View
from web.models import Image

class GalleryView(View):
    def get(self, request):
        images = self._fetch_images()

        return JsonResponse({
            'status': True,
            'images': images
        })


    def _fetch_images(self):
        image_list = []
        image_list_data = Image.objects.all()
        for image in image_list_data:
            image_list.append(image.to_json())
        return image_list