import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import appStore from '../assets/images/app-store.png'; // Add correct path
import googlePlay from '../assets/images/google-play.png'; // Add correct path

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h4>Join us</h4>
        <a href="#">Become an Agent</a>
        <a href="#">Get referrals</a>
        <a href="#">Careers</a>
      </div>
      <div className="footer-section">
        <h4>About us</h4>
        <a href="#">Why RealEstate?</a>
        <a href="#">Community Impact</a>
        <a href="#">Diversity & Inclusion</a>
        <a href="#">Life at RealEstate</a>
        <a href="#">Press</a>
        <a href="#">Investors</a>
        <a href="#">Blog</a>
        <a href="#">Real Estate News</a>
      </div>
      <div className="footer-section">
        <h4>Find us</h4>
        <Link to="/contact">Contact Us</Link>
        <a href="#">Help Center</a>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Subsidiaries</h4>
        <a href="#">Rent</a>
        <a href="#">ApartmentGuide</a>
        <a href="#">Bay Equity Home Loans</a>
        <a href="#">Title Forward</a>
      </div>
      <div className="footer-section">
        <h4>Countries</h4>
        <p>United States</p>
        <p>Canada</p>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-legal">
        <p>&copy; 2024 RealEstate, Inc. All rights reserved.</p>
        <p><a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>
      </div>
      <div className="footer-apps">
        <img src={appStore} alt="App Store" />
        <img src={googlePlay} alt="Google Play" />
      </div>
    </div>
  </footer>
);

export default Footer;
