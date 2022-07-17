from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from django.contrib.auth.models import User
##importing the models
from Bill.models import Bill
from UserDetail.models import UserDetail
from Report.models import BillReport

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        fields=('id','Amount','BillGenDate','BillDueDate','Unit','Paid')
        model=Bill

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=("first_name","last_name")

class UserDetailSerializer(serializers.ModelSerializer):
    #custom serilaization to get user detials
    user=serializers.SerializerMethodField()
    class Meta:
        fields=("Mobile","Address","City","State","Pincode","Country","user")
        model=UserDetail
    def get_user(self, obj):
            user_query = User.objects.filter(
                id=obj.UserId_id)
            serializer = UserSerializer(user_query, many=True)
    
            return serializer.data

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        fields=("ReportId","Remarks")
        model=BillReport

class SubmitReportSerializer(serializers.ModelSerializer):
    class Meta:
        fields=("ReportId","BillId")
        model=BillReport