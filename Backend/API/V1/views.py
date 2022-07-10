from rest_framework import generics,permissions
from .permissions import IsAuthorOrReadOnly
from Bill.models import Bill
from .serializers import BillSerializer

class BillList(generics.ListAPIView):
    permission_classes=(permissions.IsAuthenticated,)
    serializer_class=BillSerializer

    # to get bills only for that user
    def get_queryset(self):
        userId=self.request.user
        return Bill.objects.filter(UserId_id=userId)
    