import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { UserContext } from '../context/AuthContext';

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('Please fill in both fields.');
      return;
    }

    try {
      if (isAdmin) {
        if (username === 'rjrealestate@gmail.com' && password === 'estatereal') {
          login({ username, isAdmin: true });
          navigate('/admin');
        } else {
          setError('Invalid username or password for admin.');
        }
      } else {
        const response = await axios.get('http://localhost:8080/userInfo/authenticate');
        const users = response.data;
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
          login(user);
          navigate('/');
        } else {
          setError('Invalid username or password.');
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
                type="username"
                id="username"
                placeholder="Email"
                value={username}
                onChange={(e) => setName(e.target.value)}
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
