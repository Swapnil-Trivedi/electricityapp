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
    User=serializers.SerializerMethodField()
    Bill=serializers.SerializerMethodField()
    class Meta:
        fields=("ReportId","Remarks","Status","Bill","User")
        model=BillReport
    def get_User(self,obj):
        user =  self.context['request'].user.id
        user_query=User.objects.filter(id=user)
        serializer=UserSerializer(user_query,many=True)
        return serializer.data

    def get_Bill(self,obj):
        user =  self.context['request'].user.id
        bill_query=Bill.objects.filter(id=obj.BillId_id)
        serializer=BillSerializer(bill_query,many=True)
        return serializer.data

class SubmitReportSerializer(serializers.ModelSerializer):
    class Meta:
        fields=("BillId",)
        model=BillReport

class ActiveReportSerializer(serializers.ModelSerializer):
    ActiveReport=serializers.SerializerMethodField()
    InActiveReports=serializers.SerializerMethodField()
    class Meta:
        fields=("ActiveReport","InActiveReports")
        model=BillReport
    def get_ActiveReport(self,obj):
        user =  self.context['request'].user.id
        count=BillReport.objects.filter(Status=0,UserId_id=user).count()
        #serializer=ActiveReportSerializer(count,many=False)
        return count
    def get_InActiveReports(self,obj):
        user =  self.context['request'].user.id
        count=BillReport.objects.filter(Status=1,UserId_id=user).count()
        #serializer=ActiveReportSerializer(count,many=False)
        return count

class UnpaidBillSerializer(serializers.ModelSerializer):
    UnpaidBills=serializers.SerializerMethodField()
    PaidBills=serializers.SerializerMethodField()
    class Meta:
        fields=("UnpaidBills","PaidBills")
        model=Bill
    def get_UnpaidBills(self,obj):
        user =  self.context['request'].user.id
        count=Bill.objects.filter(Paid=0,UserId_id=user ).count()
        return count
    def get_PaidBills(self,obj):
        user =  self.context['request'].user.id
        count=Bill.objects.filter(Paid=1,UserId_id=user ).count()
        return count

class chartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=Bill
        fields=("id","BillGenDate","Amount","Unit")