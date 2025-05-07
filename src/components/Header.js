import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="PP CAM Logo" />
      </div>
      <p>Residential / Commercial Protection, Powered by Innovation</p>
    </header>
  );
};

export default Header;
