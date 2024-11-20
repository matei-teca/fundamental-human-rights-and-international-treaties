import React from 'react';
import './styles/ResourcesPage.css';

function ResourcesPage() {
    return (
      <div className="resources-page">
        <h1>Resources on Human Rights and Civil Rights</h1>
  
        {/* Universal Declaration of Human Rights Section */}
        <section className="resource-section">
          <h2>Universal Declaration of Human Rights</h2>
          <p><a href="https://www.un.org/en/about-us/universal-declaration-of-human-rights" target="_blank" rel="noopener noreferrer">Read the Declaration</a></p>
          <blockquote>
            <p>“Whereas recognition of the inherent dignity and of the equal and inalienable rights of all members of the human family is the foundation of freedom, justice and peace in the world...”</p>
          </blockquote>
          <h3>Selected Articles:</h3>
          <ul>
            <li><strong>Article 1:</strong> "All human beings are born free and equal in dignity and rights..."</li>
            <li><strong>Article 5:</strong> "No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment."</li>
            <li><strong>Article 6:</strong> "Everyone has the right to recognition everywhere as a person before the law."</li>
            <li><strong>Article 19:</strong> "Everyone has the right to freedom of opinion and expression..."</li>
            <li><strong>Article 30:</strong> "Nothing in this Declaration may be interpreted as implying for any State...to engage in any activity aimed at the destruction of any of the rights..."</li>
          </ul>
        </section>
  
        {/* Constitution of Romania Section */}
        <section className="resource-section">
          <h2>Constituția României</h2>
          <p><a href="https://www.ccr.ro/wp-content/uploads/2020/03/Constitutia-2003.pdf" target="_blank" rel="noopener noreferrer">Read the Constitution</a></p>
          <blockquote>
            <p>“Dispoziţiile constituţionale privind drepturile şi libertăţile cetăţenilor vor fi interpretate şi aplicate în concordanţă cu Declaraţia Universală a Drepturilor Omului...” (Articolul 20)</p>
            <p>"The constitutional provisions regarding the rights and freedoms of citizens will be interpreted and applied in accordance with the Universal Declaration of Human Rights..."</p>
          </blockquote>
        </section>
  
        {/* Additional Resource Links */}
        <section className="resource-section">
          <h2>Additional Resources</h2>
          <ul>
            <li><a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" target="_blank" rel="noopener noreferrer">International Covenant on Civil and Political Rights</a></li>
            <li><a href="https://www.coe.int/en/web/human-rights-convention" target="_blank" rel="noopener noreferrer">The European Convention on Human Rights</a></li>
            <li><a href="https://www.echr.coe.int/how-the-court-works" target="_blank" rel="noopener noreferrer">European Court of Human Rights</a></li>
            <li><a href="https://social.desa.un.org/issues/disability/crpd/convention-on-the-rights-of-persons-with-disabilities-articles" target="_blank" rel="noopener noreferrer">UN Convention on Rights of Persons with Disabilities</a></li>
            <li><a href="https://www.who.int/about/governance/constitution" target="_blank" rel="noopener noreferrer">World Health Organization Constitution</a></li>
            <li><a href="https://www.ohchr.org/sites/default/files/Documents/Issues/Women/WRGS/Health/GC14.pdf" target="_blank" rel="noopener noreferrer">UN General Comment No. 14: The Right to Health</a></li>
            <li><a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-economic-social-and-cultural-rights" target="_blank" rel="noopener noreferrer">International Covenant on Economic, Social and Cultural Rights</a></li>
          </ul>
        </section>
      </div>
    );
  }
  
  export default ResourcesPage;