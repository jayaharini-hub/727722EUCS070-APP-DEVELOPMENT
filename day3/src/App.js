import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rent from './pages/Rent';
import Services from './pages/Services';
import Buy from './pages/Buy';
import Login from './pages/Login';
import './styles/App.css';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Buy" element={<Buy/>} />
       <Route path="/Rent" element={<Rent/>} />
       <Route path="/service" element={<Services/>} />
       <Route path="/profile" element={<Profile />} />
      
    </Routes>
  </Router>
);

export default App;
