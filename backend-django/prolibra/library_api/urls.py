from django.urls import path, include
from .views import BookList, BookDetail, BorrowerList, Borrow, BorrwerReturn, FinesList, ServicesList, Fines, Services, RecordingBook
# book_list, borrower_list

urlpatterns = [
    path('api/books/', BookList.as_view()),
    path('api/books/<str:isbn>/', BookDetail.as_view()),
    path('api/borrowers/', BorrowerList.as_view()),
    path('api/borrow/', Borrow.as_view()),
    path('api/return/<str:id_peminjam>-<str:isbn>/', BorrwerReturn.as_view()),
    path('api/fines/', Fines.as_view()),
    path('api/services/', Services.as_view()),
    path('api/fines-list/', FinesList.as_view()),
    path('api/services-list/', ServicesList.as_view()),
    path('api/recording-book/', RecordingBook.as_view()),
]
