import React from 'react';
import {
  Container,
  Row,
  Col,
  Form, 
  Card
} from 'react-bootstrap';
import './Borrow.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Borrow() {
  return( 
    <Container>
      <Row className="borrow-body">
        <Col md={2} xs={12} >Menu Kir</Col>
        <Col md={10} xs={12} className="borrow-form-column">
        <Card >
          <Card.Body>
          <Card.Title className="form-title">
            <h1>Book Title</h1>
          </Card.Title>
          <div className="borrow-form">
          <Form.Group>
              <Form.Row>
                <Form.Label column lg={2}>
                  Large Text
                </Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Large text" className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2}>
                  Large Text
                </Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Large text" className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2}>
                  Large Text
                </Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Large text" className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2}>
                  Large Text
                </Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Large text"  className="input-field"/>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2}>
                  Large Text
                </Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Large text" className="input-field"/>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2}>
                  Large Text
                </Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Large text"className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2}>
                  Large Text
                </Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Large text" className="input-field"/>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2}>
                  Large Text
                </Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Large text" className="input-field"/>
                </Col>
              </Form.Row>
              <br />
            </Form.Group>  
          </div>  
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Borrow;