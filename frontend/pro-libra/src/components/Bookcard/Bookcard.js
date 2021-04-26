import React, {useState} from 'react';
import './Bookcard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pictures from '../../assets/Images/test.jpg'

function Booklists(props) {
  const text =
  "Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const ShortenedText = ({text, length = 50}) => {
    const [shortenText, setShortenText] = useState(true);
  
    if (text.split(' ').length < length) {
      return <p>{text}</p>;
    }
    const len =text.split(' ').length;
    return(
      <div>
        <p>
          {shortenText ? `${text.slice(0, 100)}....` : text  }
        </p>
        <Button className="more-button" 
        onClick = {() => setShortenText(!shortenText) } 
        variant="primary">
        &nbsp; {shortenText ? "More Detail" : "Less" }
        </Button>
        <p className="word-counter">({len} words)</p>
      </div>
    );
  };
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
            </label>{" "}
            {}
          </div>
          <div>
            <label>
              <h4>Writer:</h4>
            </label>{" "}
            {}
          </div>
          <div>
            <label>
              <h4>Publisher:</h4>
            </label>{" "}
            {}
          </div>
          <div>
            <label>
              <h4>Book Stock:</h4>
            </label>{" "}
            {}
          </div>
          <div>
            <label>
              <h4>Category:</h4>
            </label>{" "}
              {}
          </div>
          <div>
            <label>
              <h4>Synopsis:</h4>
            </label>{" "}
            <ShortenedText text={text}/>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Booklists;