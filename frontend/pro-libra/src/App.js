import React,{useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import routes from './Routes';
// import RouteWithSubRoutes from './utils/RouteWithSubRoutes';
import Home from './components/pages/Home/Home';
import ShowBook from './components/pages/ShowBook/ShowBook';
import Borrow from './components/pages/Borrow/Borrow';
import ManageBook from './components/pages/ManageBook/ManageBook';
import Login from './components/pages/ManageBook/LoginForm';
import OurTeam from './components/pages/OurTeam/OurTeam';
import {CookiesProvider} from 'react-cookie';
import ProtectedRoute from './utils/ProtectedRoute';
function App() {
 
  return (
    <Router basename="/">
      <Navbar/>
      <CookiesProvider>
      <Switch >
        {/* {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))} */}
        <Route path="/showbook">
          <ShowBook/>
        </Route>
        <Route path="/borrow">
          <Borrow/>
        </Route>
        {/* <Route path="/login">
          <Login/>
        </Route> */}
        <Route path="/manage-book" component={ManageBook} /> 
        <Route path="/our-team">
          <OurTeam/>
        </Route>
        <Home/>
      </Switch>
      </CookiesProvider>
    </Router>  
  );
}

export default App;
