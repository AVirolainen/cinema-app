from django.db import models
from datetime import timedelta


class Film(models.Model):
    poster = models.ImageField(upload_to='images/%Y/%m/%d')
    name = models.CharField(max_length=100, unique=True)
    year = models.IntegerField()
    director = models.CharField(max_length=100, blank=True)
    release_date = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=255, blank=True)
    genre = models.CharField(max_length=100, blank=True)
    runtime_min = models.IntegerField(null=True, blank=True)
    production = models.CharField(max_length=255, blank=True)
    writer = models.CharField(max_length=255, blank=True)
    actors = models.CharField(max_length=255, blank=True)
    imdb_rating = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)
    description = models.CharField(max_length=255, blank=True)

    is_released = models.BooleanField(default=False)
    
    def __str__(self):
        return '%s (%s)'%(self.name, str(self.year))


class Screening(models.Model):
    date_time = models.DateTimeField()
    film = models.ForeignKey(Film, on_delete=models.CASCADE)

    def __str__(self):
        return (self.date_time + timedelta(hours=2)).strftime(f"{self.film} %d/%m/%Y %H:%M")