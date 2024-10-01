import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="Frame.png" 
          alt="Pop Rock Crystal"
          className="logo"
        />
        <span className="shop-name">Pop Rock Crystal</span>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#help">Help</a>
      </nav>

      <div className="header-right">
        <img
          src="Group.png" 
          alt="Profile"
          className="profile-icon"
        />
      </div>
    </header>
  );
};

export default Header;
