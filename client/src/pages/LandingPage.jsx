// LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Fundamental Human Rights and International Treaties</h1>
        <p>Advocating for global awareness and education on human rights.</p>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <h2>Welcome to Our Community</h2>
        <p>
          Our mission is to promote awareness and education on fundamental human rights and international treaties.
          We believe in the power of knowledge and collective action to uphold and protect these essential rights.
        </p>
      </section>

      {/* Why It Matters Section */}
      <section className="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Human rights are the cornerstone of a just and equitable society. Understanding treaties and rights is crucial to defending freedom, justice, and peace worldwide.
        </p>
        <ul>
          <li>International Treaties Timeline</li>
          <li>Digital Accessibility and Inclusion</li>
          <li>Fundamental Human Rights</li>
        </ul>
      </section>

      {/* Featured Links Section */}
      <section className="featured-links">
        <h2>Explore Key Topics</h2>
        <div className="link-buttons">
          <Link to="/treaties/timeline" className="button">View Treaties Timeline</Link>
          <Link to="/treaties/accessibility" className="button">Digital Accessibility</Link>
          <Link to="/treaties/rights" className="button">Fundamental Rights</Link>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>Join our Facebook group and participate in discussions on human rights issues around the world.</p>
        <Link to="/join" className="join-button">Join Us</Link>
      </section>
    </div>
  );
}

export default LandingPage;
