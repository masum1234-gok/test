import React from 'react';

const categories = [
  'PC Games',
  'Android Games',
  'Software Tools',
  'Utilities',
];

// Generate 20 random products for each category
const getRandomProducts = (category) =>
  Array.from({ length: 20 }, (_, i) => ({
    id: `${category}-${i + 1}`,
    name: `${category} Product ${i + 1}`,
    price: (Math.random() * 50 + 10).toFixed(2),
    image: `https://source.unsplash.com/featured/200x200?${encodeURIComponent(category)},game,${i}`,
  }));

const allProducts = categories.reduce((acc, cat) => {
  acc[cat] = getRandomProducts(cat);
  return acc;
}, {});

const Cart = () => (
  <div style={{ padding: '2rem' }}>
    <h2>Shopping Cart</h2>
    <p>Your cart is empty.</p>
    <div>
      {categories.map((cat) => (
        <div key={cat} style={{ margin: '2rem 0' }}>
          <h3 style={{ color: '#00eaff' }}>{cat}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {allProducts[cat].map((product) => (
              <div key={product.id} style={{ background: '#23263a', color: '#fff', borderRadius: 12, padding: 12, width: 160, boxShadow: '0 0 8px #00eaff44' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} />
                <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{product.name}</div>
                <div style={{ color: '#00ff99', marginBottom: 4 }}>${product.price}</div>
                <button style={{ background: 'linear-gradient(90deg, #00eaff, #7f00ff, #00ff99)', color: '#fff', border: 'none', borderRadius: 8, padding: '4px 12px', cursor: 'pointer', fontWeight: 'bold' }}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Cart;
