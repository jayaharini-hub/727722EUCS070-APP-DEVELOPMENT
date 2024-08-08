import React, { useState,useEffect } from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios
 from 'axios';

import '../styles/Login.css';

function Signup() {
  useEffect(()=>{
    document.title='Signup';
  })
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const[error,setError]=useState(' ');
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  
    axios.post('http://localhost:3001/users', { email, password })
      .then(res => {
        alert("Account Created");
        // Reset state values after successful response
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(''); // Optionally clear any previous errors
      })
      .catch(err => {
        console.error(err);
        setError("An error occurred. Please try again.");
      });
  };
  

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className='login-form'>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className='login-button'>Sign Up</button>
          </form>
          <p className="signup-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;