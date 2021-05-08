import React, {useState, useEffect} from 'react';

import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import './RemoveBook.css';
// import Pictures from '../../../assets/Images/test.jpg';
import Card from 'react-bootstrap/Card';

function ShowBook() {
	// const [search,setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
	
	const [books, setBooks] = useState([]);
	

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

  const BoookCardRemover = (props) => {
    return(
      <Card className="book-cards">
      <div className="book-img">
        <Card.Img className="book-picture" src={props.pictures}/>
      </div>
      <Card.Body className="book-detail">
        <Card.Title>
          <h2>{props.title}</h2>
        </Card.Title>
        <div>
          <div>
            <label>
              <h4>ISBN:</h4>
            </label>{" "}
            {props.isbn}
          </div>
          <div>
            <label>
              <h4>Writer:</h4>
            </label>{" "}
            {props.writer}
          </div>
          <div>
            <label>
              <h4>Publisher:</h4>
            </label>{" "}
            {props.publisher}
          </div>
          <div>
            <label>
              <h4>Book Stock:</h4>
            </label>{" "}
            {props.stock}
          </div>
          <div>
            <label>
              <h4>Category:</h4>
            </label>{" "}
              {props.category}
          </div>
          <div>
            <label>
              <h4>Lokasi:</h4>
            </label>{" "}
              {props.location}
          </div>
          <div>
            <label>
              <h4>Sinopsis:</h4>
            </label>{" "}
              {props.text}
          </div>
        </div>
      </Card.Body>
      <Button 
          className="remove-button" 
          variant="primary">
            Remove
          </Button>
    </Card>
    );
  };

	const SecondData = () => {
		return (
			<>
			{data.map((book) => {
				return (
					<BoookCardRemover 
					pictures= {'http://127.0.0.1:8000' + book.gambar}
					title= {book.judul_buku}
					isbn= {book.isbn}
					writer= {book.penulis}
					publisher= {book.penerbit}
					stock={book.jumlah_buku}
					category={book.kategori}
					location={book.no_lokasi}
					text={book.sinopsis}
				/>  
				);
			})}
			{data.length === 0 && <h1 className="alert">No records found to display!</h1>}
			</>
		);
	}
	const  FirstData = () => {
		return (
			books.map((book) => {
				return (
					<BoookCardRemover 
					pictures= {'http://127.0.0.1:8000' + book.gambar}
					title= {book.judul_buku}
					isbn= {book.isbn}
					writer= {book.penulis}
					publisher= {book.penerbit}
					stock={book.jumlah_buku}
					category={book.kategori}
					location={book.no_lokasi}
					text={book.sinopsis}
				/>  
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
    <Row className="remove-book-row">
      <BooksCards isTexted={searchText}/>
    </Row>
  </>
  )
}
export default ShowBook;