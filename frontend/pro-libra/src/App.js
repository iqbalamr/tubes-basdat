import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import routes from './Routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';
import Home from './components/pages/Home/Home';
function App() {
  return (
    <Router >
      <Navbar/>
      <Switch >
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
        <Home/>
      </Switch>
    </Router>  
  );
}

export default App;