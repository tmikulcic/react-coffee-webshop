import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='about-container'>
      <div
        className='about-section'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80")`,
        }}
      >
        <div className='about-text'>
          <h3 className='about-header'>HOW WE STARTED</h3>
          <p className='about-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolorem exercitationem accusamus dignissimos debitis voluptatum
            autem illum necessitatibus ea, quas numquam non placeat illo
            possimus maiores. Repudiandae sunt iusto sapiente! quas numquam non
            placeat illo possimus maiores. Repudiandae sunt iusto sapiente!
          </p>
        </div>
        <div className='about-image-container'>
          <img
            className='about-image'
            src='https://images.unsplash.com/photo-1645633388153-5695f40a91a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            alt='photo'
          />
        </div>
      </div>
      <div className='about-section-black'>
        <div className='about-image-container'>
          <img
            className='about-image'
            src='https://images.unsplash.com/photo-1526401281623-279b498f10f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            alt='photo'
          />
        </div>
        <div className='about-text-black'>
          <h3 className='about-header'>OUR MISSION</h3>
          <p className='about-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolorem exercitationem accusamus dignissimos debitis voluptatum
            autem illum necessitatibus ea, quas numquam non placeat illo
            possimus maiores. Repudiandae sunt iusto sapiente!
          </p>
        </div>
      </div>
      <div
        className='about-section'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80")`,
        }}
      >
        <div className='about-text'>
          <h3 className='about-header'>WHAT DO WE OFFER</h3>
          <p className='about-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolorem exercitationem accusamus dignissimos debitis voluptatum
            autem illum necessitatibus ea, quas numquam non placeat illo
            possimus maiores. Repudiandae sunt iusto sapiente!
          </p>
        </div>
        <div className='about-image-container'>
          <img
            className='about-image'
            src='https://images.unsplash.com/photo-1598811465492-4138d1f4fbee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            alt='photo'
          />
        </div>
      </div>
    </div>
  );
}
