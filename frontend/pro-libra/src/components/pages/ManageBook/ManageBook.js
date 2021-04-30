import React from 'react'
import {
  Form,
  Button,
  Card,
  Container,
  Row, 
  Col
} from 'react-bootstrap';
import './ManageBook.css';
const LoginForm = () => {
  return(
    <Card className="form-login-card">
    <Card.Body>
    <Card.Title >
      <h2>Admin Login</h2>
    </Card.Title>
    <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label className="login-label">Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" className="input-field"/>
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label className="login-label" >Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="input-field" />
        </Form.Group>
      </Form>
        <Button 
          className="login-button" 
          variant="primary">
            Login
        </Button>
      </Card.Body>
      </Card>
     
  );
};
function ManageBook() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className="login-col">
        <h1>Oopps you are not an admin, please login!</h1>
        <div className="login-page">
          <LoginForm/>    
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ManageBook;
