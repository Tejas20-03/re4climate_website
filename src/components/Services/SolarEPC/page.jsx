import React from 'react';
import './style.css';

const SolarEPC = () => {
  return (
    <section className="sepc-section">
      <section className="parallax-1">
        <div className="parallax-inner sepc-banner">
          <h1>Solar EPC</h1>
        </div>
      </section>

      <h2 className="sepc-heading">Overview</h2>
      <div className="sepc-content">
        <p>
          At RE4C, we provide end to end Engineering Procurement and construction (EPC) 
          solution for both roof top and ground mounted solar projects while ensuring 
          that projects to be delivered on time, within budget and highest standards 
          of quality.
        </p>
      </div>

      <h2 className="sepc-heading">Our EPC Services</h2>
      <div className="sepc-content">
        <h3 className="sepc-subheading">Project Feasibility Study and Design</h3>
        <p>
          Our team perform site assessments, energy yield calculations, and system sizing 
          to ensure that your solar project is optimized for maximum efficiency and performance.
        </p>

        <h3 className="sepc-subheading">Engineering and Procurement</h3>
        <p>
          RE4C takes care of all engineering aspects, including structural, electrical, 
          and civil design. We procure high-quality solar panels, inverters, mounting 
          structures, and other critical components from trusted suppliers, ensuring 
          long-term reliability and performance.
        </p>

        <h3 className="sepc-subheading">Construction and Installation</h3>
        <p>
          Our experienced construction team handles the installation of the solar system, 
          whether on rooftops or ground-mounted sites.
        </p>

        <h3 className="sepc-subheading">Grid Connection and Testing</h3>
        <p>
          RE4C ensures seamless integration of solar system with the local grid. We handle 
          all necessary approvals, permits, conduct thorough testing, and ensure that system 
          meets all regulatory requirements for grid connection.
        </p>

        <h3 className="sepc-subheading">Operations and Maintenance (O&M)</h3>
        <p>
          We offer comprehensive O&M services, includes regular monitoring, preventive 
          maintenance, and quick response to any issues, ensuring that system operates 
          at peak efficiency throughout its lifespan.
        </p>
      </div>

      <h2 className="sepc-heading">What You Get</h2>
      <div className="sepc-content">
        <ul className="sepc-list">
          <li>Tailored EPC solutions</li>
          <li>Quality, on time and within budget delivery</li>
          <li>Statuary compliance and approvals</li>
          <li>End to end support</li>
        </ul>
      </div>

      <section className="parallax-2">
        <div className="parallax-inner sepc-banner"></div>
      </section>
    </section>
  );
};

export default SolarEPC;