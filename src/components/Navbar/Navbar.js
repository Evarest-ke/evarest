import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="header-container">
      <div className="logo">
        <h1><i class="fa-solid fa-bars"></i>varest</h1>
        </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
