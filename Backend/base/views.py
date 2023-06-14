from django.shortcuts import render
from django.http import JsonResponse
from .models import Product
from .serializer import ProductSerializer

# Create your views here.

def hello(request):
    return JsonResponse("Hello, world!", safe=False)


def my_product(request):
    all_product = ProductSerializer(Product.objects.all(), many=True)
    return JsonResponse(all_product.data, safe=False)