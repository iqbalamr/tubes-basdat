import React from 'react'
import {
  Container,
  Row, 
  Col
} from 'react-bootstrap';
import './ManageBook.css';
import {Link, Switch, Route} from 'react-router-dom';
import AddBook from '../AddBook/AddBook';
import BorrowerList from '../BorrowerList/BorrowerList';
import LibraryFines from '../LibraryFines/LibraryFines';
import RemoveBook from '../RemoveBook/RemoveBook';
import useToken from '../../../utils/useToken';
import Picture from '/home/dhifaf/Documents/tubes-basdat/frontend/pro-libra/src/assets/Images/helloadmin.svg'
function ManageBook() {
 
  // to get the token
  const { token } = useToken();
  console.log(token)

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
            <Route path="/manage-book/add-book" component={AddBook}/>
            <Route path="/manage-book/remove-book" component={RemoveBook}/>
            <Route path="/manage-book/borrower-list" component={BorrowerList}/>
            <Route path="/manage-book/library-fines" component={LibraryFines}/>
            <div className="temporary-display">
              <h1>Welcome Home Admin! Hope You Have a Great Day</h1>
              <br/>
              <img alt="hello-admin" src={Picture} className="hello-admin-pic"/>
            </div>
          </Switch>  
        </Col>
      </Row>
    </Container>

  )

};

export default ManageBook;
