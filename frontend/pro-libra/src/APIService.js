

export default class APIService {

  static InsertBorrowerForm(body) {

    return fetch (`https://f7505cc43e45.ngrok.io/api/borrowers/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static InsertBorrowForm(body) {

    return fetch (`https://f7505cc43e45.ngrok.io/api/borrow/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static InputServices(body) {

    return fetch (`https://f7505cc43e45.ngrok.io/api/services/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
				
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static ReturnBook(id_peminjam,isbn,body) {

    return fetch (`https://f7505cc43e45.ngrok.io/api/return/${id_peminjam}-${isbn}/`, {
      'method': 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static Fines(body) {

    return fetch (`https://f7505cc43e45.ngrok.io/api/fines/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

  static DeleteBook(isbn,token) {

    return fetch (`https://f7505cc43e45.ngrok.io/api/books/${isbn}/`, {
      'method': 'DELETE',
			headers: {
				'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
			},
    }).then(response => response.json())

  }

  static RecordingBook(body) {

    return fetch (`https://f7505cc43e45.ngrok.io/api/recording-book/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(body)
    }).then(response => response.json())

  }

}
