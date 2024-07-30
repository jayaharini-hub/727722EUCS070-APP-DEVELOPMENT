import React from 'react';
import '../styles/About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutVideo from '../assets/videos/about-video.mp4'; // Import the local video

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <div className="about-content">
        <div className="about-main">
        <video src={aboutVideo} autoPlay loop muted id="background-video"></video>
        <br></br>
        <br></br>
        <br></br>
          <h1>Together We Can Rise</h1>
          <h1>To Help Others</h1>
          <p>
          Welcome to RJ Real Estate, where your dream home becomes a reality. 
          With years of experience in the real estate market, we specialize in buying,
           selling, and renting residential and commercial properties. 
          Our dedicated team of experts is committed to providing exceptional service,
           guiding you through every step of the process with personalized 
           attention and market insights.
           Whether you're a first-time homebuyer, looking for a rental property, 
           or interested in investing, we are here to help you make informed
            decisions and find the perfect property that meets your needs and budget.
           Trust us to turn your real estate aspirations into a thriving reality.
          </p>
          <p>
          Why Choose Us?<br></br><br></br>
  * Local Expertise: Our in-depth knowledge of the local market ensures you get the best value and opportunities in your area of interest.<br></br><br></br>
  * Comprehensive Services: From property valuation to legal assistance, we offer a full suite of services to make your real estate journey seamless and stress-free.<br></br><br></br>
  * Client-Centric Approach: We prioritize your needs and goals, offering customized solutions and continuous support to ensure your complete satisfaction.<br></br><br></br>
         </p> 
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default About;
