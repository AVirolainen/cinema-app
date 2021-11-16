from rest_framework import serializers
from .models import Screening, Movie, Ticket, Order


class TicketSerializer(serializers.ModelSerializer):
	class Meta:
		model = Ticket
		fields = ('id', 'seat_row', 'seat_column')


class OrderSerializer(serializers.ModelSerializer):
	tickets = TicketSerializer(many=True)

	class Meta:
		model = Order
		fields = '__all__'

	# def create(self, validated_data):
	# 	tickets_data = validated_data.pop('tickets')
	# 	order = Order.objects.create(**validated_data)
	# 	for ticket_data in tickets_data:
	# 		Ticket.objects.create(order=order, **ticket_data)
	# 	return order


class ScreeningSerializer(serializers.ModelSerializer):
	tickets = TicketSerializer(many=True)

	class Meta:
		model = Screening
		fields = ('id', 'date_time', 'movie', 'tickets')


class MovieSerializer(serializers.ModelSerializer):

	class Meta:
		model = Movie
		fields = '__all__'



