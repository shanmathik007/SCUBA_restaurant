import React from 'react';

function MenuCard({ title, price, description, image }) {
  return (
    <div className="menu-card" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      width: '200px',
      backgroundColor: '#fff',
      textAlign: 'center'
    }}>
      <img src={image} alt={title} className="menu-image" style={{
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '6px',
        marginBottom: '10px'
      }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
    </div>
  );
}

export default MenuCard;
