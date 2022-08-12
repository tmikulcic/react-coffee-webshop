import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className='home-container'>
      <div
        className='splashscreen'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80")`,
        }}
      >
        <div className='splashscreen-text'>START YOUR DAY RIGHT</div>
        <div className='splashscreen-text'>WITH CUP OF A BEST COFFEE</div>
      </div>
      <div className='selection'>
        <div className='selection-left'>
          <p className='article-title'>OUR SELECTION</p>
          <p className='article-text'>Explore all of them to find your taste</p>
        </div>
        <div className='selection-right'></div>
      </div>
      <div className='find-about'>
        <p className='article-title'>Want to know more about us?</p>
        <p className='article-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          eaque dolore.
        </p>
      </div>
      <div className='find-us'>
        <p className='article-title'>Want to know more about us?</p>
        <p className='article-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          eaque dolore.
        </p>
      </div>
    </div>
  );
}
