import React from 'react';
import BoookCard from '../../Bookcard/Bookcard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ShowBook.css';


function ShowBook() {
	// const [search,setSearch] = useState("");
  return (
    <div className = "page-showbook">
				<Container className="container">
					<Row className="justify-content-md-center showbook-row">
						<Col className="title-page"  md={8}>
							<h1>List of Book In Our Library</h1>
						</Col>
						<Col md={4} >
						<div class="search-bar">
							<div class="form-group">
								<span class="fa fa-search form-control-icon"></span>
								<input type="text" class="form-control" placeholder="Search book..."/>
							</div>  
						</div>
						</Col>
					</Row>
					<Row className="justify-content-md-center showbook-row">
						<Col className="body-content"md="auto">
								<BoookCard />  
						</Col>
					</Row>
				</Container> 
			</div> 
  )
}
export default ShowBook;