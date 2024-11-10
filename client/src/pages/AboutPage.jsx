import React from 'react';
import './styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <header className="page-header">
        <h1>About Us</h1>
        <p className="page-subtitle">Empowering communities to understand and uphold human rights</p>
      </header>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to advocate for global awareness of human rights and educate about the importance of international treaties.
          We aim to create a knowledgeable community dedicated to understanding, protecting, and advancing fundamental human rights.
        </p>
      </section>

      {/* Goals Section */}
      <section className="goals-section">
        <h2>Our Goals</h2>
        <ul>
          <li>Promote understanding of international treaties and agreements</li>
          <li>Encourage meaningful discussions on human rights issues</li>
          <li>Empower individuals to advocate for and defend fundamental rights</li>
          <li>Support digital accessibility and inclusivity for all communities</li>
        </ul>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <h2>Our Community</h2>
        <p>
          We are a group of passionate advocates, researchers, and everyday individuals who believe that human rights are the foundation of a fair and just society.
          Our online community enables members to share insights, discuss pressing issues, and collaborate on projects that advance global human rights.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
