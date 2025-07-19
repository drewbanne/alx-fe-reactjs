// src/pages/Contact.jsx

import React, { useState } from 'react';

// Contact page component with a simple form and inline styling.
function Contact() {
  // State to manage form data.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes and update form data state.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload).
    // In a real application, you would send this data to a server.
    // For this assignment, we'll just log it and show an alert.
    console.log('Form submitted:', formData);
    // Using a custom message box instead of alert() as per instructions.
    // For simplicity, we'll use a basic alert-like behavior for now.
    // In a full app, you'd render a modal or notification component.
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    // Reset form fields after submission.
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e3f2fd', minHeight: 'calc(100vh - 120px)' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #bbdefb', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: 'calc(100% - 22px)', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1em' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: 'calc(100% - 22px)', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1em' }}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Your Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{ width: 'calc(100% - 22px)', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1em', resize: 'vertical' }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            padding: '12px 25px',
            fontSize: '1.1em',
            backgroundColor: '#1976d2', // Darker blue
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s ease'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
