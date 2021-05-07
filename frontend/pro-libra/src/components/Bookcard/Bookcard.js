import React from 'react';

import Card from 'react-bootstrap/Card';
import ShortenText from '../UI/Shortentext';

import './Bookcard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Booklists(props) {
  
  return(
    <Card className="book-cards">
      <div >
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
              <h4>Synopsis:</h4>
            </label>{" "}
            <ShortenText className="paragraph" text={props.text}/>
          </div>
        </div>
      </Card.Body>
      </div>
    </Card>
  );
}

export default Booklists;