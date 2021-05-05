from rest_framework import serializers
from .models import (
    Buku,
    Lokasi,
    Peminjam,
    Meminjam,
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
        lookup_field= 'judul_buku'


class PeminjamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Peminjam
        fields = '__all__'


class MeminjamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Meminjam
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
