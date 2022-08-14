import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div
      className='contact-container'
      style={{
        backgroundImage: `url("./images/contact-background.jpg")`,
      }}
    >
      <div className='contact-box '>
        <h1 className='work-text'>OPENING HOURS</h1>
        <p className='workday'>MONDAY: 07-23h</p>
        <p className='workday'>TUESDAY: 07-23h</p>
        <p className='workday'>WEDNESDAY: 07-23h</p>
        <p className='workday'>THURSDAY: 07-23h</p>
        <p className='workday'>FRIDAY: 07-00h</p>
        <p className='workday'>SATURDAY: 08-00h</p>
        <p className='workday'>SUNDAY: 08-00h</p>
        <p className='workday'>CLOSED ON HOLIDAYS</p>
      </div>
      <div className='contact-box '>
        <h1 className='work-text'>CONTACT US</h1>
        <p className='workday'>Phone: +365 345 3445</p>
        <p className='workday'>Mobile: +365 0945 3445</p>
        <p className='workday'>E-mail: info@tomcb.com</p>
      </div>
      <div className='contact-box '>
        <h1 className='work-text'>LOCATIONS</h1>
        <p className='workday'>Lavazza street 83</p>
        <p className='workday'>
          10000 Zagreb, Croatia
          <a
            className='contact-link'
            href='https://www.google.com/maps'
            target='_blank'
          >
            See on Google Maps
          </a>
        </p>
        <p className='workday'>Lavazza street 83</p>
        <p className='workday'>10000 Zagreb, Croatia</p>
        <a
          className='contact-link'
          href='https://www.google.com/maps'
          target='_blank'
        >
          See on Google Maps
        </a>
        <p className='workday'>Franck square 1</p>
        <p className='workday'>21200 Split, Croatia</p>
        <a
          className='contact-link'
          href='https://www.google.com/maps'
          target='_blank'
        >
          See on Google Maps
        </a>
      </div>
    </div>
  );
}
