from django.urls import path, include
from .views import BookList, BookDetail, BorrowerList, Borrow, BorrwerReturn, FinesList, ServicesList
# book_list, borrower_list

urlpatterns = [
    path('api/books/', BookList.as_view()),
    path('api/books/<str:judul_buku>/', BookDetail.as_view()),
    path('api/borrowers/', BorrowerList.as_view()),
    path('api/borrow/', Borrow.as_view()),
    path('api/return/<str:id_peminjam>-<str:isbn>/', BorrwerReturn.as_view()),
    path('api/fines/', FinesList.as_view()),
    path('api/services/', ServicesList.as_view())
]
