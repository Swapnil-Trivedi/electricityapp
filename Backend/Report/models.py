from django.db import models
from django.contrib.auth.models import User
from Bill.models import Bill
# Create your models here.

class BillReport(models.Model):
    ReportId=models.IntegerField(primary_key=True)
    Remarks=models.CharField(null=False,max_length=2000)
    Status=models.BooleanField(default=False,null=False)
    BillId=models.ForeignKey(Bill,on_delete=models.CASCADE)
    UserId=models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.ReportId+" "+self.UserId.get_username()