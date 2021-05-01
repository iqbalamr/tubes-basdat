import React from 'react';
// import {Link, Switch, Route} from 'react-router-dom';
import {
  Col,
  Form, 
  Card,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import RouteWithSubRoutes from '../../../utils/RouteWithSubRoutes';
import './AddBook.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import routes from '../../../Routes';

const AddBook = () => {
  return (
    <Col className="add-book-column">
      <h1>Add book Menu</h1>
      <Card className="form-card">
          <Card.Body>
          <Card.Title >
            <h2>Input New Book Data</h2>
          </Card.Title>
          <div className="borrow-form">
          <Form.Group>
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Book Title
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Book title's" className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2}  className="form-label">
                  ISBN 
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Book ISBN" className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Writer
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Writer’s name" className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Publisher
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Publisher name"  className="input-field"/>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Category
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Book’s category" className="input-field"/>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Location
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Ex : S1L1N001"className="input-field" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Section
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="text" placeholder="Section name" className="input-field"/>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Stock
                </Form.Label>
                <Col className="input-column">
                  <Form.Control size="lg" type="number" placeholder="Stock of the book in shelf" className="input-field"/>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Image
                </Form.Label>
                <Col className="input-column">
                <Form.File 
                  id="custom-file"
                  label="Image of the book"
                  custom
                  className="input-img-field"
                />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                 Synopsis
                </Form.Label>
                <Col className="input-column">
                  <Form.Control as="textarea" rows={8} placeholder="Book's synopsis" className="synopsis-field"/>
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
    </Col>
  )
}



export default AddBook
