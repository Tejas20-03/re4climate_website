import React from 'react';
import './style.css';

const EnergyYieldAssessment = () => {
  return (
    <section className="eya-section">
      <section className="parallax-1">
        <div className="parallax-inner eya-banner">
          <h1>Energy Yield Assessment</h1>
        </div>
      </section>

      <h2 className="eya-heading">Overview</h2>
      <div className="eya-content">
        <p>
          At RE4C, we offer a comprehensive suite of Renewable Energy Assessment and Advisory 
          services designed to maximize the efficiency and profitability of your energy projects. 
          Our expertise spans across wind, solar and hybrid energy systems, providing with the 
          critical insights needed for successful project development and execution.
        </p>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner eya-banner"></div>
      </section>

      <h2 className="eya-heading">Our Services</h2>
      <div className="eya-content">
        <h3 className="eya-subheading">Energy Yield Assessment (EYA)</h3>
        <p>
          We conduct detailed Energy Yield Assessments to estimate the potential energy production 
          of renewable energy projects viz. solar, wind and hybrids. Our analysis includes robust 
          assessment which determines the availability and quality of energy resource, site assessment, 
          technology assessment, optimize project design which ensure efficiency and profitability of the project.
        </p>

        <h3 className="eya-subheading">Meso-Mapping and Pre-Feasibility Studies</h3>
        <p>
          We offer meso-mapping services and pre-feasibility studies to provide a high-level 
          overview of potential project sites.
        </p>

        <h3 className="eya-subheading">Nearshore/Offshore Wind Resource Assessment</h3>
        <p>
          Our specialized assessments for nearshore and offshore wind projects evaluate wind resources 
          in coastal and marine environments. We provide accurate data and analysis to support the 
          planning and development of offshore wind farms, ensuring optimal site selection and project performance.
        </p>

        <h3 className="eya-subheading">Hybrid Advisory Services</h3>
        <p>
          We offer expert advisory services for hybrid energy projects, integrating wind, solar, 
          and energy storage systems and helps our client's to design and implement hybrid solutions 
          that maximize energy efficiency, reduce costs, and enhance grid stability.
        </p>

        <h3 className="eya-subheading">Technical Studies (EYA, Sizing, Clipping, RTC, BESS)</h3>
        <p>
          RE4C provides in-depth technical studies, including Energy Yield Assessment (EYA), system sizing, 
          clipping analysis, Round-The-Clock (RTC) energy solutions, and Battery Energy Storage Systems (BESS), 
          which support the design and optimization of renewable energy projects, ensuring they meet performance 
          and reliability targets.
        </p>

        <h3 className="eya-subheading">Project Planning and Pre-Developmental Support</h3>
        <p>
          Offering comprehensive planning and pre-developmental support, guiding through the initial stages of project. 
          We assist with site selection, permitting, grid connection studies, and more, ensuring the project is 
          well-prepared for successful execution.
        </p>
      </div>

      <h2 className="eya-heading">What You Get</h2>
      <div className="eya-content">
        <ul className="eya-list">
          <li>Accurate energy yield projection</li>
          <li>Optimize resources utilization</li>
          <li>Informed site selection</li>
          <li>Comprehensive technical support</li>
          <li>Detailed project planning</li>
        </ul>
      </div>

      
    </section>
  );
};

export default EnergyYieldAssessment;