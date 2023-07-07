""" Esto es para que django nos cree los input que necesita el formulario para poder crear un nuevo libro """
from django.forms import ModelForm
from .models import Book, Car


class BookForm(ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'description', 'img_url']


class CarForm(ModelForm):
    class Meta:
        model = Car
        fields = ['title', 'img_url', 'brand', 'age', 'mileage', 'price',
                  'description', 'technical_specifications', 'extra_information']
