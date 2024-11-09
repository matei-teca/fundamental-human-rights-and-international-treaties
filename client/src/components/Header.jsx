// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Fundamental Human Rights and International Treaties</h1>
      <p className="tagline">Advocating for Global Human Rights Awareness and Education</p>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/treaties">Treaties</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/join">Join Us</Link>
      </nav>
    </header>
  );
}

export default Header;
