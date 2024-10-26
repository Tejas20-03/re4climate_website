import React from 'react';
import './style.css';

const DroneInspection = () => {
  return (
    <section className="drone-section">
      <section className="parallax-1">
        <div className="parallax-inner drone-banner">
          <h1>Drone Inspection</h1>
        </div>
      </section>

      <h2 className="drone-heading">Overview</h2>
      <div className="drone-content">
        <p>
          At RE4C, we provide high resolution imaginary and precise data and conduct
          comprehensive inspection for renewable energy solar, wind and hybrid projects,
          while ensuring and reporting work execution met as per approved documents.
        </p>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner drone-banner"></div>
      </section>

      <h2 className="drone-heading">Our Services</h2>
      <div className="drone-content">
        <h3 className="drone-subheading">Comprehensive Inspection Services</h3>
        <ul className="drone-list">
          <li>High-resolution aerial imagery</li>
          <li>Thermal imaging for solar panels</li>
          <li>Wind turbine blade inspection</li>
          <li>Site progress monitoring</li>
          <li>3D mapping and modeling</li>
          <li>Detailed inspection reports</li>
        </ul>
      </div>


    </section>
  );
};

export default DroneInspection;
