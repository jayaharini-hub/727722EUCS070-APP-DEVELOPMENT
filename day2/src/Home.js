import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h2>Welcome to the Home Page</h2>
      <div>
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
