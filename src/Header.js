// Imports
import SVR from './assets/abcd.png';
import * as React from "react";
import { Link } from "react-router-dom";
import './App.css';

// Body
const Header = () =>{

    return(

        <div className="Header Header-continued">

        <div className="left">
          <img src={SVR} className="logo-img" alt="LOGO"/><Link to="/">.</Link>
        </div>
  
  
        <div className="centre">
          <div className="navbar">
          <ul className="nav-list">
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/order"> Book a Table</Link></li>
            <li><Link to="/order"> Order Now </Link></li>
            <li><Link to="/order"> Contact</Link></li>
            <li><Link to="/order"> Login</Link></li>
            <li><input type="text" name="search" placeholder="Search.."></input></li>
          </ul>
        </div>
        </div>
      </div>

    );
}

// Exports
export default Header;