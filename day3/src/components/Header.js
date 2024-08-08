import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="./logo.png" alt="Logo" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          {user ? (
            <Link to="/profile"><img src="./profile-icon.png" alt="Profile" className="profile-icon" /></Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
