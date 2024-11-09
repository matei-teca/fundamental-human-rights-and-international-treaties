// LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css'; // CSS file for styling

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header Section */}

      {/* Introduction Section */}
      <section className="intro-section">
        <h2>Welcome to Our Community</h2>
        <p>
          Our mission is to promote awareness and education on fundamental human rights and international treaties. We believe in the power of knowledge and collective action to uphold and protect these essential rights.
        </p>
        <p>Explore key topics:</p>
        <ul>
          <li>International Treaties Timeline</li>
          <li>Digital Accessibility and Inclusion</li>
          <li>Fundamental Human Rights</li>
        </ul>
      </section>

      {/* Featured Links Section */}
      <section className="featured-links">
        <h2>Explore More</h2>
        <div className="link-buttons">
          <Link to="/treaties/timeline" className="button">View Treaties Timeline</Link>
          <Link to="/treaties/accessibility" className="button">Digital Accessibility</Link>
          <Link to="/treaties/rights" className="button">Fundamental Rights</Link>
        </div>
      </section>
      
    </div>
  );
}

export default LandingPage;
