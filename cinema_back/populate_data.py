import os
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cinema_back.settings')

import django
# Import settings
django.setup()

import random
from tickets.models import Movie, Screening, Order, Ticket
from faker import Faker


fakegen = Faker()

fake_price = random.randint(0, 1000)


def add_movies(movies_list):
	for title, year in movies_list:
		movie = Movie.objects.get_or_create(title=title, year=year)


def add_screenings(n=4):
	movies_obj_list = Movie.objects.all()
	for i in range(n):
		random_movie = random.choice(movies_obj_list)
		fake_datetime = fakegen.future_datetime()
		Screening.objects.get_or_create(movie=random_movie, date_time=fake_datetime)


def add_ticket(order, screening):
	seat_row = random.randint(1, 13)
	seat_column = random.randint(1, 13)

	ticket = Ticket.objects.get_or_create(
		order=order, screening=screening, seat_row=seat_row, seat_column=seat_column)
	return ticket


def add_orders(orders_n=3):
	screenings_obj_list = Screening.objects.all()

	for i in range(orders_n):
		tickets_n = random.randint(2, 5)
		fake_email = fakegen.email()
		random_price = random.randint(100, 1000)
		random_screening = random.choice(screenings_obj_list)

		order_id, new_order = Order.objects.get_or_create(customer_mail=fake_email, price=random_price)
		for j in range(tickets_n):
			add_ticket(order_id, random_screening)


if __name__ == '__main__':
	movies_list = [
		['Once Upon A Time ... In Hollywood', 2019],
		['The Circus', 1928],
		['Blade Runner 2049', 2017],
		['Black Panther', 2018],
		['City Lights', 1931],
		['Back to the Future Part II', 1989],
		['Star Trek: The Next Generation', 1987],
		['Jaws', 1975],
		['Ghostbusters', 1984]]

	add_movies(movies_list)

	screenings_amount = 15
	add_screenings(screenings_amount)

	orders_amount = 15
	add_orders(20)
