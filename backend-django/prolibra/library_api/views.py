# from django.shortcuts import render, HttpResponse
from .models import (
    Buku,
    Peminjam,
    Meminjam,
    Denda,
    Petugas,
    Pendataan,
    Mengurusi
)
from .serializers import (
    BukuSerializer,
    MeminjamSerializer,
    PeminjamSerializer,
    DendaSerializer,
    PetugasSerializer,
    PendataanSerializer,
    MengurusiSerializer
)
# from django.http import JsonResponse
# from rest_framework.parsers import JSONParser
# from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
# Create your views here.


class BookList(APIView):

    def get(self, request):
        books = Buku.objects.all()
        serializer = BukuSerializer(books, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BukuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookDetail(APIView):

    def get_object(self, judul_buku):
        judul = judul_buku.replace("-", " ")
        try:
            return Buku.objects.get(judul_buku=judul)
        except Buku.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, judul_buku):
        judul = judul_buku.replace("-", " ")
        book = self.get_object(judul)
        serializer = BukuSerializer(book)
        return Response(serializer.data)

    def delete(self, request, judul_buku):
        judul = judul_buku.replace("-", " ")
        book = self.get_object(judul)
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class BorrowerList(APIView):

    def get(self, request):
        borrowers = Peminjam.objects.all()
        serializer = PeminjamSerializer(borrowers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PeminjamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Borrow(APIView):

    def get(self, request):
        borrows = Meminjam.objects.all()
        serializer = MeminjamSerializer(borrows, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MeminjamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BorrwerReturn(APIView):

    def get_object(self, id_peminjam, isbn):
        try:
            return Meminjam.objects.get(id_peminjam=id_peminjam,isbn=isbn)
        except Meminjam.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id_peminjam,isbn):
        borrower = self.get_object(id_peminjam, isbn)
        serializer = MeminjamSerializer(borrower)
        return Response(serializer.data)

    def put(self, request, id_peminjam, isbn):
        borrower = self.get_object(id_peminjam, isbn)
        serializer = MeminjamSerializer(borrower, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id_peminjam,isbn):
        borrower = self.get_object(id_peminjam,isbn)
        borrower.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class FinesList(APIView):

    def get(self, request):
        fines = Denda.objects.all()
        serializer = DendaSerializer(fines, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DendaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Admin(APIView):

    def get(self, request):
        admin = Petugas.objects.all()
        serializer = PetugasSerializer(admin, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PetugasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# def Index(request):
#     return HttpResponse("It's work sir")

# def book_list(request):
#
#     #get all books info
#     if request.method == 'GET':
#         books = Buku.objects.all()
#         serializer = BukuSerializer(books, many=True)
#         return JsonResponse(serializer.data, safe=False)
#
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = BukuSerializer(data = data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = 201)
#         return JsonResponse(serializer.errors, status = 400)
#
# # @csrf_exempt
# # def book_details(request, primary_key):
# #     try:
# #         book = Buku.object.get
#
#
# def borrower_list(request):
#
#     #get all borrower info
#     if request.method == 'GET':
#         borrowers = Peminjam.objects.all()
#         serializer = PeminjamSerializer(borrowers, many=True)
#         return JsonResponse(serializer.data, safe=False)
#
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = PeminjamSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)
