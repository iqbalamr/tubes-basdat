import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Navbar/Navbar.css';
import App from './App';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ShowBook from './components/pages/ShowBook/ShowBook';
import Borrow from './components/pages/Borrow/Borrow';
import reportWebVitals from './reportWebVitals';
import OurTeam from './components/pages/OurTeam/OurTeam';
import ManageBook from './components/pages/ManageBook/ManageBook';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <Navbar/>
      <Switch >
        <Route exact path="/" component={App}/>
        <Route path="/showbook" component={ShowBook} />
        <Route path="/borrow" component={Borrow}/>
        <Route path="/manage-book" component={ManageBook}/>
        <Route path="/our-team" component={OurTeam}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
