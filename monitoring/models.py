from django.db import models

# Create your models here.


class Settings(models.Model):
    puissance_seuil = models.FloatField()
    