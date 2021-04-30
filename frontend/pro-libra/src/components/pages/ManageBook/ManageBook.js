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
import {Link, Route, Switch} from 'react-router-dom';
import AddBook from '../AddBook/AddBook';

function LoginForm (){
  return(
    <div className="login-col">
   <div>
    <h1>Oopps you are not an admin, please login!</h1>
   </div>
   <div className="login-card">
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
            <Link className="login-link" to="/manage-book/add-book" >Login</Link>
        </Button>
      </Card.Body>
      </Card>
   </div>
     </div>
  );
};
function ManageBook() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className="manage-page">
        <Switch>

        </Switch>
        <Route path="/manage-book/add-book" component={AddBook}/>
          <div className="login-page">
            <LoginForm/>    
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ManageBook;
