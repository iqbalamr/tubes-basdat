# from django.shortcuts import render, HttpResponse
from .models import (
Buku,
Peminjam,
Meminjam
)
from .serializers import (
BukuSerializer,
MeminjamSerializer,
PeminjamSerializer,
)
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
# def Index(request):
#     return HttpResponse("It's work sir")
@csrf_exempt
def book_list(request):

    #get all books info
    if request.method == 'GET':
        books = Buku.objects.all()
        serializer = BukuSerializer(books, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = BukuSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        return JsonResponse(serializer.errors, status = 400)

@csrf_exempt
def borrower_list(request):

    #get all borrower info
    if request.method == 'GET':
        borrowers = Peminjam.objects.all()
        serializer = PeminjamSerializer(borrowers, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PeminjamSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

