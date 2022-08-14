import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <div className='services-container'>
      <h3 className='about-header'>OUR SERVICES</h3>
      <div className='bubbles-container'>
        <div className='separator'>
          <div className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-coffee.png'
              alt='bubble'
            />
          </div>
          <h3 className='bubbles-text'>FINEST COFFEE</h3>
        </div>

        <div className='separator'>
          <div className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-togo.png'
              alt='bubble'
            />
          </div>
          <h3 className='bubbles-text'>COFFEE TO-GO</h3>
        </div>

        <div className='separator'>
          <div className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-online.png'
              alt='bubble'
            />
          </div>
          <h3 className='bubbles-text'>ORDER ONLINE</h3>
        </div>

        <div className='separator'>
          <div className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-terrace.png'
              alt='bubble'
            />
          </div>
          <h3 className='bubbles-text'>CAFE TERRACE</h3>
        </div>

        <div className='separator'>
          <div className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-wifi.png'
              alt='bubble'
            />
          </div>
          <h3 className='bubbles-text'>FREE WI-FI</h3>
        </div>

        <div className='separator'>
          <div className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-parking.png'
              alt='bubble'
            />
          </div>
          <h3 className='bubbles-text'>FREE PARKING</h3>
        </div>
      </div>
    </div>
  );
}
