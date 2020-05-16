# Django React Blog

This project demonstrates the simple integration of a Django REST API with a React front end inside a Django app to create a simple blog.

## Project Setup

Install the required dependencies:

- npm
- Node.js
- pip
- Python 3.x
- Virtualenv

1. Clone this repo
2. Create a virtual environment for the project using virtualenv
3. Install Django 2.2
4. ```python manage.py migrate```
5. ```python manage.py seed blog --number=SOME_NUMBER_HERE```
6. ```python manage.py runserver```

## Creating a Django Rest API with React Frontend

This section describes the steps followed to create this project.

### Steps to make a Django REST API

#### Django Project Setup Steps

- create project folder, move to it, and create a virtual environment using ```virutalenv -p python3 .```
- ```source bin/activate```
- ```pip install django==2.2```
- ```django-admin startproject NAME_OF_PROJECT```
- open env project folder and rename project folder to ```src```
- add .gitignore with the following (if using VS Code)...

```
bin/*
lib/*
.vscode/*
pyvenv.cfg
```

- ```python manage.py startapp NAME_OF_APP```
- add app to settings.py
- create a model class that maps the entity
- ```python manage.py makemigrations```
- ```python manage.py migrate``` (can start over by deleting sqlite file and migrations)
- connect model to admin site
- ```python manage.py createsuperuser```
- ```python manage.py runserver```
- use the admin portal, shell, or django-seed to create multiple records for all models
	- if using django-seed, run ```python manage.py seed blog --number=SOME_NUMBER_HERE```

#### Django Rest Framework Setup Steps

- ```pip install djangorestframework```
- add ```'rest_framework'``` to settings.py
- add folder to app folder called ```api```
- add a file called ```serializers.py``` to app/api folder
- create a model serilizer class-specific for the app
- create viewsets.py in app/api folder that uses the serilizer to build a complete queryset
- create a ```router.py``` file in main project folder (sibling of settings.py) which registers the viewsets to the corresponding models
- add router to ```urls.py``` in main project folder
- DONE!

### Steps to connect React to Django

- in a seperate folder from Django project: ```npx create-react-add NAME_OF_PROEJCT```
- move react app into root of Django project folder (for this project, the ```src``` folder)
- transfer over the react app gitignore to the project gitignore and delete the react app git repo and gitignore
- from inside react app folder ```npm run build```
- in ```settings.py```, in Templates 'DIRS', add ```os.path.join(BASE_DIR, 'NAME_OF_REACT_FOLDER/build')```
- add the following to the project urls.py:
	- add this import: ```from django.views.generic import TemplateView```
	- add this path: ```path('', TemplateView.as_view(template_name='index.html'))```
- in ```settings.py``` add the following:

```
STATICFILES_DIRS = [
  os.path.join(BASE_DIR, 'NAME_OF_REACT_FOLDER/build/static')
]
```

### Development Steps

- cd into the React folder and run ```npm run build```
- cd into Django project folder and run ```python manage.py runserver```
- at this point, the React UI should be visible running on localhost:8000