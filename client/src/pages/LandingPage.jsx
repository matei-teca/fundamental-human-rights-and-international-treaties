// LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">

      {/* Introduction Section */}
      <section className="intro-section">
        <h2>Welcome to Our Community</h2>
        <p>
        Hi, I'm Matei, and I want to share a bit of researching. And most of all I wish to bring people together. People interested in human rights, international treaties, and a peaceful society.
        </p>
      </section>

      {/* Why It Matters Section */}
      <section className="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Human rights are the cornerstone of a just and equitable society. A truly humane society. Understanding treaties and rights is crucial to defending freedom, justice, peace and international coopeeration.
        </p>
        <ul>
          <li>Promote understanding of human rights, international treaties and agreements</li>
          <li>Encourage meaningful discussions on human rights issues</li>
          <li>Support digital accessibility and inclusivity for all communities</li>
        </ul>
      </section>

      {/* Featured Links Section */}
      <section className="featured-links">
        <h2>Explore Key Topics</h2>
        <div className="link-buttons">
          <Link to="/treaties/timeline" className="button">View Treaties Timeline</Link>
          <Link to="/treaties/rights" className="button">Fundamental Rights</Link>
          <Link to="/treaties/accessibility" className="button">Digital Accessibility</Link>
          <Link to="/resources" className="button">More Resources</Link>
        </div>
      </section>

      <section className="featured-links">
        <h2>Explore our website for the Human Rights and Well Being of Persons with Disabilities</h2>
        <div className="link-buttons">
          <a href="https://matei-teca.github.io/human-rights-persons-with-disabilities/#/" target="/blank"><div className="button">View the secondary website</div></a>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>Join our Facebook group and participate in meaningful discussions on human rights and solutions, around the world.</p>
        <Link to="/join" className="join-button">Join Us</Link>
      </section>
    </div>
  );
}

export default LandingPage;
