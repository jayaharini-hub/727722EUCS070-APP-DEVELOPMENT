import React, { useState } from 'react';
import axios from 'axios';  
import '../../styles/HouseDetails.css'; 
import onebhk from '../../assets/images/one-bhk-brown1.webp';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Luxury1 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      feedback,
      mobilenumber
    };

    try {
      const response = await axios.get('http://localhost:5000/contacts');
      const feedbacks = response.data;
      const userExists = feedbacks.find(feedback => feedback.email === email);

      if (userExists) {
        alert('User already exists');
        return;
      }

      await axios.post('http://localhost:5000/contacts', formData);
      alert('Booked Successfully');
      
      setFirstName('');
      setLastName('');
      setEmail('');
      setMobileNumber('');
      setFeedback('');
    } catch (error) {
      console.error('Error:', error);
      alert('Booking failed. Please try again.');
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <div className="house-details">
          <div className="image-container">
            <img src={onebhk} alt="House" />
          </div>
          <div className="details-container">
            <h2>Beautiful Family House</h2>
            <p className="description">
              This stunning house features 1 bedroom, 2 bathrooms, and a spacious living area perfect for family gatherings.
              Located in a quiet neighborhood with excellent schools and parks nearby. Don't miss the opportunity to make this
              your new home!
            </p>
            <ul className="additional-details">
              <li><strong>Bedrooms:</strong> 1</li>
              <li><strong>Bathrooms:</strong> 2</li>
              <li><strong>Square Feet:</strong> 1,200 sq ft</li>
              <li><strong>Address:</strong> 124, R.S. Puram, Coimbatore, Tamil Nadu 641002, India</li>
              <li><strong>Price:</strong> Rs. 6 Lakh</li>
              <li><strong>Facing:</strong> North</li>
            </ul>
            <div className="buttons">
              <button className="buy-button" onClick={scrollToContact}>Book</button>
              
            </div>
          </div>
        </div>
        <div className="property-features">
          <h3>Property Features</h3>
          <ul>
            <li>Modern kitchen with stainless steel appliances</li>
            <li>Spacious backyard with a garden</li>
            <li>Attached garage with two parking spaces</li>
            <li>Central heating and cooling</li>
            <li>Hardwood floors throughout</li>
          </ul>
        </div>
        <div className="neighborhood-info">
          <h3>Neighborhood Information</h3>
          <p>
            Located in the heart of Pleasantville, this property is close to top-rated schools, beautiful parks, shopping centers, and fine dining restaurants. Enjoy a peaceful community with friendly neighbors and a family-oriented atmosphere.
          </p>
        </div>
        <div className="agent-contact">
          <h3>Contact Our Agent</h3>
          <p>For more information or to schedule a viewing, contact our agent:</p>
          <p><strong>John Doe</strong></p>
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345096896!2d144.9556510156881!3d-37.81732774252909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1d5eaff%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635700874590!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
        <div id="contact-us" className="contact-form-container">  {/* Add ID here */}
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} 
              required 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="text" 
              name="mobileNumber" 
              placeholder="Your Mobile Number" 
              value={mobilenumber}
              onChange={(e) => setMobileNumber(e.target.value)} 
              required 
            />
            <textarea 
              name="feedback" 
              placeholder="Your Message" 
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)} 
              required
            ></textarea>
            <button type="submit">Book</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Luxury1;
