import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-name'>Tom's Coffee Brewery</div>
      <div className='navbar-links'>
        <div className='link'>Home</div>
        <div className='link'>Menu</div>
        <div className='link'>About</div>
        <div className='link'>Contact</div>
      </div>
    </div>
  );
}
