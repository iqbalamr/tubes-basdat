import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavigationBar (){
  return (
	<header className="navbar-container">
		<Navbar className="navbar-a" expand="lg" fixed="top" >
			<Navbar.Brand >
        <NavLink className="home" exact to='/'>
          PRO Libra
        </NavLink>
      </Navbar.Brand>
			<Navbar.Toggle className="toggle-button" aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className="menus">
            <NavLink className="menu"  exact to="/showbook" >Show Book</NavLink>
          </div>
          <div className="menus">
            <Nav.Link className="menu"  href="#link">Borrow</Nav.Link>
          </div>
          <div className="menus">
            <Nav.Link className="menu"  href="#link">Manage Book</Nav.Link>
          </div>
          <div className="menus">
            <Nav.Link className="menu"  href="#link">Our Team</Nav.Link>
          </div>
        </Nav>
			</Navbar.Collapse>
		</Navbar>
	</header>
	);
}

export default withRouter(NavigationBar);