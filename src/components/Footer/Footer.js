import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='motivational'>
        <h1 className='logo-header' style={{ color: '#d4af37' }}>
          Tom's Coffee Brewery
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          voluptates sequi perspiciatis saepe debitis nobis rerum, laborum
          error? Laboriosam vitae, nemo fugit totam perspiciatis cupiditate
          corporis. Dolorum repellat nesciunt soluta.
        </p>
      </div>
      <div className='social-links'>
        <h1>Follow us on Social Media:</h1>
        <div className='link-container'>
          <a href='https://www.facebook.com/' target='_blank'>
            <img
              className='link-icon'
              src='https://cdn-icons-png.flaticon.com/512/174/174848.png'
              alt='link'
            />
          </a>
          <a href='https://www.instagram.com/' target='_blank'>
            <img
              className='link-icon'
              src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
              alt='link'
            />
          </a>
          <a href='https://www.twitter.com/' target='_blank'>
            <img
              className='link-icon'
              src='https://cdn-icons-png.flaticon.com/512/733/733579.png'
              alt='link'
            />
          </a>
          <a href='https://www.tiktok.com/' target='_blank'>
            <img
              className='link-icon'
              src='https://cdn-icons.flaticon.com/png/512/4782/premium/4782345.png?token=exp=1660519062~hmac=e39fbf3da6544495123ea3945445f456'
              alt='link'
            />
          </a>
          <a href='https://www.youtube.com/' target='_blank'>
            <img
              className='link-icon'
              src='https://cdn-icons-png.flaticon.com/512/174/174883.png'
              alt='link'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
