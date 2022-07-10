from rest_framework import generics,viewsets,permissions
from Bill.models import Bill
from .serializers import BillSerializer

class BillList(generics.ListAPIView):
    queryset=Bill.objects.all()
    serializer_class=BillSerializer