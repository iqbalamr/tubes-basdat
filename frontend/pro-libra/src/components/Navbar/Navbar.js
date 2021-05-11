import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavigationBar (){
  
  return (
	<header className="navbar-container">
		<Navbar className="navbar-a" expand="lg" fixed="top" >
			<Navbar.Brand >
        <Link className="home" exact to='/home'>
          PRO Libra
        </Link>
      </Navbar.Brand>
			<Navbar.Toggle className="toggle-button" aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className="menus">
            <Link className="menu"  to="/showbook" >Show Book</Link>
          </div>
          <div className="menus">
            <Link className="menu"  to="/borrow">Borrow</Link>
          </div>
          <div className="menus">
            <Link className="menu"  to="/manage-book">Manage Book</Link>
          </div>
          <div className="menus">
            <Link className="menu"  to="/our-team">Our Team</Link>
          </div>
        </Nav>
			</Navbar.Collapse>
		</Navbar>
	</header>
	);
}

export default withRouter(NavigationBar);