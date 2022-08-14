import React, { useEffect } from 'react';
import './Services.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='services-container'>
      <h3 data-aos='fade-up' className='about-header'>
        OUR SERVICES
      </h3>
      <div className='bubbles-container'>
        <div className='separator'>
          <div data-aos='fade-up' className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-coffee.png'
              alt='bubble'
            />
          </div>
          <h3 data-aos='fade-up' className='bubbles-text'>
            FINEST COFFEE
          </h3>
        </div>

        <div className='separator'>
          <div data-aos='fade-up' className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-togo.png'
              alt='bubble'
            />
          </div>
          <h3 data-aos='fade-up' className='bubbles-text'>
            COFFEE TO-GO
          </h3>
        </div>

        <div className='separator'>
          <div data-aos='fade-up' className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-online.png'
              alt='bubble'
            />
          </div>
          <h3 data-aos='fade-up' className='bubbles-text'>
            ORDER ONLINE
          </h3>
        </div>

        <div className='separator'>
          <div data-aos='fade-up' className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-terrace.png'
              alt='bubble'
            />
          </div>
          <h3 data-aos='fade-up' className='bubbles-text'>
            CAFE TERRACE
          </h3>
        </div>

        <div className='separator'>
          <div data-aos='fade-up' className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-wifi.png'
              alt='bubble'
            />
          </div>
          <h3 data-aos='fade-up' className='bubbles-text'>
            FREE WI-FI
          </h3>
        </div>

        <div className='separator'>
          <div data-aos='fade-up' className='bubbles-icon-container'>
            <img
              className='bubbles-icon'
              src='./images/bubble-parking.png'
              alt='bubble'
            />
          </div>
          <h3 data-aos='fade-up' className='bubbles-text'>
            FREE PARKING
          </h3>
        </div>
      </div>
    </div>
  );
}
