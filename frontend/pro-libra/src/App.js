import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ShowBook from './components/pages/ShowBook/ShowBook';
import BorrowForm from './components/pages/Borrow/BorrowCard/BorrowForm';
import OurTeam from './components/pages/OurTeam/OurTeam';
import ManageBook from './components/pages/ManageBook/ManageBook';
const Home = () =>{
  <div className="body">
      Home
      <div className = "footer">Footer</div>
    </div>
};
function App() {
  return (
    <Router basename="/">
      <Navbar/>
      <Switch >
        <Route exact path="/" component={Home}/>
        <Route path="/showbook" component={ShowBook} />
        <Route path="/borrow" component={BorrowForm}/>
        <Route path="/manage-book" component={ManageBook}/>
        <Route path="/our-team" component={OurTeam}/>
      </Switch>
    </Router>
    
  );
}

export default App;