from django.contrib import admin
from tickets.models import Ticket, TicketOrder


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
	list_display = ('id', 'screening', 'seat_row', 'seat_column', 'price')
	list_filter = ('screening',)


@admin.register(TicketOrder)
class TicketOrderAdmin(admin.ModelAdmin):
	list_display = ('id', 'user', 'display_screening', 'total_price', 'order_time')
	list_filter = ('user', 'order_time')
	search_fields = ('user',)


