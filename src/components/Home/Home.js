import React from 'react';
import './Home.css';
import Services from './Services';

export default function Home() {
  return (
    <div className='home-container'>
      <div
        className='splashscreen'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`,
        }}
      >
        <div className='splashscreen-text'>START YOUR DAY RIGHT</div>
        <div className='splashscreen-text'>WITH CUP OF A BEST COFFEE</div>
      </div>
      <Services />
      <div className='find-about'>
        <p className='article-title'>Want to know more about us?</p>
        <p className='article-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          eaque dolore.
        </p>
      </div>
    </div>
  );
}
