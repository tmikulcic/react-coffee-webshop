import React from 'react';
import './Menu.css';
import data from '../data';
import Card from './Card';

export default function Menu() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div
      className='menu-container'
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      }}
    >
      <div className='card-container'>
        <h3 className='about-header'>MENU</h3>
        <div>{cards}</div>
      </div>
    </div>
  );
}
