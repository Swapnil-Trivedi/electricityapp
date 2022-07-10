from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

##importing the models
from Bill.models import Bill
from UserDetail.models import UserDetail

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        fields=('id','Amount','BillGenDate','BillDueDate','Unit','Paid')
        model=Bill

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        fields=("Mobile","Address","City","State","Pincode","Country",)
        model=UserDetail