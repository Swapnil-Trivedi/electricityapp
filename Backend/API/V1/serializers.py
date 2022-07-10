from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

##importing the models
from Bill.models import Bill

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        fields=('id','Amount','BillGenDate','BillDueDate','Unit','Paid')
        model=Bill