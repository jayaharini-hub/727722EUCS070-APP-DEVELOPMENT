import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/AuthContext';

const Profile = () => {
  const { user,setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        const user = response.data.find((u) => u.email === user.email);
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [setUser]);

  return (
    <div>
      <h2>Profile</h2>
      <p>
        Email: {user.email}
      </p>
      <p>
        Name: {user.name}
      </p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default Profile;