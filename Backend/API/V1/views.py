from rest_framework import generics,permissions
from Bill.models import Bill
from UserDetail.models import UserDetail as UserDetailModel
from .serializers import BillSerializer,UserDetailSerializer

class BillList(generics.ListAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=BillSerializer

    # to get bills only for that user
    def get_queryset(self):
        userId=self.request.user
        return Bill.objects.filter(UserId_id=userId)

class UserDetail(generics.RetrieveAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=UserDetailSerializer

    # to get userDetail only for that user
    def get_object(self):
        userId=self.request.user
        return UserDetailModel.objects.get(UserId_id=userId)
    