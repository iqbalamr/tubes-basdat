from rest_framework import serializers
from .models import Buku, Lokasi

class LokasiSerializer(serializers.Serializer):
    no_lokasi = serializers.CharField(max_length=8)
    nama_seksi = serializers.CharField(max_length=20)

    def create(self, validated_data):
        return Lokasi.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.no_lokasi = validated_data.get('no_lokasi', instance.no_lokasi)
        instance.nama_seksi = validated_data.get('nama_seksi', instance.nama_seksi)

    class Meta:
        model = Lokasi
        fields = ['no_lokasi','nama_seksi']

class BukuSerializer(serializers.Serializer):
    isbn = serializers.CharField(max_length=13)
    judul_buku = serializers.CharField(max_length=100)
    penulis = serializers.CharField(max_length=100)
    penerbit = serializers.CharField(max_length=100)
    jumlah_buku = serializers.IntegerField()
    kategori = serializers.CharField(max_length=10)
    no_lokasi = LokasiSerializer(many=False, read_only=True)
    sinopsis = serializers.CharField(max_length=1000)
    gambar = serializers.ImageField(max_length=None, use_url=True)

    def create(self, validated_data):
        return Buku.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.isbn = validated_data.get('isbn', instance.isbn)
        instance.judul_buku = validated_data.get('isbn', instance.judul_buku)
        instance.penulis = validated_data.get('isbn', instance.penulis)
        instance.penerbit = validated_data.get('isbn', instance.penerbit)
        instance.jumlah_buku = validated_data.get('isbn', instance.jumlah_buku)
        instance.kategori = validated_data.get('isbn', instance.kategori)
        instance.no_lokasi = validated_data.get('isbn', instance.no_lokasi)
        instance.sinopsis = validated_data.get('isbn', instance.sinopsis)
        instance.gambar = validated_data.get('isbn', instance.gambar)

    class Meta:
        model = Buku
        fields = ['isbn','judul_buku', 'penulis', 'penerbit', 'jumlah_buku','kategori', 'sinopsis', 'gambar','no_lokasi']