from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from appcore.models import *
from appcore.serializers import *

class MessageView(APIView):
    authentication_classes      = permission_classes = [TokenAuthentication], [IsAuthenticated]

    def post(self, request, format=None):
        response_object = {}
        serializer = MessageSerializer(data=request.data)

        if serializer.is_valid():
            message = serializer.save()
            subject         = f"Site Notification from {serializer.validated_data.get('legalname')}"
            body            = render_to_string('email/message.html', {'message': message})
            content         = strip_tags(body)
            mail            = EmailMultiAlternatives(subject, content, settings.DEFAULT_ACCOUNT_FROM_EMAIL, [settings.RECEIVER_EMAIL])

            mail.attach_alternative(body, 'text/html')

            try:
                mail.send()

                response_data['status'] = status.HTTP_201_CREATED
                response_data['result'] = 'Notification success.'
                response_data['success'] = True

                return Response(data=response_data)

            except Exception as e:
                message.delete()
                response_data['status'] = status.HTTP_417_EXPECTATION_FAILED
                response_data['success'] = False
                response_data['result'] = 'Notification failed.'
                response_data['error_log'] = f'{e}'

                return Response(data=response_data)

        else:
            response_object["status"] = status.HTTP_400_BAD_REQUEST
            response_object["result"] = serializer.errors
            response_object["success"] = False

            return Response(data=response_object)


class OpenMessageView(APIView):
    authentication_classes      = permission_classes = [TokenAuthentication], [IsAuthenticated]

    def get(self, request, pk, format=None):
        return Response(pk)
