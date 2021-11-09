from django.contrib import admin
from catalog.models import Film, Screening


@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
	list_display = ('id', 'title', 'year', 'is_released')
	list_display_links = ('id', 'title')
	list_filter = ('year', 'is_released')
	search_fields = ('title',)
	list_editable = ('is_released',)


@admin.register(Screening)
class ScreeningAdmin(admin.ModelAdmin):
	list_display = ('id', 'film', 'date_time')
	list_display_links = ('id', 'film')
	list_filter = ('date_time',)
	search_fields = ('film',)

