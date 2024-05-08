import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
      <nav className="navbar">
        <h1>DeezBUUKS</h1>
        <ul>
          <li>
            <NavLink to="/"  activeclassname="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"  activeclassname="active">About</NavLink>
          </li>
        </ul>
      </nav>
    );
  };
export default NavBar;
