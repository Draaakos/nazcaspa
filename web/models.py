from django.db import models

class Image(models.Model):
    image = models.ImageField(upload_to='gallery')

    def to_json(self):
        return {
            'url': self.image.url
        }