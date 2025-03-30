from django.db import models

# Create your models here.


class Settings(models.Model):
    puissance_seuil = models.FloatField()
    nombre_cabines = models.IntegerField(max_length=4,null=True)
    