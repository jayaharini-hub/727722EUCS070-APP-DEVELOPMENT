import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { UserContext } from '../context/AuthContext';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { user, setUser } = React.useContext(UserContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>RJ Real Estate</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars className="bar" />
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {user ? (
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
              <Link to="/profile">
                <FaUserCircle style={{ color: '#ffffff', fontSize: '1.5rem' }} />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>Logout</Link>
            </li>
          </>
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
