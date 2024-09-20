from django.db import models

class UploadedImage(models.Model):
    image = models.ImageField(upload_to='images/')
    caption = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Image {self.id}"

