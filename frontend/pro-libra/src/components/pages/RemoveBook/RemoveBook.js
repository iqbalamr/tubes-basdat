import React from 'react';

import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import './RemoveBook.css';
import Pictures from '../../../assets/Images/test.jpg';
import Card from 'react-bootstrap/Card';

function ShowBook() {
	// const [search,setSearch] = useState("");
  return (
    <>
    <Row className="justify-content-md-center remove-book-row">
      <Col className="title-page"  md={8} >
        <h1>RemoveBook</h1>
      </Col>
      <Col  md={4} >
        <div class="search-bar">
          <div class="form-group">
            <span class="fa fa-search form-control-icon"></span>
            <input type="text" class="form-control" placeholder="Search book..."/>
          </div>  
        </div>
      </Col>
    </Row>
    <Row>
      <Card className="book-cards">
      <div className="book-img">
        <Card.Img className="book-picture" src={Pictures}/>
      </div>
      <Card.Body className="book-detail">
        <Card.Title>
          <h2>Book Title</h2>
        </Card.Title>
        <div>
          <div>
            <label>
              <h4>ISBN:</h4>
            </label>{" "} 119134203294
            {}
          </div>
          <div>
            <label>
              <h4>Writer:</h4>
            </label>{" "} Eliza Maharani Sutowo
            {}
          </div>
          <div>
            <label>
              <h4>Publisher:</h4>
            </label>{" "} ITERA Gemilang
            {}
          </div>
          <div>
            <label>
              <h4>Book Stock:</h4>
            </label>{" "} 100
            {}
          </div>
          <div>
            <label>
              <h4>Category:</h4>
            </label>{" "} Mukbang
              {}
          </div>
        </div>
      </Card.Body>
      <Button 
          className="remove-button" 
          variant="primary">
            Remove
          </Button>
    </Card>
    </Row>
  </>
  )
}
export default ShowBook;