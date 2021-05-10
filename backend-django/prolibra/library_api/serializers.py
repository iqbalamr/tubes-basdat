from rest_framework import serializers
from .models import (
    Buku,
    Lokasi,
    Peminjam,
    Meminjam,
    Denda,
    # Petugas,
    Pendataan,
    Mengurusi
)
from django.contrib.auth.models import User

class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'id')

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
        fields = ('id_peminjam', 'isbn', 'tanggal_peminjaman', 'tanggal_pengembalian', 'status_peminjaman' )
    # isbn = BukuSerializer(many=False)


class InfoMeminjamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Meminjam
        fields = ('id_peminjam', 'isbn', 'tanggal_peminjaman', 'tanggal_pengembalian', 'status_peminjaman' )
    # isbn = BukuSerializer(many=False)
    id_peminjam = PeminjamSerializer(many=False)


class InfoDendaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Denda
        fields = ('id_peminjam', 'jumlah_denda', 'jumlah_hari_telat', 'status')
    id_peminjam = PeminjamSerializer(many=False)


class DendaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Denda
        fields = ('id_peminjam', 'jumlah_denda', 'jumlah_hari_telat', 'status')
    

# class PetugasSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Petugas
#         fields = '__all__'


class PendataanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pendataan
        fields = '__all__'


class InfoMengurusiSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mengurusi
        fields = '__all__'
        
    id_peminjam = PeminjamSerializer(many=False)
    id_petugas = CurrentUserSerializer(many=False)

    # def to_representation(self, instance):
    #     data = super(MengurusiSerializer, self).to_representation(instance)
    #     id_peminjam = data.pop('id_peminjam')
    #     for key, val in id_peminjam.items():
    #         data.update({key: val})
    #     return data

class MengurusiSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mengurusi
        fields = '__all__'


class PendataanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pendataan
        fields = '__all__'

