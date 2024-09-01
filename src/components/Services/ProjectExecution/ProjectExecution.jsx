import React from 'react';
import './ProjectExecution.css';

export const ProjectExecution = () => {
    return (
        <div className="project-execution-container">
            <h1 className="main-title">Project Execution</h1>
            
            <section className="section">
                <h2 className="section-title">1.1. Solar EPC</h2>
                <div className="section-content">
                    <p className="intro-text">At RE4C, we provide end-to-end Engineering Procurement and Construction (EPC) solutions for both rooftop and ground-mounted solar projects, ensuring timely delivery, budget adherence, and the highest quality standards.</p>
                    
                    <div className="sub-section">
                        <h3 className="sub-section-title">Our EPC Services Include:</h3>
                        <ul className="service-list">
                            <li><strong>Project Feasibility Study and Design</strong>: Site assessments, energy yield calculations, and system optimization.</li>
                            <li><strong>Engineering and Procurement</strong>: Comprehensive engineering and high-quality component sourcing.</li>
                            <li><strong>Construction and Installation</strong>: Expert installation for rooftop and ground-mounted systems.</li>
                            <li><strong>Grid Connection and Testing</strong>: Seamless grid integration and regulatory compliance.</li>
                            <li><strong>Operations and Maintenance (O&M)</strong>: Ongoing support for peak system efficiency.</li>
                        </ul>
                    </div>

                    <div className="sub-section">
                        <h3 className="sub-section-title">What You Get:</h3>
                        <ul className="benefit-list">
                            <li>Tailored EPC solutions</li>
                            <li>Quality, on-time, and within-budget delivery</li>
                            <li>Statutory compliance and approvals</li>
                            <li>End-to-end support</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">1.2. Project Development Support</h2>
                <div className="section-content">
                    <p className="intro-text">RE4C offers comprehensive services for Wind/Solar/Hybrid Project Development across various sites in India:</p>
                    <ul className="support-list">
                        <li>Identification of Project Site</li>
                        <li>Assistance in project land survey and procurement</li>
                        <li>Support in obtaining approvals</li>
                        <li>Other development support</li>
                        <li>Tendering & Procurement assistance</li>
                        <li>BoP execution</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};
