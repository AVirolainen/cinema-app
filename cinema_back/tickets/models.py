from django.db import models
from datetime import timedelta


class Movie(models.Model):
    title = models.CharField(max_length=255)
    year = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.title}({self.year})'


class Screening(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=True)
    date_time = models.DateTimeField()

    def __str__(self):
        return (self.date_time + timedelta(hours=2)).strftime(f"{self.movie} %d/%m/%Y %H:%M")


class TicketOrder(models.Model):
    screening = models.ForeignKey(Screening, on_delete=models.CASCADE)
    customer_mail = models.EmailField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    order_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.screening.movie} {self.customer_mail} tickets'


class Ticket(models.Model):
    order = models.ForeignKey(TicketOrder, on_delete=models.CASCADE)
    # ROW_CHOICE = [(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8'), (9, '9')]
    # COLUMN_CHOICE = [(1, '1'), (2, '2'), (4, '4'), (5, '5'), (6, '6'), (7, '7'),
    #                  (8, '8'), (9, '9'), (10, '10'), (12, '12'), (13, '13')]
    seat_row = models.PositiveIntegerField()
    seat_column = models.PositiveIntegerField()

    class Meta:
        unique_together = ('order', 'seat_row', 'seat_column')

    def __str__(self):
        return f'{self.order} {self.seat_row}-{self.seat_column}'
