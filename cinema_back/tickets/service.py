from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.template.loader import get_template

from cinema_back.settings import EMAIL_HOST_USER


def send(to_email, tickets_data, order):
	subject = 'your KINOLOVE tickets'
	message = 'hey'
	from_email = EMAIL_HOST_USER

	if subject and message and from_email:
		try:
			send_mail(
				subject,
				message,
				EMAIL_HOST_USER,
				[to_email],
				html_message=get_template('email/email.html').render(context={'tickets': tickets_data, 'order': order}))
		except BadHeaderError:
			return HttpResponse('Invalid header found.')
		return HttpResponseRedirect('/contact/thanks/')

	else:
		return HttpResponse('Make sure all fields are entered and valid.')

