import React from 'react';
import Hero from '../components/hero';

function Home() {
  return (
    <div>
      <Hero />
      <hr style={{ margin: '2rem 0', border: 'none', borderTop: '2px dashed #ccc' }} />

      {/* About Section */}
      <section style={aboutSection}>
        <h2 style={sectionTitle}>About Us 🏡</h2>
        <p style={aboutText}>
          Welcome to <strong>SCUBA</strong> – your destination for authentic South Indian cuisine.
          We take pride in crafting every dish with love, tradition, and the freshest ingredients. Whether
          you’re craving crispy dosas, fluffy idlis, or a strong cup of filter coffee, we’re here to serve
          you comfort on a plate.
        </p>
      </section>

      <hr style={{ margin: '2rem 0', border: 'none', borderTop: '2px dashed #ccc' }} />

      {/* Customer Reviews */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2 style={sectionTitle}>What Our Customers Say 💬</h2>
        <div style={cardContainer}>
          <div style={cardStyle}>
            <p>"Absolutely loved the Pongal!"</p>
            <strong>- Aishwarya</strong>
          </div>
          <div style={cardStyle}>
            <p>"Authentic taste and great service."</p>
            <strong>- Varun</strong>
          </div>
          <div style={cardStyle}>
            <p>"The filter coffee was a nostalgic delight!"</p>
            <strong>- Sneha</strong>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2 style={sectionTitle}>Meet Our Chefs 👨‍🍳👩‍🍳</h2>
        <div style={cardContainer}>
          <div style={cardStyle}>
            <h4>Chef Meena</h4>
            <p>Signature: Masala Dosa</p>
          </div>
          <div style={cardStyle}>
            <h4>Chef Raj</h4>
            <p>Signature: Kesari</p>
          </div>
          <div style={cardStyle}>
            <h4>Chef Priya</h4>
            <p>Signature: Pongal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const sectionTitle = {
  fontSize: '1.8rem',
  marginBottom: '1rem',
  color: '#2d3436'
};

const aboutSection = {
  textAlign: 'center',
  padding: '2rem',
  backgroundColor: '#fff5e1',
  borderRadius: '10px',
  maxWidth: '900px',
  margin: '0 auto'
};

const aboutText = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#555'
};

const cardContainer = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1.5rem',
  padding: '1rem'
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '1rem',
  width: '240px',
  backgroundColor: '#fffaf0',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  cursor: 'pointer',
  fontFamily: 'Segoe UI, sans-serif'
};

export default Home;
