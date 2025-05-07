import React from 'react';
import cctvImage from '../assets/images/cctvservices.png';
import alarmImage from '../assets/images/alarm.webp';
import accessImage from '../assets/images/AccessControl.webp';
import cablingImage from '../assets/images/cabling.jpg';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'CCTV Installation',
      image: cctvImage,
      description: 'High-quality CCTV systems for residential and commercial properties',
    },
    {
      title: 'Alarm System',
      image: alarmImage,
      description: 'Advanced alarm systems to protect your home or business',
    },
    {
      title: 'Access Control',
      image: accessImage,
      description: 'Secure access control solutions for restricted areas',
    },
    {
      title: 'Network Cabling',
      image: cablingImage,
      description: 'Professional network cabling for your security infrastructure',
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            {service.image ? (
              <img src={service.image} alt={service.title} />
            ) : (
              <div className="service-icon">{service.icon}</div>
            )}
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
