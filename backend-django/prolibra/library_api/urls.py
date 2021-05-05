from django.urls import path, include
from .views import BookList, BookDetail, BorrowerList, Borrow, BorrwerReturn, FinesList, ServicesList
# book_list, borrower_list

urlpatterns = [
    path('books/', BookList.as_view()),
    path('books/<str:judul_buku>/', BookDetail.as_view()),
    path('borrowers/', BorrowerList.as_view()),
    path('borrow/', Borrow.as_view()),
    path('return/<str:id_peminjam>-<str:isbn>/', BorrwerReturn.as_view()),
    path('fines/', FinesList.as_view()),
    path('services/', ServicesList.as_view())
]
