from rest_framework import serializers
from .models import (
    Buku,
    Lokasi,
    Peminjam,
    Meminjam,
    Mahasiswa,
    Dosen,
    Denda,
    Petugas,
    Pendataan,
    Mengurusi
)

class LokasiSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lokasi
        fields = ['no_lokasi','nama_seksi']

class BukuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Buku
        fields = '__all__'

class PeminjamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Peminjam
        fields = '__all__'

class MeminjamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Meminjam
        fields = '__all__'

class MahasiswaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mahasiswa
        fields = '__all__'

class DosenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dosen
        fields = '__all__'

class DendaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Denda
        fields = '__all__'


class PetugasSerializer(serializers.ModelSerializer):

    class Meta:
        model = Petugas
        fields = '__all__'

class PendataanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pendataan
        fields = '__all__'

class MengurusiSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mengurusi
        fields = '__all__'
