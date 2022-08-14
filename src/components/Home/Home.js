import React, { useEffect } from 'react';
import './Home.css';
import Services from './Services';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
        <p data-aos='fade-up' className='article-title'>
          Coffee Quote of the Day:
        </p>
        <p data-aos='fade-up' className='article-text'>
          "Never Underestimate the Importance of Being Properly Caffeinated."
        </p>
      </div>
    </div>
  );
}
