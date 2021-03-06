from django.urls import path,include
from .views import BillList,UserDetail,BillDetail,ReportList,SubmitReport,DeleteReport,ActiveReport,UnpaidBill,ChartData
urlpatterns = [
    path('bill',BillList.as_view()),
    path('bill/<int:pk>',BillDetail.as_view()),
    path('userdetail',UserDetail.as_view()),
    path('reports',ReportList.as_view()),
    path('submitreport',SubmitReport.as_view()),
    path('deletereport/<int:pk>',DeleteReport.as_view()),
    path('countactive',ActiveReport.as_view()),
    path('unpaidbill',UnpaidBill.as_view()),
    path('chartdata',ChartData.as_view()),
    #path('/bill/<int:pk>',BillDetail.as_view()),
    path('api-auth/',include('rest_framework.urls')),
]
