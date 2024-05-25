from django.contrib import admin

from .models import SEEMarksheet, CIECategorywiseMarksheet, CIEMarksheet

# Register your models here.
admin.site.register(SEEMarksheet)
admin.site.register(CIECategorywiseMarksheet)
admin.site.register(CIEMarksheet)
