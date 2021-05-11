from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    dob = models.DateField(null=True)

    def __str__(self):
        return  self.user.username


class Lokasi(models.Model):
    no_lokasi = models.CharField(max_length=8, primary_key=True)
    nama_seksi = models.CharField(max_length=20)

    def __str__(self):
        return self.no_lokasi


class Buku(models.Model):
    isbn = models.CharField(max_length=13, primary_key=True)
    judul_buku = models.CharField(max_length=100, unique=True)
    penulis = models.CharField(max_length=100)
    penerbit = models.CharField(max_length=100)
    jumlah_buku = models.IntegerField()
    kategori = models.CharField(max_length=10)
    no_lokasi = models.ForeignKey(Lokasi, on_delete=models.CASCADE)
    sinopsis = models.TextField(max_length=1000)
    gambar = models.ImageField(upload_to='book_images/')

    class Meta:
        ordering = ('-judul_buku',)

    def __str__(self):
        return f'{self.judul_buku} {self.isbn}'

    def get_absolute_url(self):
        return f'/{self.judul_buku.replace(" ","-")}'


class Peminjam(models.Model):
    id_peminjam = models.CharField(max_length=11, primary_key=True)
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=30, null=True)
    dept_name = models.CharField(max_length=30)
    alamat = models.CharField(max_length=100)
    no_telepon = models.CharField(max_length=13)
    nim = models.CharField(max_length=9, null=True)
    nip = models.CharField(max_length=18, null=True)
    tipe = models.CharField(max_length=10)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Meminjam(models.Model):
    id_peminjam = models.ForeignKey(Peminjam, on_delete=models.CASCADE, blank=True)
    isbn = models.ForeignKey(Buku, on_delete=models.CASCADE, blank=True)
    tanggal_peminjaman = models.DateTimeField(blank=True)
    tanggal_pengembalian = models.DateTimeField(null=True, blank=True)
    status_peminjaman = models.CharField(max_length=100, default="Belum dikembalikan")


class Denda(models.Model):
    id_peminjam = models.ForeignKey(Peminjam, on_delete=models.CASCADE)
    jumlah_denda = models.CharField(max_length=20)
    jumlah_hari_telat = models.IntegerField()
    status = models.CharField(max_length=20, default="Hutang", blank=True)
    def __str__(self):
        return self.id_peminjam


class Pendataan(models.Model):
    id_petugas = models.ForeignKey(User, on_delete=models.CASCADE)
    isbn = models.ForeignKey(Buku, on_delete=models.CASCADE)
    tanggal_pendataan = models.DateTimeField()


class Mengurusi(models.Model):
    tanggal_urusan = models.DateTimeField()
    id_peminjam = models.ForeignKey(Peminjam, on_delete=models.CASCADE)
    id_petugas = models.ForeignKey(User, on_delete=models.CASCADE)
    jenis = models.CharField(max_length=20, blank=True)