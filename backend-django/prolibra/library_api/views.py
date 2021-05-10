# from django.shortcuts import render, HttpResponse
from .models import (
    Buku,
    Peminjam,
    Meminjam,
    Denda,
    Mengurusi
)
from .serializers import (
    BukuSerializer,
    MeminjamSerializer,
    PeminjamSerializer,
    DendaSerializer,
    MengurusiSerializer
)
# from django.http import JsonResponse
# from rest_framework.parsers import JSONParser
# from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
# Create your views here.


class BookList(APIView):

    # authentication_classes = (TokenAuthentication)
    parser_classes = [MultiPartParser, FormParser]
    def get(self, request):
        books = Buku.objects.all()
        serializer = BukuSerializer(books, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = BukuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookDetail(APIView):

    permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication)

    def get_object(self, isbn):
        isbn = isbn
        try:
            return Buku.objects.get(isbn=isbn)
        except Buku.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, isbn):
        isbn = isbn
        book = self.get_object(isbn)
        serializer = BukuSerializer(book)
        return Response(serializer.data)

    def delete(self, request, isbn):
        isbn = isbn
        book = self.get_object(isbn)
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


class ServicesList(APIView):

    def get(self, request):
        services = Mengurusi.objects.all()
        serializer = MengurusiSerializer(services, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MengurusiSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
