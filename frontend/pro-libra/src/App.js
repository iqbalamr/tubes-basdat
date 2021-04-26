import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Layout from './components/Layout/Layout';

import './App.css';

function App() {
  return (
    <Router>
      <div className="main">
        <Layout/> 
      </div>
    </Router>
    
  );
}

export default App;