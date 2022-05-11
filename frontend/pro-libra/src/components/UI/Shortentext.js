import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';

const ShortenText = ({text, length = 50}) => {

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

export default ShortenText;