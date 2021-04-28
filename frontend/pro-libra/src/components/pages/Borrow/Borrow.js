import React from 'react'
import {Link, Route} from 'react-router-dom'
import './Borrow.css';
import BorrowForm from './BorrowCard/BorrowForm';

function Borrow() {
  return (
    <>
    <div className="left-bar-menu">
      <ul>
        <li>
          <Link to="/borrow/borrow-form">Borrow</Link>
        </li>
        <li>
          <Link to="/borrow/return-form">Return</Link>
        </li>
      </ul>
    </div>
    <Route path="borrow/borrow-form" component={BorrowForm}/>
    {/* <Route path="borrow/return-form" component={ReturnForm}/> */}
    </>
  )
}

export default Borrow
