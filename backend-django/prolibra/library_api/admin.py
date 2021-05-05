from django.contrib import admin
from .models import *

admin.site.register(Mengurusi)
admin.site.register(Lokasi)
admin.site.register(Meminjam)
admin.site.register(UserProfile)
#
@admin.register(Buku)
@admin.display(ordering='-judul_buku')
class BookModel(admin.ModelAdmin):
    list_filter = ('isbn', 'judul_buku')
    list_display = ('isbn','judul_buku', 'penulis', 'penerbit', 'jumlah_buku','kategori', 'sinopsis', 'gambar', 'no_lokasi' )

