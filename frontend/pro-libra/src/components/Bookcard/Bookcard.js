import React from 'react';

import Card from 'react-bootstrap/Card';
import ShortenText from '../UI/Shortentext';
import Pictures from '../../assets/Images/test.jpg';
import './Bookcard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Booklists(props) {
  const text =
  "Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  
  return(
    <Card className="cards">
      <Card.Img className="book-picture" src={Pictures}/>
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
          <div>
            <label>
              <h4>Synopsis:</h4>
            </label>{" "}
            <ShortenText className="paragraph" text={text}/>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Booklists;