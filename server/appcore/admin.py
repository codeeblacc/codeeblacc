from django.contrib import admin

from appcore.models import Message

class MessageAdmin(admin.ModelAdmin):
    list_display        = ('legalname', 'email', 'timestamp', 'is_opened',)
    readonly_fields     = ('id', 'email',)
    search_fields       = ('legalname', 'email', 'message',)

    fieldsets           = (
        (None, {'fields': ('legalname', 'message',)}),
        ('Ready Only', {'fields': ('email', 'id',)}),
        ('Indicators', {'fields': ('is_opened',)}),
        ('Auto Generated', {'fields': ('ip_address', 'systeminfo',)})
    )

    list_filter         = ('timestamp', 'is_opened',)

admin.site.register(Message, MessageAdmin)
