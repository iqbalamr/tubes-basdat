import React,{useState} from 'react';
import BoookCard from '../../Bookcard/Bookcard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ShowBook.css';


function ShowBook() {
	const [search,setSearch] = useState("");
  return (
    <div className = "page-showbook">
				<Container className="container">
					<Row className="justify-content-md-center">
					<div className="head-showbook">
						<Col className="title-page"  xs={12} md={8}>
							<h1>List of Book In Our Library</h1>
						</Col>
						<Col md="auto" xs={12} md={4}>
						<div class="search-bar">
							<div class="form-group">
								<span class="fa fa-search form-control-icon"></span>
								<input type="text" class="form-control" placeholder="Search book..."/>
							</div>  
						</div>
						</Col>
					</div>
					</Row>
					<Row className="justify-content-md-center">
						<Col className="body-content"md="auto" sm={12}>
							<div className="showbook-card">
								<BoookCard />  
							</div>	
						</Col>
					</Row>
				</Container> 
			</div> 
  )
}
export default ShowBook;