from django.contrib.auth.models import User
from django.db import models
from catalog.models import Screening


class Ticket(models.Model):
    screening = models.ForeignKey(Screening, on_delete=models.CASCADE)
    # owner = models.EmailField(default='example@gmail.com')
    ROW_CHOICE = [(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8'), (9, '9')]
    COLUMN_CHOICE = [(1, '1'), (2, '2'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8'), (9, '9'), (10, '10'), (12, '12'), (13, '13')]
    seat_row = models.PositiveIntegerField(choices=ROW_CHOICE)
    seat_column = models.PositiveIntegerField(choices=COLUMN_CHOICE)
    price = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        unique_together = ('screening', 'seat_row', 'seat_column')

    def __str__(self):
        return f'{self.screening} {self.seat_row}-{self.seat_column} ticket'


class TicketOrder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tickets = models.ManyToManyField(Ticket)
    total_price = models.DecimalField(max_digits=7, decimal_places=2)
    order_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user.username} {self.tickets.all().count()} tickets'

    def display_screening(self):
        return f'{self.tickets.all()[0].screening}'
    display_screening.short_description = 'screening'
