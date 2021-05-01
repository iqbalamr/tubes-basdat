import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RemoveBook.css';
import Pictures from '../../../assets/Images/test.jpg';
import Card from 'react-bootstrap/Card';

function ShowBook() {
	// const [search,setSearch] = useState("");
  return (
    <>
    <Row>
      <Col>
      <h1>RemoveBook</h1>
      </Col>
      <Col>
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
    </Card>
    </Row>
  </>
  )
}
export default ShowBook;