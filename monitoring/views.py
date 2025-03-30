from django.shortcuts import render, redirect
from . models import Settings
from django.contrib import messages

# Create your views here.

def accueil_monitoring(request):

    my_settings, create = Settings.objects.get_or_create(id=1,defaults={
             'puissance_seuil':7.5,
             'nombre_cabines' : 5,
         })
    print(my_settings.puissance_seuil)

    context = {
        "my_settings":my_settings
    }
    
    return render(request,"monitoring/monitoring.html",context)

def setting_view(request):
    my_settings,create = Settings.objects.get_or_create(id=1,defaults={
             'puissance_seuil':7.5,
             'nombre_cabines' : 5,
         })
    if request.method == "POST":

        if 'puissance_seuille' in request.POST:

            puissance_seuil = request.POST["power_threshold"]
            my_settings.puissance_seuil = float(puissance_seuil)
            my_settings.save()
            messages.info(request,"La puissance seuil a été mise à jour avec succès")
            return redirect("monitoring:settings")

        elif 'nombre_cabine' in request.POST:

            nombre_cabine = request.POST["nombre_cabines"]
            my_settings.nombre_cabines = int(nombre_cabine)
            my_settings.save()
            messages.info(request,"Le nombre de cabines par feeder a été mise à jour avec succès")
            return redirect("monitoring:settings")


    context = {
        "my_settings":my_settings,
    }
    return render(request,"monitoring/settings.html",context)


def feeder_station_view(request):
    my_settings,create = Settings.objects.get_or_create(id=1,defaults={
             'puissance_seuil':7.5,
             'nombre_cabines' : 5,
         })

    context = {
        "my_settings":my_settings
    }
    return render(request,"monitoring/feeder_station.html",context)


def feeder_nord_view(request):
    my_settings,create = Settings.objects.get_or_create(id=1,defaults={
             'puissance_seuil':7.5,
             'nombre_cabines' : 5,
         })

    context = {
        "my_settings":my_settings
    }
    return render(request,"monitoring/feeder_nord.html",context)


def feeder_centre_view(request):
    my_settings,create = Settings.objects.get_or_create(id=1,defaults={
             'puissance_seuil':7.5,
             'nombre_cabines' : 5,
         })

    context = {
        "my_settings":my_settings
    }
    return render(request,"monitoring/feeder_centre.html",context)


def feeder_sud_view(request):
    my_settings,create = Settings.objects.get_or_create(id=1,defaults={
             'puissance_seuil':7.5,
             'nombre_cabines' : 5,
         })

    context = {
        "my_settings":my_settings
    }
    return render(request,"monitoring/feeder_sud.html",context)


def feeder_route_sake_view(request):
    my_settings,create = Settings.objects.get_or_create(id=1,defaults={
             'puissance_seuil':7.5,
             'nombre_cabines' : 5,
         })

    context = {
        "my_settings":my_settings
    }
    return render(request,"monitoring/feeder_route_sake.html",context)