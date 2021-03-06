from django.contrib import admin
from django.urls import path,include
from django.urls import re_path as url
from rest_framework_simplejwt import views as jwt_views
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Electricity APP Backend API')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/',jwt_views.TokenObtainPairView.as_view(),name ='token_obtain_pair'),
    path('api/token/refresh/',jwt_views.TokenRefreshView.as_view(),name ='token_refresh'),
    path('api/v1/',include("API.V1.urls")),
    url(r'docs/', schema_view),

]
