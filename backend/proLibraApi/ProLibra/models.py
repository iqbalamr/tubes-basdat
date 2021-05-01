from django.db import models

# Create your models here.

class Book(model.Model):
  isbn = models.CharField(max_length=20, primary_key=True)
  judul_buku = models.CharField(max_length=40)
  penulis = models.CharField(max_length=30)
  penerbit = models.CharField(max_length=30)
  jumlah_buku = models.IntegerField(max_length=3)
  kategori = models.CharField(max_length=10)
  no_lokasi = models.CharField(max_length=8)
  sinopsis = models.TextField(max_length=1000)
  gambar = models.ImageField()

