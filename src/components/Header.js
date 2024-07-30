import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { UserContext } from '../context/AuthContext';
const Header = () => {
  const { user } = React.useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>RJ Real Estate</h1>
      </div>
      <ul className="nav-links">
        {user ? (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
