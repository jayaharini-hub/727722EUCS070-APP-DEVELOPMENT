import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="background-image1">
        <div className="content1">
          <h4>Contact Us</h4>
          <p>We're here to help! Our National Customer Service Team is available 8am - 5pm PST, seven days a week.</p>
        </div>
      </div>
      <div className="contact-info1">
        <div className="contact-method1">
          <div className="icon1">📞</div>
          <h6>(844) 759-7732</h6>
          <p>Talk to a Customer Service Representative for help with our site, app, or finding a Real Estate Agent.</p>
        </div>
        <div className="contact-method1">
          <div className="icon1">📧</div>
          <h6>Message us</h6>
          <p>Send our Customer Service Team questions about our site, app, or finding a Real Estate Agent.</p>
        </div>
        <div className="contact-method1">
          <h6>Connect with us</h6>
          <div className="icon-buttons1">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
