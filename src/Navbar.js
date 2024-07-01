import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have your Navbar CSS imported here

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Travel Planner</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="button button-primary">Login</Link>
        <Link to="/signup" className="button button-secondary">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
