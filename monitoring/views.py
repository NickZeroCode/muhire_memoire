from django.shortcuts import render, redirect
from . models import Settings
from django.contrib import messages

# Create your views here.

def accueil_monitoring(request):

    my_settings, create = Settings.objects.get_or_create(id=1,defaults={
             'puissance_seuil':7.5,
         })
    print(my_settings.puissance_seuil)

    context = {
        "power_treshhold":my_settings
    }
    
    return render(request,"monitoring/monitoring.html",context)

def setting_view(request):
    my_settings,create = Settings.objects.get_or_create(id=1,defaults={
             'puissance_seuil':7.5,
         })
    if request.method == "POST":
        puissance_seuil = request.POST["power_threshold"]
        my_settings.puissance_seuil = float(puissance_seuil)
        my_settings.save()
        messages.info(request,"La puissance seuil a été mise à jour avec succès")
        return redirect("monitoring:settings")


    context = {
        "power_treshhold":my_settings
    }
    return render(request,"monitoring/settings.html",context)