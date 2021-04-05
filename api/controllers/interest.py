import os
import json
from django.http import JsonResponse
from django.views import View
from services.email import Email as EmailService
from services.email import EmailTemplate

class InterestView(View):
    def post(self, request, **kwargs):
        payload = json.loads(request.body)
        self.send_verification_email(payload)

        return JsonResponse({
            'status': True,
            'msg': 'Nuestros operadores han sido notificados, te contactaremos a la brevedad!'
        })

    def send_verification_email(self, payload):
        host = os.getenv('HOST', 'http://localhost:8000')
        message = EmailTemplate.INTEREST_NOTIFICATION.value
        message = message.format(
            name=payload['name'],
            email=payload['email'],
            phone=payload['phone'],
            commentary=payload['commentary']
        )

        email = EmailService(
            subject='Hay un interesado en trabajar con nosotros.',
            message=message,
            receiver="j.alvarez@nazcaspa.cl"
        )

        email.send()