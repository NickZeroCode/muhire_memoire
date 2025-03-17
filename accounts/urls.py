from django.urls import path
from . import views


app_name = 'accounts'

urlpatterns = [
    path("", views.connexion_view, name="login"),
    path("logout/", views.logout_view, name="logout")
]