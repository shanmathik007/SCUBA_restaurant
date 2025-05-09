import React from 'react';

function Hero() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #fce8a8, #f9db77)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        textAlign: 'center',
        padding: '2rem',
        color: '#2d3436',
        fontFamily: 'Segoe UI, sans-serif',
        animation: 'fadeIn 1s ease-in'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to SCUBA</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Delicious food made with love</p>
      <a href="/menu">
        <button
          style={{
            padding: '1rem 2rem',
            background: '#e67e22',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'transform 0.3s, background 0.3s'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = '#d35400';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = '#e67e22';
          }}
        >
          View Menu 🍽️
        </button>
      </a>
    </div>
  );
}

export default Hero;
