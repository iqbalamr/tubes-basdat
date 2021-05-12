import React from 'react'
import './Home.css';
import ImageWellcome from '/home/dhifaf/Documents/tubes-basdat/frontend/pro-libra/src/assets/Images/wellcome.svg';

const Home = () =>{
  
  return(

    <div className="body">
      <h1>Welcome!</h1>
      <h1>To Our Library, PRO Libra!</h1>  
      <div className="image-container">
        <img src={ImageWellcome} alt="img"/>
      </div>
    </div>
  
  );

};

export default Home;
