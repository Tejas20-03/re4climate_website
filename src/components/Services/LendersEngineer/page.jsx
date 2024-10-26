import React from 'react';
import './style.css';

const LendersEngineer = () => {
  return (
    <section className="lie-section">
      <section className="parallax-1">
        <div className="parallax-inner lie-banner">
          <h1>Lender's Independent Engineer</h1>
        </div>
      </section>

      <h2 className="lie-heading">Overview</h2>
      <div className="lie-content">
        <p>
          At RE4C, we offer lender's specialized technical advisory services to provide overall project 
          evaluations to make the informed decision to lenders and financial institutions. We are protecting 
          lenders and financial institutions investments, identify and mitigation of risk through our analysis 
          of project's technical, financial and regulatory aspects.
        </p>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner lie-banner"></div>
      </section>

      <h2 className="lie-heading">Our LIE/LTA Services</h2>
      <div className="lie-content">
        <h3 className="lie-subheading">Technical Due Diligence</h3>
        <p>
          We conduct comprehensive evaluating the project's design, technology, and execution plans 
          to assess the viability and reliability of the project.
        </p>

        <h3 className="lie-subheading">Construction Monitoring</h3>
        <p>
          Our team monitors the construction process to ensure that it adheres to the agreed-upon timeline, 
          budget, and quality standards. We provide regular updates and reports to lenders, highlighting 
          any potential issues and recommending corrective actions.
        </p>

        <h3 className="lie-subheading">Financial and Economic Review</h3>
        <p>
          We perform a detailed financial analysis of the project, including cost estimates, funding 
          requirements, and revenue projections to ensures the project is economically viable and that 
          financial risks are minimized.
        </p>

        <h3 className="lie-subheading">Contract Review and Compliance</h3>
        <p>
          RE4C reviews all project contracts, including EPC (Engineering, Procurement, and Construction) 
          agreements, PPA, supply contracts, and operation and maintenance (O&M) agreements etc. and 
          ensuring that these contracts are aligned with the project's objectives.
        </p>

        <h3 className="lie-subheading">Risk Assessment</h3>
        <p>
          We identify and evaluate potential risks that could impact the project's success, including 
          technical, financial, and regulatory risks, while providing strategies to mitigate these risks.
        </p>

        <h3 className="lie-subheading">Performance Monitoring and Reporting</h3>
        <p>
          During both the construction and operational phases, we monitor the project's performance 
          against key metrics. We provide lenders with detailed reports that include insights on project 
          progress, performance, and any deviations from the plan.
        </p>
      </div>

      <h2 className="lie-heading">What You Get</h2>
      <div className="lie-content">
        <ul className="lie-list">
          <li>Experienced technical expertise</li>
          <li>Transparent reporting</li>
          <li>Commitment to quality and transparency</li>
          <li>Support across the project life cycle</li>
        </ul>
      </div>

      
    </section>
  );
};

export default LendersEngineer;