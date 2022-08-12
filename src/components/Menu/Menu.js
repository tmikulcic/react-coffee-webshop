import React from 'react';
import './Menu.css';
import data from '../data';
import Card from './Card';

export default function Menu() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className='menu-container'>
      <div>{cards}</div>
    </div>
  );
}
