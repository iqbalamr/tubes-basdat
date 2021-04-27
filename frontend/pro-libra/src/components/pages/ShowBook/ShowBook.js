import React from 'react';
import BoookCard from '../../Bookcard/Bookcard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ShowBook.css';


const ShowBook = () => {

  return (
    <div className = "body">
				<Container>
					<Row className="justify-content-md-center">
						<Col md="auto" sm={12}>
								<BoookCard/>  
						</Col>
					</Row>
				</Container> 
			</div> 
  )
}
export default ShowBook;