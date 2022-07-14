import os
from threading import Thread
from enum import Enum
from email.mime.image import MIMEImage
from django.core.mail import EmailMessage
from django.core.mail import EmailMultiAlternatives
from django.core.mail import send_mail
from utils.file import get_file_contents


class EmailTemplate(Enum):
    INTEREST_NOTIFICATION = get_file_contents('services/emailTemplates/interest.html')


class Email(Thread):
    def __init__(self, subject='', message='', receiver=''):
        Thread.__init__(self)
        self.receiver = receiver
        self.subject = subject
        self.message = message
        self.sender = 'NAZCA WEB'
        self.documents = []

    def get_image_header_source(self):
        image_source = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            'front/img/t11.jpg'
        )

        file = open(image_source, 'rb')
        image_content = file.read()
        file.close()
        image = MIMEImage(image_content)
        image.add_header('Content-ID', '<{}>'.format('t11.jpg'))

        return image

    def add_document(self, filename):
        self.documents.append(filename)

    def run(self):
        mail = EmailMultiAlternatives(
            self.subject,
            self.message,
            self.sender,
            [self.receiver]
        )

        mail.mixed_subtype = 'related'
        mail.attach_alternative(self.message, 'text/html')

        for document in self.documents:
            mail.attach_file(document)

        mail.send()

    def send(self):
        self.start()


def create_email():
    instance = Email()
    return instance
