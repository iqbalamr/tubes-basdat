from django.urls import path, include
from .views import book_list, borrower_list

urlpatterns = [
    path('books', book_list),
    path('borrowers', borrower_list),
]
