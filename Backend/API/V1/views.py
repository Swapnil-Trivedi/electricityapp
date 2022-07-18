import imp
from rest_framework import generics,permissions
from rest_framework.exceptions import NotFound
from Bill.models import Bill
from UserDetail.models import UserDetail as UserDetailModel
from Report.models import BillReport
from .serializers import BillSerializer,UserDetailSerializer,ReportSerializer,SubmitReportSerializer,ActiveReportSerializer,UnpaidBillSerializer,chartDataSerializer

class BillList(generics.ListAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=BillSerializer

    # to get bills only for that user
    def get_queryset(self):
        userId=self.request.user
        return Bill.objects.filter(UserId_id=userId)

class BillDetail(generics.RetrieveAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=BillSerializer

    def get_object(self):
        try:
            pk=self.kwargs['pk']
            userId=self.request.user
            return Bill.objects.get(id=pk,UserId_id=userId)
        except Exception as e:
            raise NotFound


class UserDetail(generics.RetrieveAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=UserDetailSerializer

    # to get userDetail only for that user
    def get_object(self):
        userId=self.request.user
        return UserDetailModel.objects.get(UserId_id=userId)

class ReportList(generics.ListAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=ReportSerializer
    
    def get_queryset(self):
        try:
            user=self.request.user.id
            return BillReport.objects.filter(UserId_id=user)
        except Exception as e:    
            raise NotFound

class SubmitReport(generics.CreateAPIView):
     permission_classes=(permissions.IsAuthenticated,)
     serializer_class=SubmitReportSerializer
     
     def perform_create(self, serializer):
        serializer.save(UserId=self.request.user)

class DeleteReport(generics.DestroyAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=SubmitReportSerializer
    queryset=BillReport.objects.all()

class ActiveReport(generics.RetrieveAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=ActiveReportSerializer
    queryset=BillReport
    def get_object(self):
        return self.request.user

class UnpaidBill(generics.RetrieveAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=UnpaidBillSerializer
    queryset=Bill
    def get_object(self):
        return self.request.user
class ChartData(generics.ListAPIView):
     permission_classes=(permissions.IsAuthenticated,)
     serializer_class=chartDataSerializer

     def get_queryset(self):
        user=self.request.user.id
        return Bill.objects.filter(UserId_id=user)