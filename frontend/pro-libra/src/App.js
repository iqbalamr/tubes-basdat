import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import routes from './Routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';

function App() {
  return (
    <Router basename="/home">
      <Navbar/>
      <Switch >
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </Switch>
    </Router>  
  );
}

export default App;