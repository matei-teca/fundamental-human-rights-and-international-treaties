// src/components/Footer.jsx

import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Human Rights and International Treaties Society. All Rights Reserved.</p>
      <p>
        Connect with us on social media and stay informed!
      </p>
    </footer>
  );
}

export default Footer;
