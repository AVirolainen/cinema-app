from django.db import models
from datetime import timedelta


class Movie(models.Model):
    title = models.CharField(max_length=255)
    year = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.title}({self.year})'


class Screening(models.Model):
    movie = models.ForeignKey(Movie, related_name='screenings', on_delete=models.CASCADE, null=True)
    date_time = models.DateTimeField()

    def __str__(self):
        return (self.date_time + timedelta(hours=2)).strftime(f"{self.movie} %d/%m/%Y %H:%M")


class Order(models.Model):
    customer_mail = models.EmailField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    order_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.customer_mail} tickets'


class Ticket(models.Model):
    order = models.ForeignKey(Order, related_name='tickets', on_delete=models.CASCADE)

    screening = models.ForeignKey(Screening, related_name='tickets', on_delete=models.CASCADE)
    seat_row = models.PositiveIntegerField()
    seat_column = models.PositiveIntegerField()

    class Meta:
        unique_together = ('order', 'seat_row', 'seat_column')

    def __str__(self):
        return f'"order":{self.order}, "row":{self.seat_row}, "column":{self.seat_column},'
