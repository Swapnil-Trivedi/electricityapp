# E-BILL Electricity App
This is a pseudo full stack app that provides user with a dashboard for easy access to details about their electricity bills.
## Goal
The goal of this project is to provide a uniform API for both mobile and web frontend applications built using Django Rest Framework and to provide a web app frontend application made using ReactJS.

## Features
### Frontend
The frontend is built using ReactJS and has following features:
- Dashboard :
    - User can have brief about their paid,unpaid bills and active,inactive complaint reports.
    - A visual represntation of expense chart for tracking Bills of the user.
- My Bills :
    - Collection of all the bills for a user.
    - User can view complete status of their bills and download the receipt.
    - User can report a bill back to admin incase of any issues.
- My Reports :
    - Shows the collection of complaints registered against any bill.
    - User can view the status of the complaint and download the receipt.
- My Details : Shows the user account details   

### Backend
The backend is built using Python Django Rest Framework with this API:
- You can create a user account - Registration
- You can login and log out - Authorization and Authentication
- You can create, view, update, and delete a bills for a user account
- You can create, view, update, and delete a reports for a user account

## API Documentation
Documentation for this API can be found at http://127.0.0.1:8000/docs, when you run the application locally.

## Tools
Tools used during the development of this API are:
- [OpenAPI/Swagger](https://swagger.io/specification/) - This is a tool for documenting the API
- [Django-allauth](https://django-allauth.readthedocs.io/en/latest/installation.html) - This is the authentication library for Django rest framework
- [Django-auth](https://docs.djangoproject.com/en/4.0/topics/auth/) - Tool for user authorization
- [Django_Rest_framework](https://www.django-rest-framework.org/) - Framework for Django to integrate and develop rest api
- [Django](https://www.djangoproject.com/) - high-level Python web framework that encourages rapid development
- [Docker](https://www.docker.com/) - Virtualization tool to contain the application backend
- [ReactJS](https://reactjs.org/) - Frontend technology library for web app
## Requirements
- Python 2.7.1x+. preferably use Python 3.x.x+
- npm 8.0.1x+. preferably use Node 16.x.x+

## Tests
Even God commands us to run tests: 1 Thessalonians 5:21; "Test all things."
So to run tests, go to your command line prompt and execute the following command

```
    sh
    $ cd Backend
    $ python manage.py test .

```

## Running the application
### Backend
To run this application on a linux box, clone the repository and execute the following command.
```
    sh
    $ cd Backend
    $ pip install pipenv
    $ pipenv install
    $ pipenv shell
    $ python manage.py makemigrations
    $ python manage.py migrate
    $ python manage.py test posts
    $ python manage.py runserver

```
### Frontend
```
    sh
    $cd client
    $ npm install
    $ npm start

```
## Preview
Here is a small preview for the application.

### Adding readme content here for git practice