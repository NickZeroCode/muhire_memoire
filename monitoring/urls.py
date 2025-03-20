from django.urls import path
from . import views


app_name = 'monitoring'

urlpatterns = [
    path("tableau_de_bord/", views.accueil_monitoring, name="tableau_de_bord"),
    path("settings/", views.setting_view, name="settings")

]