# Para correr el codigo

1. Activate virtual environment (WINDOW: source ./activate) (LINUX: source ./bin/activate) (MAC: ./activate)
3. pip install django
4. pip install pymysql / pip install mysql-connector-python
5. pip install cryptography
6. pip install autopep8
7. pip install djangorestframework

8. docker run -d -e MYSQL_ROOT_PASSWORD=leandro123 --name dev_mysql --rm -p 6000:3306 mysql
9. docker exec -it dev_mysql bash
10. mysql -u root -pleandro123
11. CREATE DATABASE libreria;

12. python manage.py makemigrations (Borrar la primera migración antes de hacer esto, se encuentra en /sistema/proyecto1/libreria/migrations/0001_initial.py)
13. python manage.py migrate
14. python manage.py createsuperuser (admin, admin@gmail.com, admin123, admin123, y)
15. python manage.py runserver

<script src="/static/js/script_jquery.js"></script>
