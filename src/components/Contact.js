import React, { useState } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [dialingIndex, setDialingIndex] = useState(null);
  const phoneNumbers = [
    { number: '+1 (647) 214-2944' },
    { number: '+1 (514) 820-5583' }
  ];

  const handleCallClick = (phoneNumber, index) => {
    setDialingIndex(index);
    // Simulate dialing for 1.5 seconds
    setTimeout(() => {
      window.location.href = `tel:${phoneNumber.replace(/[^0-9+]/g, '')}`;      
      setDialingIndex(null);
    }, 1500);
  };

  return (
    <>
      <div className="whatsapp-container">
        <h2 className="whatsapp-title">Click to Chat</h2>
        <div className="whatsapp-banner">
          <a href="https://wa.me/qr/62VMV33QYWNSK1" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            <div className="whatsapp-button">
              <div className="whatsapp-icon"><FaWhatsapp /></div>
              <span>Chat on WhatsApp</span>
            </div>
          </a>
        </div>
      </div>
      <section className="contact" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <p>Contact us today</p>
      <div className="phone-numbers">
        {phoneNumbers.map((phone, index) => (
          <div className="phone-card" key={index}>
            <div className="phone-icon">
              <FaPhone />
            </div>
            <div className="phone-info">
              <p className="phone-number">{phone.number}</p>
            </div>
            <button 
              className={`call-button ${dialingIndex === index ? 'dialing' : ''}`}
              onClick={() => handleCallClick(phone.number, index)}
              disabled={dialingIndex !== null}
            >
              {dialingIndex === index ? 'Dialing...' : "Call Now"}
            </button>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Contact;
