from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=100, unique=True)
    """ blank=true means that the field is not required """
    description = models.TextField(blank=True)
    img_url = models.TextField(blank=True)

    def __str__(self):
        return self.title


class Car(models.Model):
    title = models.CharField(max_length=100, unique=True)
    img_url = models.TextField(blank=True)
    brand = models.CharField(max_length=100)
    age = models.IntegerField()
    mileage = models.IntegerField()
    price = models.IntegerField()

    description = models.TextField(blank=True)
    technical_specifications = models.TextField(blank=True)
    extra_information = models.TextField(blank=True)

    def __str__(self):
        return self.title
