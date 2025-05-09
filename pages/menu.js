import React from 'react';
import MenuCard from '../components/menucard';

const menuItems = {
  mainDishes: [
    { title: 'Idli', description: 'Delicious steamed rice cakes', price: 3, image: '/images/idli-recipe.jpg' },
    { title: 'Dosa', description: 'Crispy and golden pancake', price: 4, image: '/images/dosa.jpeg' },
    { title: 'Masala Dosa', description: 'Dosa with spicy potato filling', price: 4.5, image: '/images/masala-dosa.jpg' },
    { title: 'Curd Rice', description: 'Soothing and simple rice dish', price: 2.5, image: '/images/curdrice.jpeg' }
  ],
  sideDishes: [
    { title: 'Vada', description: 'Spicy South Indian fritter', price: 2.5, image: '/images/vada.jpeg' },
    { title: 'Pongal', description: 'Mild and flavorful rice dish', price: 3.5, image: '/images/pongal.jpeg' },
    { title: 'Upma', description: 'Savory semolina breakfast', price: 3, image: '/images/upma.jpeg' }
  ],
  desserts: [
    { title: 'Kesari', description: 'Sweet saffron-flavored dessert', price: 2, image: '/images/kesari.jpeg' }
  ],
  beverages: [
    { title: 'Filter Coffee', description: 'Authentic South Indian brew', price: 1.5, image: '/images/filtercoffee.jpeg' }
  ]
};

function Menu() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Our Menu</h1>

      {Object.entries(menuItems).map(([category, items]) => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h2 style={{ textTransform: 'capitalize', borderBottom: '2px solid #ccc' }}>{category}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {items.map((item, index) => (
              <MenuCard
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
