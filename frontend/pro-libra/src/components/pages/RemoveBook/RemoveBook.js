import React, {useState, useEffect} from 'react';

import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import './RemoveBook.css';
// import Pictures from '../../../assets/Images/test.jpg';
import Card from 'react-bootstrap/Card';
import APIService from '../../../APIService';

function ShowBook() {
	// const [search,setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
	
	const [books, setBooks] = useState([]);

  const [isbn, setisbn] = useState("");
	
	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/books', {
			'method': 'GET',
			headers: {
				'Authorization': 'Token 915cb9e6ca7f5996fc3a8f1bd9929e3527a38814'
			}
		})
		.then((response)=> response.json())
		.then((json) => setBooks(json))
		.catch(err => console.log(err))
	}, [])

	const [data, setData] = useState(books);	
	
	const excludeColumns = ["sinopsis", "jumlah_buku","penulis", "penerbit", "kategori", "no_lokasi", "gambar"];	

	const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

	const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(books);
    else {
      const filteredData = books.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

  function deleteBook  (isbn) {
    APIService.DeleteBook(isbn)
    .then(response => console.log(response))
  };

  console.log(isbn);
  const handleISBN = isbn => ev => {
    setisbn(isbn)
    setTimeout(() => {deleteBook(isbn)},500)
    setTimeout(() => {refreshPage()},1000);
  };

  function refreshPage() {
    window.location.reload(false);
  };

	const SecondData = () => {
		return (
			<>
			{data.map(({judul_buku, isbn, penulis, penerbit, jumlah_buku, kategori, no_lokasi, sinopsis, gambar}) => {
				return (
					<Card className="book-cards">
            <div className="book-img">
              <Card.Img className="book-picture" src={'http://127.0.0.1:8000' + gambar}/>
            </div>
            <Card.Body className="book-detail">
              <Card.Title>
                <h2>{judul_buku}</h2>
              </Card.Title>
              <div>
                <div>
                  <label>
                    <h4>ISBN:</h4>
                  </label>{" "}
                  {isbn}
                </div>
                <div>
                  <label>
                    <h4>Writer:</h4>
                  </label>{" "}
                  {penulis}
                </div>
                <div>
                  <label>
                    <h4>Publisher:</h4>
                  </label>{" "}
                  {penerbit}
                </div>
                <div>
                  <label>
                    <h4>Book Stock:</h4>
                  </label>{" "}
                  {jumlah_buku}
                </div>
                <div>
                  <label>
                    <h4>Category:</h4>
                  </label>{" "}
                    {kategori}
                </div>
                <div>
                  <label>
                    <h4>Lokasi:</h4>
                  </label>{" "}
                    {no_lokasi}
                </div>
                <div>
                  <label>
                    <h4>Sinopsis:</h4>
                  </label>{" "}
                    {sinopsis}
                </div>
              </div>
            </Card.Body>
            <Button 
              className="remove-button" 
              variant="primary"
              // onClick={
              //   deleteBook(isbn)
              // }
              onClick={
                handleISBN(isbn)
              }
            >
                  Remove
                </Button>
          </Card>
				);
			})}
			{data.length === 0 && <h1 className="alert">No records found to display!</h1>}
			</>
		);
	}
	const  FirstData = () => {
		return (
		books.map(({judul_buku, isbn, penulis, penerbit, jumlah_buku, kategori, no_lokasi, sinopsis, gambar}) => {
				return (
					<Card className="book-cards">
            <div className="book-img">
              <Card.Img className="book-picture" src={'http://127.0.0.1:8000' + gambar}/>
            </div>
            <Card.Body className="book-detail">
              <Card.Title>
                <h2>{judul_buku}</h2>
              </Card.Title>
              <div>
                <div>
                  <label>
                    <h4>ISBN:</h4>
                  </label>{" "}
                  {isbn}
                </div>
                <div>
                  <label>
                    <h4>Writer:</h4>
                  </label>{" "}
                  {penulis}
                </div>
                <div>
                  <label>
                    <h4>Publisher:</h4>
                  </label>{" "}
                  {penerbit}
                </div>
                <div>
                  <label>
                    <h4>Book Stock:</h4>
                  </label>{" "}
                  {jumlah_buku}
                </div>
                <div>
                  <label>
                    <h4>Category:</h4>
                  </label>{" "}
                    {kategori}
                </div>
                <div>
                  <label>
                    <h4>Lokasi:</h4>
                  </label>{" "}
                    {no_lokasi}
                </div>
                <div>
                  <label>
                    <h4>Sinopsis:</h4>
                  </label>{" "}
                    {sinopsis}
                </div>
              </div>
            </Card.Body>
            <Button 
              className="remove-button" 
              variant="primary"
              // onClick={
              //   deleteBook(isbn)
              // }
              onClick={
                handleISBN(isbn)
              }
            >
                  Remove
                </Button>
          </Card>
				
				);
			})
		);
	};

  function BooksCards(props){
		const isTexted = props.isTexted;
		if (isTexted==="") {
			    return <FirstData />;  
			}  
		return <SecondData />;
		};

  return (
    <>
    <Row className="justify-content-md-center remove-book-title">
      <Col className="title-page"  md={8} >
        <h1>RemoveBook</h1>
      </Col>
      <Col  md={4} >
        <div class="search-bar">
          <div class="form-group">
            <span class="fa fa-search form-control-icon"></span>
            <input 
              type="text" 
              class="form-control" 
              placeholder="Search book by title or isbn..." 
              value={searchText}
              onChange={e => handleChange(e.target.value)}/>
          </div>  
        </div>
      </Col>
    </Row>
    <Col className="remove-book-column">
    <Row className="remove-book-row">
      <BooksCards isTexted={searchText}/>
    </Row>
    </Col>
  </>
  )
}
export default ShowBook;