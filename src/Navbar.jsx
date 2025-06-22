import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#222', color: '#fff' }}>
    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
    <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link>
    <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart</Link>
  </nav>
);

export default Navbar;
