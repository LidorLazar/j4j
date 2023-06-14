
from django.urls import path
from . import views


urlpatterns = [
    path('test/', views.hello),
    path('prod/', views.my_product)
]
