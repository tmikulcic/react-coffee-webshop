import React from 'react';
import './Home.css';
import Services from './Services';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-container'>
      <div
        className='splashscreen'
        style={{
          backgroundImage: `url("./images/splashscreen-darkened.jpg")`,
        }}
      >
        <div className='splashscreen-text'>START YOUR DAY RIGHT</div>
        <div className='splashscreen-text'>WITH CUP OF A BEST COFFEE</div>
        <Link className='button' to='/menu'>
          Explore Selection
        </Link>
      </div>
      <Services />
      <div className='find-about'>
        <p className='article-title'>Coffee Quote of the Day:</p>
        <p className='article-text'>
          "Never Underestimate the Importance of Being Properly Caffeinated."
        </p>
      </div>
    </div>
  );
}
