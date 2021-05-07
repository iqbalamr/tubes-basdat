import React, {useState, useEffect} from 'react';
import BoookCard from '../../Bookcard/Bookcard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ShowBook.css';

// import Pictures from '../../../assets/Images/test.jpg';

function ShowBook() {
	const [searchText, setSearchText] = useState("");
	
	const [books, setBooks] = useState([]);
	

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/books', {
			'method': 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 915cb9e6ca7f5996fc3a8f1bd9929e3527a38814'
			}
		})
		.then((response)=> response.json())
		.then((json) => setBooks(json))
		.catch(err => console.log(err))
	}, [])

	const [data, setData] = useState(books);	
	
	const excludeColumns = ["sinopsis", "jumlah_buku"];	

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

	const SecondData = () => {
		return (
			<>
			{data.map((book) => {
				return (
					<BoookCard 
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
			{data.length === 0 && <span>No records found to display!</span>}
			</>
		);
	}
	const  FirstData = () => {
		return (
			books.map((book) => {
				return (
					<BoookCard 
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
	}
	function BooksCards(props){
		const isTexted = props.isTexted;
		if (isTexted==="") {
			    return <FirstData />;  
			}  
		return <SecondData />;
		}
	

  return (
    <div className = "page-showbook">
				<Container className="container">
					<Row className="justify-content-md-center ">
						<Col className="title-page"  md={8}>
							<h1>List of Book In Our Library</h1>
						</Col>
						<Col md={4} >
						<div class="search-bar">
							<div class="form-group">
								<span class="fa fa-search form-control-icon"></span>
								<input 
									type="text"
								  className="form-control" 
									placeholder="Search book..."
									value={searchText}
        					onChange={e => handleChange(e.target.value)}
								/>
							</div>  
						</div>
						</Col>
					</Row>
					<Row className="justify-content-md-center showbook-row">
						<Col className="body-content"md="auto">
							<BooksCards isTexted={searchText}/>
						</Col>
					</Row>
				</Container> 
			</div> 
  )
}
export default ShowBook;