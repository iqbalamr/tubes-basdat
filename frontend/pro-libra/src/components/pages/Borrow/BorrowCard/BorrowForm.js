import React from 'react';
import {
  Col,
  Form, 
  Card,
  Button
} from 'react-bootstrap';
import './BorrowForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Borrow from'../Borrow';

const BorrowForm = () => {
  return( 
    <>
      <h1>Read At Home, Just Borrow It</h1>
      <Card className="form-card">
          <Card.Body>
          <Card.Title >
            <h2>Borrow Form</h2>
          </Card.Title>
          <div className="borrow-form">
          <Form.Group>
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  First Name 
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="First name..." className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2}  className="form-label">
                  Last Name   
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Last name..." className="input-field" />
                </Col>
              </Form.Row>
              <br />
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
                 NIM/NIP
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Your NIM/NIP..."  className="input-field"/>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Department
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Your department ..." className="input-field"/>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Phone Number
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="number" placeholder="0819xxxxxxxx"className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Address
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Your address..." className="input-field"/>
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
          <h3>Note : Because the limitation of our book stock, 
            you only can borrow just one book right now. 
            Sorry for the inconvenience.
          </h3>
          <Button 
          className="submit-button" 
          variant="primary">
            Submit
          </Button>
          </Card.Body>
        </Card>
        </>       
  );
};

export default BorrowForm;