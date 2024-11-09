// src/components/Header.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <h1>Fundamental Human Rights and International Treaties</h1>
      <p className="tagline">Advocating for Global Human Rights Awareness and Education</p>
      <nav className="nav-links">
        <Link to="/" className={isActive('/') ? 'active-link' : ''}>Home</Link>
        <Link to="/about" className={isActive('/about') ? 'active-link' : ''}>About</Link>
        <Link to="/treaties" className={isActive('/treaties') ? 'active-link' : ''}>Treaties</Link>
        <Link to="/resources" className={isActive('/resources') ? 'active-link' : ''}>Resources</Link>
        <Link to="/join" className={isActive('/join') ? 'active-link' : ''}>Join Us</Link>
      </nav>
    </header>
  );
}

export default Header;