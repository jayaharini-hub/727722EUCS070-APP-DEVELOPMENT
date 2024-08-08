import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/AuthContext';
import '../styles/Profile.css';
import { FaUserCircle, FaEnvelope,FaHome } from 'react-icons/fa';

const Profile = () => {
  const { user, login, logout } = React.useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        const fetchedUser = response.data.find((u) => u.email === user.email);
        login(fetchedUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [login, user.email]);

  const handleLogout = () => {
    logout(); // Clear user state
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <h2>{user.name}'s Profile</h2>
          <button onClick={() => navigate('/')} className="back-button">
          <FaHome className="icon" /> Back to Home
        </button>
        
      </div>
      <div className="profile-details">
        <div className="profile-detail">
          <FaEnvelope className="detail-icon" />
          <span className="detail-label">Email:</span>
          <span className="detail-value">{user.email}</span>
        </div>
        <div className="profile-detail">
          <FaUserCircle className="detail-icon" />
          <span className="detail-label">Name:</span>
          <span className="detail-value">{user.name}</span>
        </div>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default Profile;
