import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Navbar/Navbar.css';
import App from './App';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ShowBook from './components/pages/ShowBook/ShowBook';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/showbook" component={ShowBook}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
