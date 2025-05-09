import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>MyRestaurant 🍽️</div>
      <div style={linkContainer}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/menu" style={linkStyle}>Menu</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

// Styles
const navStyle = {
  background: '#2c3e50',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold'
};

const linkContainer = {
  display: 'flex',
  gap: '1rem'
};

const linkStyle = {
  backgroundColor: '#34495e',
  padding: '0.6rem 1.2rem',
  borderRadius: '5px',
  textDecoration: 'none',
  color: 'white',
  fontWeight: '500',
  transition: 'background 0.3s',
};

linkStyle[':hover'] = {
  backgroundColor: '#1abc9c'
};

export default Navbar;
