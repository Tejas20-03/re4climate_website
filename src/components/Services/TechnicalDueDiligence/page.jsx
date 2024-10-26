import React from 'react';
import './style.css';

const TechnicalDueDiligence = () => {
  return (
    <section className="tdd-section">
      <section className="parallax-1">
        <div className="parallax-inner tdd-banner">
          <h1>Technical Due Diligence</h1>
        </div>
      </section>

      <h2 className="tdd-heading">Overview</h2>
      <div className="tdd-content">
        <p>
          At RE4C, we provide comprehensive TDD and TEVR services and accessing the 
          feasibility, risk and overall quality of projects to make the informed decisions 
          to the stakeholders to access projects are both technically and financially viable.
        </p>
      </div>

      <h2 className="tdd-heading">Our TDD and TEVR Services</h2>
      <div className="tdd-content">
        <h3 className="tdd-subheading">Overall Project Review</h3>
        <p>
          We conduct detailed review of documentation, including technical specifications, 
          design and drawings and contractual agreements.
        </p>

        <h3 className="tdd-subheading">Site and Resources Assessment</h3>
        <p>
          Our expert conduct site visit and resources assessment and access site suitability 
          and verify resources availability to ensure basic requirements of the projects.
        </p>

        <h3 className="tdd-subheading">Technology and Equipment's Evaluation</h3>
        <p>
          We access technology and equipment proposed for the project and ensuring suitability, 
          reliability and capable of meeting performance expectations.
        </p>

        <h3 className="tdd-subheading">Risk Assessment and Mitigation</h3>
        <p>
          We identifies potential risks associated with the project, including technical, 
          operational, and financial risks.
        </p>

        <h3 className="tdd-subheading">Regulatory Compliance Review</h3>
        <p>
          We thoroughly review the project's compliance with local, national, and international 
          regulations and ensuring that all necessary permits, licenses, and approvals are in 
          place, reducing the risk of legal complications.
        </p>

        <h3 className="tdd-subheading">Financial and Economic Analysis</h3>
        <p>
          We assess cost estimates, revenue projections, and return on investment (ROI) to 
          provide a clear understanding of the project's financial potential.
        </p>

        <h3 className="tdd-subheading">Performance Verification</h3>
        <p>
          We verify the projected performance of the project, ensuring that energy yield 
          estimates, performance ratio (PR), capacity factors are achievable.
        </p>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner tdd-banner"></div>
      </section>

      <h2 className="tdd-heading">What You Get</h2>
      <div className="tdd-content">
        <ul className="tdd-list">
          <li>Comprehensive project evaluation</li>
          <li>Risk Identification and Mitigation</li>
          <li>Verified performance projection</li>
          <li>Financial viability analysis</li>
          <li>Regulatory compliance confidence</li>
        </ul>
      </div>

      
    </section>
  );
};

export default TechnicalDueDiligence;
