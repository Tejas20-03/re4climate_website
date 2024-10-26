import React from 'react';
import './style.css';

const OwnersEngineer = () => {
  return (
    <section className="oe-section">
      <section className="parallax-1">
        <div className="parallax-inner oe-banner">
          <h1>Owner's Engineer</h1>
        </div>
      </section>

      <h2 className="oe-heading">Overview</h2>
      <div className="oe-content">
        <p>
          At RE4C, we serve as an independent representative of project owners and lenders, 
          providing essential support throughout the entire project lifecycle. Our commitment 
          to delivering high-quality services ensures project meets all relevant Indian and 
          international standards, significantly reducing the risk of liabilities and addressing 
          potential quality and safety issues.
        </p>
        <p>
          We take pride in building strong relationships with EPC contractors, manufacturers, 
          and all other stakeholders involved in the project. Our Owner's Engineer services 
          offer reliable support in planning, project management, supplier evaluation, and 
          personnel training for both plant construction and operations. By thoroughly assessing 
          the strengths and weaknesses of project, we empower our client to make well-informed 
          investment decisions, ensuring the long-term success of renewable energy initiatives.
        </p>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner oe-banner"></div>
      </section>

      <h2 className="oe-heading">What You Get</h2>
      <div className="oe-content">
        <ul className="oe-list">
          <li>Independent Oversight</li>
          <li>Compliance Assurance</li>
          <li>Cost Optimization</li>
          <li>Risk Mitigation</li>
          <li>Strong Stakeholder Relationships</li>
          <li>Expert Support in Planning and Management</li>
          <li>Enhanced Decision-Making</li>
        </ul>
      </div>

      <h2 className="oe-heading">Stakeholders</h2>
      <div className="oe-content">
        <ul className="oe-list">
          <li>Owner</li>
          <li>Developer</li>
          <li>EPC</li>
          <li>Consultants</li>
          <li>OEMs</li>
        </ul>
      </div>

      
    </section>
  );
};

export default OwnersEngineer;
