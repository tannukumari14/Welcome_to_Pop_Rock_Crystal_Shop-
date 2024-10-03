import React from 'react';
import './Content.css';
import Card from './Card';

const Content = () => {
  return (
    <div className="background">
      <div className='container-box'>

        <div className="logo">
          <h2>Welcome to</h2>
        </div>

        <h1>Pop Rock Crystal Shop!</h1>
        <p>
          Here you will find unique phone accessories, crystals, jewelry, and more.
        </p>

        <div className="shop-about-container">
          <button className="shop-now">Shop Now</button>
          <h3>About Us</h3>
        </div>

      </div>  

      <div className="card-scroll-container">
        <Card />
      <img src="mouse.png" alt='scroll down' className="scroll-image" />
      <div class="pagination">
        <button class="prev">←</button>
        <div class="dots">
          <span class="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button class="next">→</button>
      </div>
      </div>
      
    </div>
  );
};

export default Content;
