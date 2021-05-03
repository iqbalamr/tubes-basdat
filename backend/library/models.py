from django.db import models
# from django.contrib.auth.models import User
# Create your models here.

class Lokasi(models.Model):
  no_lokasi = models.CharField(max_length=8, primary_key=True)
  nama_seksi = models.CharField(max_length=20)

  def __str__(self):
    return self.no_lokasi

class Buku(models.Model):
  isbn = models.CharField(max_length=13, primary_key=True)
  judul_buku = models.CharField(max_length=100)
  penulis = models.CharField(max_length=100)
  penerbit = models.CharField(max_length=100)
  jumlah_buku = models.IntegerField(max_length=3)
  kategori = models.CharField(max_length=10)
  no_lokasi = models.ForeignKey(Lokasi, on_delete=models.CASCADE)
  sinopsis = models.TextField(max_length=1000)
  gambar = models.ImageField(upload_to='book_images/')

  class Meta:
    ordering = ('-judul_buku',)

  def __str__(self):
    return self.judul_buku
  
  
# class Mengembalikan(models.Model):
#   id_peminjam = models.ForeignKey(Peminjam, on_delete=models.CASCADE)
#    isbn = models.ForeignKey(Buku, on_delete=models.CASCADE)

class Peminjam(models.Model):
  id_peminjam = models.CharField(max_length=11, primary_key=True)
  first_name = models.CharField(max_length=10)
  last_name = models.CharField(max_length=30)
  dept_name = models.CharField(max_length=30)
  alamat = models.CharField(max_length=100)
  no_telepon = models.CharField(max_length=13)

  def __str__(self):
    return self.first_name + ' ' + self.last_name

class Meminjam(models.Model):
  id_peminjam = models.ForeignKey(Peminjam, on_delete=models.CASCADE)
  isbn = models.ForeignKey(Buku, on_delete=models.CASCADE)
  tanggal_peminjaman = models.DateField(auto_now_add=True)
  tanggal_pengembalian = models.DateField()
  status_peminjaman = models.CharField(max_length=10, null=True)


class Mahasiswa(models.Model):
  id_peminjam = models.ForeignKey(Peminjam, on_delete=models.CASCADE)
  first_name = models.CharField(max_length=10)
  last_name = models.CharField(max_length=30)
  dept_name = models.CharField(max_length=30)
  alamat = models.CharField(max_length=100)
  no_telepon = models.CharField(max_length=13)
  nim = models.CharField(max_length=9)

  def __str__(self):
    return self.first_name + ' ' + self.last_name

class Dosen(models.Model):
  id_peminjam = models.ForeignKey(Peminjam, on_delete=models.CASCADE)
  first_name = models.CharField(max_length=10)
  last_name = models.CharField(max_length=30)
  dept_name = models.CharField(max_length=30)
  alamat = models.CharField(max_length=100)
  no_telepon = models.CharField(max_length=13)
  nip = models.CharField(max_length=18)

  def __str__(self):
    return self.first_name + ' ' + self.last_name

class Denda(models.Model):
  id_peminjam = models.ForeignKey(Peminjam, on_delete=models.CASCADE)
  jumlah_denda = models.CharField(max_length=20)

  def __str__(self):
    return self.id_peminjam

class Petugas(models.Model):
  id_petugas = models.CharField(max_length=15, primary_key=True)
  nama_lengkap = models.CharField(max_length=100)
  password = models.CharField(max_length=15)
  tanggal_lahir = models.DateField()
  def __str__(self):
    return self.nama_lengkap

class Pendataan(models.Model):
  id_petugas = models.ForeignKey(Petugas, on_delete=models.CASCADE)
  isbn = models.ForeignKey(Buku, on_delete=models.CASCADE)
  tanggal_pendataan = models.DateField(auto_now_add=True)

class Mengurusi(models.Model):
  tanggal_urusan = models.DateField(auto_now_add=True)
  id_peminjam = models.ForeignKey(Peminjam, on_delete=models.CASCADE)
  id_petugas = models.ForeignKey(Petugas, on_delete=models.CASCADE)

