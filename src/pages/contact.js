import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor:'rgb(248, 240, 233)',
      minHeight: '80vh'
    }}>
      <h1>Contact Us</h1>
      <h4>We'd love to hear from you! Reach out for reservations, events, or feedback.</h4>
      <p>Address: 123, SCUBA Restaurant, ABC Road, Gandhinagar, Chennai-60000 </p>
      <p>Phone: +91 12345 67890</p>
      <p>Email:123@email.com</p>
      <p><strong>Opening Hours: Mon-Sun 10:00 AM - 10:00 PM</strong></p>

      <div style={{ margin: '2rem 0' }}>
        <h2>Follow Us</h2>
        <div style={{ fontSize: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"
             style={{ color: '#e1306c', transition: 'transform 0.3s' }}
             onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
             onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"
             style={{ color: '#3b5998', transition: 'transform 0.3s' }}
             onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
             onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            <FaFacebook />
          </a>
        </div>
      </div>

      <div style={{
        backgroundColor: '#f9db77',
        padding: '2rem',
        borderRadius: '10px',
        marginTop: '3rem',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2>Reserve a Table</h2>
        <p>Book your table now and get <strong>10% OFF</strong> your first dine-in!</p>
        <button style={{
          padding: '1rem 2rem',
          backgroundColor: '#e67e22',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '1rem'
        }}>
          Reserve Now
        </button>
      </div>
    </div>
  );
}

export default Contact;
