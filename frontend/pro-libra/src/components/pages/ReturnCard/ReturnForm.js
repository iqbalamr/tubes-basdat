import React from 'react';
import {
  Col,
  Form, 
  Card,
  Button
} from 'react-bootstrap';

const ReturnForm =() => {
  return (
    <>
      <h1>Kindly Return The Book Please</h1>
      <Card className="form-card">
          <Card.Body>
          <Card.Title >
            <h2>Return Form</h2>
          </Card.Title>
          <div className="borrow-form">
          <Form.Group>
              
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Id Number
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Your id..." className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                 ISBN of The Book
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="ISBN of The Book you want to borrow ...  " className="input-field"/>
                </Col>
              </Form.Row>
              <br />
            </Form.Group>  
          </div>  
          <Button 
          className="submit-button" 
          variant="primary">
            Submit
          </Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default ReturnForm;
