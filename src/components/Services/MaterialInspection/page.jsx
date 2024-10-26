import React from 'react';
import './style.css';

const MaterialInspection = () => {
  return (
    <section className="mi-section">
      <section className="parallax-1">
        <div className="parallax-inner mi-banner">
          <h1>Material Inspection</h1>
        </div>
      </section>

      <h2 className="mi-heading">Overview</h2>
      <div className="mi-content">
        <p>
          At RE4C, ensuring consistent quality demands specialist inspection, monitoring, 
          expedite and testing. RE4C vendor inspection and surveillance assures Quality, 
          safety, compliance and monitors manufacturing processes, while our expediting 
          services helps to meet overall project timeline and budget.
        </p>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner mi-banner"></div>
      </section>

      <h2 className="mi-heading">Vendor Inspection Stages</h2>
      <div className="mi-content">
        <ul className="mi-list">
          <li>Pre-Dispatch Inspection (PDI)/ Factory Acceptance test (FAT)</li>
          <li>In process/ stage Inspection</li>
          <li>Type testing</li>
          <li>Packaging Inspection</li>
          <li>Prototype testing</li>
          <li>Drone Inspection</li>
        </ul>
      </div>

      
    </section>
  );
};

export default MaterialInspection;
