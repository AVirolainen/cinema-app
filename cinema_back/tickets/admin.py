from django.contrib import admin
from tickets.models import Ticket, Order, Screening, Movie


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
	list_display = ('id', 'title', 'year')
	list_display_links = ('id', 'title')
	list_filter = ('year',)
	search_fields = ('id', 'title')


@admin.register(Screening)
class ScreeningAdmin(admin.ModelAdmin):
	list_display = ('id', 'movie', 'date_time')
	list_display_links = ('id', 'movie')
	list_filter = ('date_time',)
	search_fields = ('movie',)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
	list_display = ('id', 'customer_mail', 'price', 'order_time')
	list_filter = ('order_time',)
	search_fields = ('customer_mail',)


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
	list_display = ('id', 'screening', 'order', 'row', 'seat')
	search_fields = ('order',)
