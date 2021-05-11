import React from 'react'
import {
  Container,
  Row, 
  Col
} from 'react-bootstrap';
import './ManageBook.css';
import {Link, Switch, Route} from 'react-router-dom';
import RouteWithSubRoutes from '../../../utils/RouteWithSubRoutes';
// import '../AddBook/AddBook.css';
import AddBook from '../AddBook/AddBook';
import BorrowerList from '../BorrowerList/BorrowerList';
import LibraryFines from '../LibraryFines/LibraryFines';
import RemoveBook from '../RemoveBook/RemoveBook';
import LoginForm from './LoginForm';
// import {CookiesProvider} from 'react-cookie';
import useToken from './useToken';

// import routes from '../../../Routes';



// const routes = [
//     {
//       path: '/manage-book/add-book',
//       component: AddBook,
//     },
//     {
//       path: '/manage-book/remove-book',
//       component: RemoveBook,
//     },
//     {
//       path: '/manage-book/borrower-list',
//       component: BorrowerList,
//     },
//     {
//       path: '/manage-book/library-fines',
//       component: LibraryFines,
//     }
  
// ];

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function ManageBook() {
 
  // const { token, setToken } = useToken();
 
  if(!token) {
    return <LoginForm setToken={setToken} />
  }
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
      {/* <CookiesProvider> */}
      <Switch>
     
        {/* {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} path={route.path} component={route.component}/>
        ))} */}
        <Route path="/manage-book/add-book" component={AddBook}/>
        <Route path="/manage-book/remove-book" component={RemoveBook}/>
        <Route path="/manage-book/borrower-list" component={BorrowerList}/>
        <Route path="/manage-book/library-fines" component={LibraryFines}/>
        <div className="temporary-display">
          {/* <h1>Add The New Book...</h1> */}
          {/* <img className="borrow-img"src={BorrowImage} alt="img"/> */}
           {/* <LoginForm/> */}
           <h1>Wellcome Home Admin! Hope You Have a Great Day</h1>
        </div>
      </Switch>  
      {/* </CookiesProvider> */}
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
