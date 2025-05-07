import React from 'react';
import heroImage from '../assets/images/cctvinstallation.jpg';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Security Solutions</h2>
        <p>Professional security installations and support for your home and business</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Security camera system" />
      </div>
    </section>
  );
};

export default Hero;
