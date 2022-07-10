from ast import mod
from datetime import datetime, timedelta
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

def get_duedate():
    return datetime.today()+timedelta(days=30)

class Bill(models.Model):
    Amount=models.IntegerField(null=False,default=0)
    BillGenDate=models.DateField(auto_now_add=True)
    BillDueDate=models.DateField(default=get_duedate,editable = False)
    Unit=models.IntegerField(default=0,null=False)
    Paid=models.BooleanField(default=False,null=False)
    UserId=models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.UserId.get_username()