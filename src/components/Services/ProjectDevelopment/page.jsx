import React from 'react';
import './style.css';

const ProjectDevelopment = () => {
  return (
    <section className="pd-section">
      <section className="parallax-1">
        <div className="parallax-inner pd-banner">
          <h1>Project Development</h1>
        </div>
      </section>

      <h2 className="pd-heading">Overview</h2>
      <div className="pd-content">
        <p>
          At RE4C, we provide following services related to Wind/Solar/Hybrid Project 
          Development across various sites in India.
        </p>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner pd-banner"></div>
      </section>

      <h2 className="pd-heading">Our Services</h2>
      <div className="pd-content">
        <ul className="pd-list">
          <li>Identification of Project Site</li>
          <li>Assisting in project land survey and procurement</li>
          <li>Assisting in obtaining approvals</li>
          <li>Other development support</li>
          <li>Tendering & Procurement assistance</li>
          <li>BoP execution</li>
        </ul>
      </div>

      
    </section>
  );
};

export default ProjectDevelopment;
