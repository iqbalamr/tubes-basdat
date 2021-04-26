import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css'
// import Header from '../Pageheader/Header';
import NavigationBar from '../Navbar/Navbar';
// import Body from '../Body/BodyOfMainPage';


function Layout(){
return (
	<Aux>
			<NavigationBar/>
			<div className = "body">
					Body    
			</div>    
			<div className = "footer"> Footer</div>
	</Aux>
	);
}

export default Layout;