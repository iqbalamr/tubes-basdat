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
import {Link, Switch} from 'react-router-dom';
import RouteWithSubRoutes from '../../../utils/RouteWithSubRoutes';
// import '../AddBook/AddBook.css';
import AddBook from '../AddBook/AddBook';
import BorrowerList from '../BorrowerList/BorrowerList';
import LibraryFines from '../LibraryFines/LibraryFines';
import RemoveBook from '../RemoveBook/RemoveBook';

// import routes from '../../../Routes';

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

const routes = [
    {
      path: '/manage-book/add-book',
      component: AddBook,
    },
    {
      path: '/manage-book/remove-book',
      component: RemoveBook,
    },
    {
      path: '/manage-book/borrower-list',
      component: BorrowerList,
    },
    {
      path: '/manage-book/library-fines',
      component: LibraryFines,
    }
  
];
function ManageBook() {
  return (
    <Container className="container-manage-book" >
    <Row className="main-body" > 
    <Col md={3} xs={12} className="leftbar-add-column" >
      <div className="leftbar-add-menus">
        <ul>
          <div className="leftbar-add-menu">
             
              <Link to="/manage-book/add-book" className="link-menu">
                <h2>
                Add Book
                </h2>
              </Link >
              
          </div>  
          <div className="leftbar-add-menu">
             
              <Link to="/manage-book/remove-book" className="link-menu">
                <h2>Remove Book</h2>
              </Link>
              
          </div>
          <div className="leftbar-add-menu">
             
              <Link to="/manage-book/borrower-list" className="link-menu">
                <h2>Borrower List</h2>
              </Link>
              
          </div>
          <div className="leftbar-add-menu" >
             
              <Link to="/manage-book/library-fines" className="link-menu">
                <h2>Library Fines</h2>
              </Link>
              
          </div>
        </ul>
      </div>  
      </Col>
      <Col md={9} xs={12} className="right-column">
      
      <Switch>
     
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} path={route.path} component={route.component}/>
        ))}
        <div className="temporary-display">
          {/* <h1>Add The New Book...</h1> */}
          {/* <img className="borrow-img"src={BorrowImage} alt="img"/> */}
           <LoginForm/>
        </div>
      </Switch>  
      </Col>
    </Row>
  </Container>
    // <Container>
    //   <Row className="justify-content-md-center main-body">
    //     <Switch>
    //     <Route path="/manage-book" component={AddBook}/>
    //       <div className="login-page">
    //         <LoginForm/>    
    //       </div>
    //       <AddBook/>
    //     </Switch>
        
    //   </Row>
    // </Container>
  )
}

export default ManageBook;
