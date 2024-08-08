import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for navigation
import '../styles/Login.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  const navigate = useNavigate(); // Initialize navigate function
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (Email === '' || password === '') {
      setError('Please fill in both fields.');
      return;
    }
  
    try {
      // Use POST if your JSON Server setup expects it
      const response = await axios.post('http://localhost:3001/login', { Email, password });
  
      if (response.data.success) {
        navigate('/'); 
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      console.error(err); 
      
      navigate('/');
    }
  };
  
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
