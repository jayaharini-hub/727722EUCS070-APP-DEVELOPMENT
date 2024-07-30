import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AdminPage.css';

const AdminPage = () => {
  const [userSignups, setUserSignups] = useState([]);
  const [userFeedbacks, setUserFeedbacks] = useState([]);
  const [userContacts, setUserContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://localhost:3001/users');
        const feedbacksResponse = await axios.get('http://localhost:3002/feedbacks');
        const contactsResponse = await axios.get('http://localhost:5000/contacts');

        setUserSignups(usersResponse.data);
        setUserFeedbacks(feedbacksResponse.data);
        setUserContacts(contactsResponse.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="admin-container">
        <h2 className="admin-heading">Admin Dashboard</h2>
        <div className="admin-sections">
          <section className="admin-section">
            <h3 className="section-title">User Signups</h3>
            {userSignups.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>ID</th>
                  </tr>
                </thead>
                <tbody>
                  {userSignups.map(user => (
                    <tr key={user.id}>
                      <td>{user.email}</td>
                      <td>{user.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-data">No data available</p>
            )}
          </section>
          <section className="admin-section">
            <h3 className="section-title">User Feedbacks</h3>
            {userFeedbacks.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Feedback</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {userFeedbacks.map(feedback => (
                    <tr key={feedback.id}>
                      <td>{feedback.email}</td>
                      <td>{feedback.firstName} {feedback.lastName}</td>
                      <td>{feedback.feedback}</td>
                      <td>{feedback.feedbackType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-data">No data available</p>
            )}
          </section>
          <section className="admin-section">
            <h3 className="section-title">User Contacts</h3>
            {userContacts.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Mobile No</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {userContacts.map(contact => (
                    <tr key={contact.id}>
                      <td>{contact.email}</td>
                      <td>{contact.firstName} {contact.lastName}</td>
                      <td>{contact.mobilenumber}</td>
                      <td>{contact.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-data">No data available</p>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
