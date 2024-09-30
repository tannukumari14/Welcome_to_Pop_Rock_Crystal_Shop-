import React from 'react';
import './Content.css'; 
import Card from './Card';

const Content = () => {
  return (
    <div className="background">
      <div className="logo">
        <img src="logo.png" alt="Pop Rock Crystal Shop" />
      </div>
      <h1>Welcome to Pop Rock Crystal Shop!</h1>
      <p>
        Here you will find unique phone accessories, crystals, jewelry, and more.
      </p>
      <button className="shop-now">Shop Now</button>
      <Card/>
    </div>
  );
};

export default Content;
