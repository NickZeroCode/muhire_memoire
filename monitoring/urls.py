from django.urls import path
from . import views


app_name = 'monitoring'

urlpatterns = [
    path("tableau_de_bord/", views.accueil_monitoring, name="tableau_de_bord"),
    path("settings/", views.setting_view, name="settings"),
    path("feeder/station", views.feeder_station_view, name="feeder_station"), 
    path("feeder/nord", views.feeder_nord_view, name="feeder_nord"), 
    path("feeder/sud", views.feeder_sud_view, name="feeder_sud"), 
    path("feeder/centre", views.feeder_centre_view, name="feeder_centre"), 
    path("feeder/route_sake", views.feeder_route_sake_view, name="feeder_route_sake"), 

]