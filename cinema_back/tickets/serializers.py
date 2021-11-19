from rest_framework import serializers
from .models import Screening, Movie, Ticket, Order
from .service import send


class TicketSerializer(serializers.ModelSerializer):
	class Meta:
		model = Ticket
		fields = ('id', 'row', 'seat', 'screening')


class OrderSerializer(serializers.ModelSerializer):
	tickets = TicketSerializer(many=True)

	class Meta:
		model = Order
		fields = '__all__'

	def create(self, validated_data):
		tickets_data = validated_data.pop('tickets')
		order = Order.objects.create(**validated_data)

		for ticket_data in tickets_data:
			Ticket.objects.create(order=order, **ticket_data)

		send(order.customer_mail, Ticket.objects.filter(order=order), order)
		return order


class TicketMoviesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Ticket
		fields = ('id', 'row', 'seat')


class ScreeningMoviesSerializer(serializers.ModelSerializer):
	tickets = TicketMoviesSerializer(many=True, read_only=True)

	class Meta:
		model = Screening
		fields = ('id', 'date_time', 'tickets')


class MovieSerializer(serializers.ModelSerializer):
	screenings = ScreeningMoviesSerializer(many=True, read_only=True)

	class Meta:
		model = Movie
		fields = ('id', 'title', 'year', 'screenings')
