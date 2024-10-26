import React from 'react';
import './style.css';

const ProjectManagement = () => {
  return (
    <section className="pm-section">
      <section className="parallax-1">
        <div className="parallax-inner pm-banner">
          <h1>Project Management</h1>
        </div>
      </section>

      <h2 className="pm-heading">Overview</h2>
      <div className="pm-content">
        <p>
          Offering comprehensive project management consultancy services which are designed 
          to ensure successful project delivery. Our expert team of professionals deliver 
          end to end project support, from planning, design and engineering to final 
          execution and handover.
        </p>
      </div>

      <h2 className="pm-heading">Our PMC Services</h2>
      <div className="pm-content">
        <h3 className="pm-subheading">Strategic Planning and Feasibility Analysis</h3>
        <p>
          We conduct thorough feasibility studies and strategic planning to assess the 
          viability of your project. This includes financial modeling, risk analysis, 
          and resource planning to ensure project is set up for success.
        </p>

        <h3 className="pm-subheading">Detailed Project Scheduling and Coordination</h3>
        <p>
          Our team develops detailed project schedules that outline every phase of your 
          project. We coordinate all activities, ensuring that tasks are completed on time 
          and within budget, while maintaining the highest quality standards.
        </p>

        <h3 className="pm-subheading">Contract and Procurement Management</h3>
        <p>
          We manage the entire procurement process, from selecting vendors to negotiating 
          contracts.
        </p>

        <h3 className="pm-subheading">Quality and Safety Management</h3>
        <p>
          We implement rigorous quality assurance and control measures, as well as 
          comprehensive safety protocols, to ensure that your project adheres to all 
          relevant standards and regulations.
        </p>

        <h3 className="pm-subheading">Risk Management and Mitigation</h3>
        <p>
          Our experts identify potential risks early in the project lifecycle and develop 
          effective mitigation strategies. We continuously monitor and manage risks to 
          prevent delays, cost overruns, and other challenges.
        </p>

        <h3 className="pm-subheading">Cost Control and Budget Management</h3>
        <p>
          We provide accurate cost estimates and our financial oversight ensures that 
          project remains on track and within the allocated budget.
        </p>

        <h3 className="pm-subheading">Stakeholder Communication and Reporting</h3>
        <p>
          We facilitate clear and consistent communication among all project stakeholders. 
          Regular reporting keeps you informed of project progress, potential issues, and 
          key decisions, ensuring transparency and accountability.
        </p>

        <h3 className="pm-subheading">Commissioning and Handover</h3>
        <p>
          Upon project completion, we oversee the commissioning process and ensure a smooth 
          handover to the operations team.
        </p>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner pm-banner"></div>
      </section>

      <h2 className="pm-heading">What You Get</h2>
      <div className="pm-content">
        <ul className="pm-list">
          <li>End to end project support</li>
          <li>Customized strategic planning</li>
          <li>Effective cost and budget control</li>
          <li>Effective communication</li>
          <li>Risk management and mitigation</li>
          <li>Smooth commission and handover</li>
          <li>Expert operational training</li>
        </ul>
      </div>

      
    </section>
  );
};

export default ProjectManagement;