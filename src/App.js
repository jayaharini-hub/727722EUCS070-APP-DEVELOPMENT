import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Services from './pages/Services';
import About from './pages/About';
import realEstateVideo from './assets/videos/real-estate.mp4'; 
import './styles/App.css'; 
import Apartments from './property/apartment/Apartments';
import FeedbackForm from './pages/FeedBackForm';
import ContactUs from './pages/ContactUs';
import Luxury1 from './property/apartment/Luxury1';
import AdminPage from './pages/AdminPage';
import BasicModalExample from './pages/BasicModalExample'; 

const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <video src={realEstateVideo} autoPlay loop muted id="background-video"></video>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/luxury1" element={<Luxury1 />} />
            <Route path="/modal-test" element={<BasicModalExample />} /> 
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
};

export default App;
