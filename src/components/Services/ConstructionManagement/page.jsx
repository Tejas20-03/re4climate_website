import React from 'react';
import './style.css';

const ConstructionManagement = () => {
  return (
    <section className="serviceSection">
      <section className="parallax-1">
        <div className="parallax-inner service">
          <h1>Construction Management</h1>
        </div>
      </section>
      
      <h2>Overview</h2>
      <p>
        RE4C conducts overall construction management to assure quality and safety work execution 
        by ensuring procedure, standards and compliances, while we expedite timely delivery of 
        materials, proper materials handling and storage, timely work completion.
      </p>

      <h2>Construction Stages</h2>
      <ul>
        <li>Initial site survey and investigation</li>
        <li>Overall construction management</li>
        <li>Land development</li>
        <li>Expedite team, tools and machinery mobilization</li>
        <li>Equipment's erection and installation</li>
        <li>Pre-commissioning and final commissioning testing</li>
        <li>Performance guarantee monitoring and testing</li>
      </ul>

      <section className="parallax-2">
        <div className="parallax-inner service"></div>
      </section>

      <h2>What You Get</h2>
      <ul>
        <li>Skilled and competent inspectors</li>
        <li>Traceability of materials</li>
        <li>Materials management: desk and field expediting and handling</li>
        <li>Quality assurance and audits</li>
        <li>Manufacturer´s capability certification (MCC)</li>
        <li>Early detection of deviations from standard specifications</li>
        <li>Accurate and timely reporting</li>
      </ul>
    </section>
  );
};

export default ConstructionManagement;
