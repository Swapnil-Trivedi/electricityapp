from email.headerregistry import Address
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserDetail(models.Model):
    class Meta: verbose_name_plural = 'UserDetail'
    Mobile=models.CharField(max_length=10,null=False)
    Address=models.CharField(max_length=100,null=False)
    City=models.CharField(max_length=20,null=False)
    State=models.CharField(max_length=20,null=False)
    Pincode=models.CharField(max_length=7,null=False)
    Country=models.CharField(max_length=50,default="India")
    UserId=models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True,unique=True)

    def __str__(self):
        return self.UserId.get_username()