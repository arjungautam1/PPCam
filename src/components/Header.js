import React from 'react';
import logo from '../assets/images/PP Cam CCTV Security Logo in Blue and Gray.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="PP Surveillance and Security Solutions Logo" />
      </div>
      <div className="header-text">
        <h1>PP Surveillance and Security Solutions</h1>
        <p>Residential / Commercial Protection, Powered by Innovation</p>
      </div>
    </header>
  );
};

export default Header;
