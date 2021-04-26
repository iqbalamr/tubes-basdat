import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css'
// import Header from '../Pageheader/Header';
import NavigationBar from '../Navbar/Navbar';
import Boooklists from '../Bookcard/Bookcard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout(){
return (
	<Aux>
			<NavigationBar/>
			<div className = "body">
				<Container>
					<Row className="justify-content-md-center">
						<Col md="auto" sm={8}>
								<Boooklists/>  
						</Col>
					</Row>
				</Container> 
			</div>
			  
			<div className = "footer"> Footer</div>
	</Aux>
	);
}

export default Layout;