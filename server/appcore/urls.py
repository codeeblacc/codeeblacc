from django.urls import path

from appcore.views import *

app_name    = "appcore"

urlpatterns = [
    path('drop-message', MessageView.as_view(), name='message'),

    path('open-message/<pk>', OpenMessageView.as_view(), name='open-message'),
    path('delete-message/<pk>', DeleteMessageView.as_view(), name='delete-message'),
]
