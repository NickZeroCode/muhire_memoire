from django.shortcuts import render

# Create your views here.

def accueil_monitoring(request):
    return render(request,"monitoring/monitoring.html")
