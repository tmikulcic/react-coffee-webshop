import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar-name'>
        <img className='logo' src='./images/coffee-logo.png' alt='logo' />
        <h1 className='logo-header'>Tom's Coffee Brewery</h1>
      </Link>
      <div className='navbar-links'>
        <Link to='/' className='link'>
          Home
        </Link>
        <Link to='/menu' className='link'>
          Menu
        </Link>
        <Link to='/about' className='link'>
          About
        </Link>
        <Link to='/contact' className='link'>
          Contact
        </Link>
      </div>
    </div>
  );
}
