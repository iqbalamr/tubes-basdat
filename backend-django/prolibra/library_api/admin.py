from django.contrib import admin
from .models import Buku, Lokasi
# Register your models here.
# admin.site.register(Buku)
admin.site.register(Lokasi)
#
@admin.register(Buku)
@admin.display(ordering='-judul_buku')
class BookModel(admin.ModelAdmin):
    list_filter = ('isbn', 'judul_buku')
    list_display = ('isbn','judul_buku', 'penulis', 'penerbit', 'jumlah_buku','kategori', 'sinopsis', 'gambar', 'no_lokasi' )
