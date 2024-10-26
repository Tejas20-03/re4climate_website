import React from 'react';
import './style.css';

const ThirdPartyInspection = () => {
  return (
    <section className="tpi-section">
      <section className="parallax-1">
        <div className="parallax-inner tpi-banner">
          <h1>Third Party Inspection</h1>
        </div>
      </section>

      <h2 className="tpi-heading">Overview</h2>
      <div className="tpi-content">
        <p>
          At RE4C, we are dedicated to ensuring the highest standards of quality and 
          safety across your renewable energy projects. We deploy specified personnel 
          to project sites to ensure the project meets quality, safety and compliance 
          requirements.
        </p>
      </div>

      <h2 className="tpi-heading">Our Services</h2>
      <div className="tpi-content">
        <ul className="tpi-list">
          <li>Site quality control and assurance</li>
          <li>Real time monitoring of project</li>
          <li>Quality control and expediting the overall progress to meet timelines</li>
          <li>Technical support and expert opinion</li>
          <li>Engineering support including document review</li>
          <li>WTG and BoP audit</li>
          <li>Asset Inspection and audit</li>
        </ul>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner tpi-banner"></div>
      </section>
    </section>
  );
};

export default ThirdPartyInspection;