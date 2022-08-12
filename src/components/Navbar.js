import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar-name'>
        Tom's Coffee Brewery
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
