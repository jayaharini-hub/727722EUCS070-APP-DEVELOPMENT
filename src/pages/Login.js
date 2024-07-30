import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Please fill in both fields.');
      return;
    }

    try {
      if (isAdmin) {
        if (email === 'rjrealestate@gmail.com' && password === 'estatereal') {
          navigate('/admin');
        } else {
          setError('Invalid email or password for admin.');
        }
      } else {
        const response = await axios.get('http://localhost:3001/users');
        const users = response.data;
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          navigate('/');
        } else {
          setError('Invalid email or password.');
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-cards">
          <div className="card" onClick={() => setIsAdmin(false)}>
            <h2>User Login</h2>
            {!isAdmin && <p>Login as a user.</p>}
          </div>
          <div className="card" onClick={() => setIsAdmin(true)}>
            <h2>Admin Login</h2>
            {isAdmin && <p>Login as an admin.</p>}
          </div>
        </div>
        <div className="login-form">
          <h2>{isAdmin ? 'Admin Login' : 'User Login'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
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
