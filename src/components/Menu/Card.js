import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='card'>
      <img
        className='card-image'
        src={`.${props.item.img}`}
        alt='menu-image'
      ></img>
      <div className='description'>
        <p className='coffee-name'>{props.item.name}</p>
        <p className='coffee-price'>{props.item.price}€</p>
      </div>
    </div>
  );
}
