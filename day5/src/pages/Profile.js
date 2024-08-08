import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Profile.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return (
      <div>
        <Header />
        <div className="profile-container">
          <h2>Please log in to view your profile</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="profile-container">
        <h2>Profile</h2>
        <p>Email: {user.email}</p>
        {/* Add more user details here */}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
