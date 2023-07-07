"""
URL configuration for proyecto1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from rest_framework import routers
from libreria.api import CarViewSet
from libreria import views

router = routers.DefaultRouter()
router.register('api/cars', CarViewSet, 'api-cars')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.cars_home, name='home'),

    path('signup/', views.signup, name='signup'),
    path('logout/', views.signout, name='logout'),
    path('signin/', views.signin, name='signin'),

    path('books_home', views.books_home, name='books_home'),
    path('books_about', views.books_about, name='books_about'),
    path('books/', views.books, name='books'),
    path('create_book/', views.create_book, name='create_book'),
    path('books/<int:book_id>', views.book_detail, name='book_detail'),
    path('books/<int:book_id>/delete', views.delete_book, name='delete_book'),


    path('cars_home/', views.cars_home, name='cars_home'),
    path('cars_cars/', views.getAllCars, name='cars_cars'),
    path('car_detail/', views.car_detail, name='car_detail'),
    path('cars_about/', views.cars_about, name='cars_about'),
    path('cars_contact/', views.cars_contact, name='cars_contact'),

    path('cars/', views.getAllCars, name='cars'),
    path('create_car/', views.create_car, name='create_car'),
    path('cars/<int:car_id>', views.car_update_delete_by_id,
         name='car_update_delete'),
    path('cars/<int:car_id>/detail', views.car_detail, name='car_detail'),
    path('cars/<int:car_id>/delete', views.delete_car, name='delete_car'),
]

urlpatterns += router.urls


""" path('', include('libreria.urls')), """
