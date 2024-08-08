// src/api.js
const API_URL = 'http://localhost:3001';

export const signup = async (userData) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
  const data = await response.json();
  if (data.length > 0) {
    return data[0]; // User found
  } else {
    throw new Error('Invalid email or password');
  }
};
