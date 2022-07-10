from django.urls import path,include
from .views import BillList,UserDetail,BillDetail

urlpatterns = [
    path('bill',BillList.as_view()),
    path('bill/<int:pk>',BillDetail.as_view()),
    path('userdetail',UserDetail.as_view()),
    #path('/bill/<int:pk>',BillDetail.as_view()),
    path('api-auth/',include('rest_framework.urls')),
]
