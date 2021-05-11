

export default class APIService {

  static InsertBorrowerForm(body) {

    return fetch (`http://127.0.0.1:8000/api/borrowers/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
							},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static InsertBorrowForm(body) {

    return fetch (`http://127.0.0.1:8000/api/borrow/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static InputServices(body) {

    return fetch (`http://127.0.0.1:8000/api/services/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
				
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static ReturnBook(id_peminjam,isbn,body) {

    return fetch (`http://127.0.0.1:8000/api/return/${id_peminjam}-${isbn}/`, {
      'method': 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static Fines(body) {

    return fetch (`http://127.0.0.1:8000/api/fines/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static DeleteBook(isbn) {

    return fetch (`http://127.0.0.1:8000/api/books/${isbn}/`, {
      'method': 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
    }).then(response => response.json())

  }

  static RecordingBook(body) {

    return fetch (`http://127.0.0.1:8000/api/recording-book/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static Login(body) {

    return fetch (`http://127.0.0.1:8000/auth/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

}
