from django.shortcuts import render, redirect, get_object_or_404, HttpResponse
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .forms import BookForm, CarForm
from .models import Book, Car
import locale
from django.db import IntegrityError
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User

""" from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth.decorators import login_required


from django.utils import timezone """

# Create your views here.

def signup(request):
    if request.method == 'GET':
        return render(request, 'auth/signup.html', {"form": UserCreationForm})
    else:

        if request.POST["password1"] == request.POST["password2"]:
            try:
                user = User.objects.create_user(
                    request.POST["username"], password=request.POST["password1"])
                user.save()
                #login(request, user)
                return redirect('signin')
            except IntegrityError:
                return render(request, 'auth/signup.html', {"form": UserCreationForm, "error": "Username already exists."})

        return render(request, 'auth/signup.html', {"form": UserCreationForm, "error": "Passwords did not match."})

def signout(request):
    logout(request)
    return redirect('home')

def signin(request):
    if request.method == 'GET':
        return render(request, 'auth/signin.html', {"form": AuthenticationForm})
    else:
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'auth/signin.html', {"form": AuthenticationForm, "error": "Username or password is incorrect."})

        login(request, user)
        return redirect('home')

def books_home(request):
    return render(request, 'paginas/inicio.html')


def books_about(request):
    return render(request, 'paginas/nosotros.html')


def libros(request):
    return render(request, 'books/index.html')


def crear(request):
    return render(request, 'books/crear.html')


def books(request):
    """ Esta obteniendo todas las tareas de el usuario logeado y donde la fecha de completado sea null """
    books = Book.objects.all()
    return render(request, 'books/index.html', {"books": books})


def create_book(request):
    book_create_page = "books/crear.html"
    if request.method == "GET":
        return render(request, book_create_page, {"form": BookForm})
    else:
        try:
            form = BookForm(request.POST)
            form.save()
            return redirect('books')
        except ValueError:
            return render(request, book_create_page, {"form": BookForm, "error": "Error creating book."})


def book_detail(request, book_id):
    book_detail_page = "books/book_detail.html"
    if request.method == 'GET':
        book = get_object_or_404(Book, pk=book_id)
        form = BookForm(instance=book)
        return render(request, book_detail_page, {'book': book, 'form': form})
    else:
        try:
            book = get_object_or_404(Book, pk=book_id)
            form = BookForm(request.POST, instance=book)
            form.save()
            return redirect('books')
        except ValueError:
            return render(request, book_detail_page, {'book': book, 'form': form, 'error': 'Error updating book.'})


def delete_book(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    if request.method == 'POST':
        book.delete()
        return redirect('books')


""" CARS """


def cars_home(request):
    return render(request, 'cars/home.html')


def cars_about(request):
    return render(request, 'cars/about.html')


def cars_contact(request):
    return render(request, 'cars/contact.html')


""" CRUD CARS """


def getAllCars(request):
    cars = Car.objects.all()
    return render(request, 'cars/cars.html', {"cars": cars})


def create_car(request):
    car_create_page = "cars/create_car.html"
    if request.method == "GET":
        return render(request, car_create_page, {"form": CarForm})
    else:
        try:
            form = CarForm(request.POST)
            form.save()
            return redirect('cars')
        except ValueError:
            return render(request, car_create_page, {"form": CarForm, "error": "Error creating car."})


def car_detail(request, car_id):
    car_detail_page = "cars/car_detail.html"
    if request.method == 'GET':
        car = get_object_or_404(Car, pk=car_id)
        # Establecer el formato de localización chileno
        # locale.setlocale(locale.LC_ALL, 'es_CL.utf8')
        # Formatear el valor de price como una cadena con separadores de miles
        formatted_price = locale.format_string("%d", car.price, grouping=True)
        car.price = formatted_price
        form = CarForm(instance=car)
        return render(request, car_detail_page, {'car': car, 'form': form})


def car_update_delete_by_id(request, car_id):
    car_update_delete_page = "cars/update_delete_car.html"
    if request.method == 'GET':
        car = get_object_or_404(Car, pk=car_id)
        form = CarForm(instance=car)
        return render(request, car_update_delete_page, {'car': car, 'form': form})
    else:
        try:
            car = get_object_or_404(Car, pk=car_id)
            form = CarForm(request.POST, instance=car)
            form.save()
            return redirect('cars')
        except ValueError:
            return render(request, car_update_delete_page, {'car': car, 'form': form, 'error': 'Error actualizando vehiculo.'})


def delete_car(request, car_id):
    car = get_object_or_404(Car, pk=car_id)
    if request.method == 'POST':
        car.delete()
        return redirect('cars')
