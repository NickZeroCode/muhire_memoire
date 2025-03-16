from django.shortcuts import render, redirect, get_object_or_404
from .forms import *
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, logout
from django.contrib import messages

# Create your views here.


def connexion_view(request):
    form = AuthenticationForm(request,data=request.POST)

    if request.method == "POST":

        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect("monitoring:tableau_de_bord")

        else:
            messages.error(request,"Nom d'utilisateur ou mot de passe incorrect!")

    return render(request,'accounts/login.html')

        
