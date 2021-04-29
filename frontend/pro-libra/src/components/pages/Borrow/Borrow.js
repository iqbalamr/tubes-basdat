import React from 'react'
import {Link, Switch} from 'react-router-dom';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import './Borrow.css';
import './BorrowCard/BorrowForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteWithSubRoutes from '../../../utils/RouteWithSubRoutes'

const Borrow = ({routes})=> {
  return (

    <Container>
    <Row className="borrow-body"> 
    <Col md={3} xs={12} className="leftbar-menu" >
      <div className="left-bar-menus">
          <ul>
            <div className="left-bar-menu">
            <li>
              <Link to="/borrow/borrow-form">
                <h2>
                Borrow
                </h2>
              </Link>
            </li>
            </div>
            <div className="left-bar-menu">
            <li >
              <Link to="/borrow/return-form">
                <h2>Return</h2>
              </Link>
            </li>
            </div>
          </ul>
        </div>  
      </Col>
      <Col md={9} xs={12} className="borrow-form-column">
      <Switch>
    {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
    ))}
    </Switch>  
      </Col>
    </Row>
  </Container>
  
  )
}

export default Borrow;
