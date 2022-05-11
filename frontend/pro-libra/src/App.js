import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import ShowBook from './components/pages/ShowBook/ShowBook';
import Borrow from './components/pages/Borrow/Borrow';
import ManageBook from './components/pages/ManageBook/ManageBook';
import LoginForm from './components/pages/LoginForm/LoginForm';
import OurTeam from './components/pages/OurTeam/OurTeam';
import Footer from './components/Footer/Footer';
import {CookiesProvider} from 'react-cookie';
import useToken from './utils/useToken';

function App(){

  const { token, setToken } = useToken();
 
  function CheckIfAuth(){
    if(!token) {
      return <LoginForm setToken={setToken} />
    }
    return <ManageBook/>
    
  }
  
  return (

    <>
      <Router basename="/">
        <Navbar/>
        <CookiesProvider>
        <Switch >
          <Route path="/showbook">
            <ShowBook/>
          </Route>
          <Route path="/borrow">
            <Borrow/>
          </Route>
          <Route path="/manage-book">
            <CheckIfAuth/>
          </Route>
          <Route path="/our-team">
            <OurTeam/>
          </Route>
          <Home/>
        </Switch>
        </CookiesProvider>
      </Router>  
      <Footer/>
    </>
  
  );

};

export default App;
