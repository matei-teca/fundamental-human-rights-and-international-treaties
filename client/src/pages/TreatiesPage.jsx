
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/TreatiesPage.css';

function TreatiesPage() {
  return (
    <div className="treaties-page">
      <h1>International Treaties and Documents</h1>

      <section className="treaty-section">
        <h2>Historical Timeline of International Treaties</h2>
        <p>A chronological overview of significant treaties that have shaped international relations and human rights standards.</p>
        <a href="https://docs.google.com/document/d/1_8dOM34dHfxX297lHWpheTN3agVOA2VMRDwV_Uu--OU/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
          View Document
        </a>
      </section>

      <section className="treaty-section">
        <h2>The Digital Accessibility Needs of Persons with Disabilities</h2>
        <p>An in-depth look at the digital accessibility rights of people with disabilities, highlighting key points for inclusivity.</p>
        <a href="https://docs.google.com/document/d/11HwJLheBSIQL5MNboedpxSju9XpAtQgl/edit?usp=sharing&ouid=118353362480069389760&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
          View Document
        </a>
      </section>

      <section className="treaty-section">
        <h2>Fundamental Human Rights</h2>
        <p>Explore foundational documents defining human rights, including declarations and conventions.</p>
        <ul>
          <li><a href="https://www.un.org/en/about-us/universal-declaration-of-human-rights" target="_blank" rel="noopener noreferrer">The Universal Declaration of Human Rights</a></li>
          <li><a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" target="_blank" rel="noopener noreferrer">International Covenant on Civil and Political Rights</a></li>
          <li><a href="https://www.coe.int/en/web/human-rights-convention" target="_blank" rel="noopener noreferrer">The European Convention on Human Rights</a></li>
          <li><a href="https://social.desa.un.org/issues/disability/crpd/convention-on-the-rights-of-persons-with-disabilities-articles" target="_blank" rel="noopener noreferrer">UN Convention on Rights of Persons with Disabilities</a></li>
        </ul>
      </section>

      <section className="treaty-section">
        <h2>National Constitution Examples</h2>
        <p>An example from Romania’s 2003 constitution, highlighting Article 20 on international human rights treaties.</p>
        <a href="https://www.ccr.ro/" target="_blank" rel="noopener noreferrer">
          View Document
        </a>
      </section>

      <section className="treaty-section">
        <h2>European Court of Human Rights</h2>
        <p>Information on the European Court of Human Rights, its role, and how it functions to protect human rights.</p>
        <a href="https://www.echr.coe.int/how-the-court-works" target="_blank" rel="noopener noreferrer">
          View Document
        </a>
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

export default TreatiesPage;
