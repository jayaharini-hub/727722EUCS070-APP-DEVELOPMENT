import React, { useState } from 'react';
import '../styles/FeedBackForm.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [feedback, setFeedback] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      feedbackType,
      feedback,
      firstName,
      lastName,
      email
    };

    try {

      const response = await axios.get('http://localhost:3002/feedbacks');
      const feedbacks = response.data;
      const userExists = feedbacks.find(feedback => feedback.email === email);

      if (userExists) {
        alert('User feedback already exists');
        return;
      }

      // Post the feedback data to the JSON server
      await axios.post('http://localhost:3002/feedbacks', formData);
      alert('Feedback Submitted Successfully');
      
      // Optionally reset the form
      setFeedbackType('');
      setFeedback('');
      setFirstName('');
      setLastName('');
      setEmail('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div>
        <Header/>

 
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <p>We would love to hear your thoughts, suggestions, concerns, or problems with anything so we can improve!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input 
              type="radio" 
              value="Comments" 
              checked={feedbackType === 'Comments'} 
              onChange={(e) => setFeedbackType(e.target.value)} 
            /> 
            Comments
          </label>
          <label>
            <input 
              type="radio" 
              value="Suggestions" 
              checked={feedbackType === 'Suggestions'} 
              onChange={(e) => setFeedbackType(e.target.value)} 
            /> 
            Suggestions
          </label>
          <label>
            <input 
              type="radio" 
              value="Questions" 
              checked={feedbackType === 'Questions'} 
              onChange={(e) => setFeedbackType(e.target.value)} 
            /> 
            Questions
          </label>
        </div>
        <div>
          <label>
            Describe Your Feedback:
            <textarea 
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            Name:
            <div>
              <input 
                type="text" 
                placeholder="First Name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required 
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required 
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            E-mail:
            <input 
              type="email" 
              placeholder="ex: myname@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default FeedbackForm;
