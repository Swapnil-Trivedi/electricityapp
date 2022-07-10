from ast import mod
from datetime import datetime, timedelta
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

def get_duedate():
    return datetime.today()+timedelta(days=30)

class Bill(models.Model):
    BillId=models.IntegerField(primary_key=True)
    Amount=models.IntegerField(null=False,default=0)
    BillGenDate=models.DateField(auto_now_add=True)
    BillDueDate=models.DateField(default=get_duedate)
    Unit=models.IntegerField(default=0,null=False)
    Paid=models.BooleanField(default=False,null=False)
    UserId=models.ForeignKey(User,on_delete=models.CASCADE)