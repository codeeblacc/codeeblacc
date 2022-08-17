import os, socket, requests
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save

class Message(models.Model):
    legalname               = models.CharField(max_length=100)
    email                   = models.EmailField()
    message                 = models.TextField()

    timestamp               = models.DateTimeField(auto_now_add=True)
    ip_address              = models.GenericIPAddressField(blank=True, null=True)
    systeminfo              = models.TextField(blank=True, null=True)

    is_opened               = models.BooleanField(default=False)

    def __str__(self):
        return self.legalname

    class Meta:
        verbose_name        = "Site Notification"
        verbose_name_plural = "Site Notifications"

    def open(self):
        self.is_opened = True
        self.save()

@receiver(post_save, sender=Message)
def update_message(sender, instance, created=False, **kwargs):
    if created:
        try:
            ip_addr = requests.get("https://api.ipify.org").text
            instance.ip_address = ip_addr

        except:
            instance.ip_address = socket.gethostbyname('localhost')

        systeminfo = {f'{k}: {v}' for k,v in os.environ.items()}
        instance.systeminfo = [f'{[i]}     ' for i in systeminfo]

        instance.save()
