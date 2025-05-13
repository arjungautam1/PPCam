import React from 'react';
import logo from '../assets/images/ppsurveillancelogo.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="PP Surveillance & Security Solutions Logo" />
      </div>
      <div className="header-text">
        <h1>PP Surveillance & Security Solutions</h1>
        <p>Residential / Commercial Security Services, Powered by Innovation</p>
      </div>
    </header>
  );
};

export default Header;
