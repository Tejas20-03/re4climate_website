import React, { useState, useEffect } from 'react';
import './REConsulting.css';

const REConsulting = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.section').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const sections = [
        {
            title: "Energy Yield Assessment (EYA)",
            content: (
                <>
                    <p className="intro-text">At RE4C, we offer a comprehensive suite of Renewable Energy Assessment and Advisory services designed to maximize the efficiency and profitability of your energy projects. Our expertise spans across wind, solar and hybrid energy systems, providing critical insights needed for successful project development and execution.</p>
                    <div className="sub-section">
                        <h3 className="sub-section-title">Our Services Include:</h3>
                        <ul className="service-list">
                            <li><strong>Energy Yield Assessment (EYA)</strong>: Detailed assessments for potential energy production of renewable energy projects.</li>
                            <li><strong>Meso-Mapping and Pre-Feasibility Studies</strong>: High-level overview of potential project sites.</li>
                            <li><strong>Nearshore/Offshore Wind Resource Assessment</strong>: Specialized assessments for coastal and marine environments.</li>
                            <li><strong>Hybrid Advisory Services</strong>: Expert advice for integrating wind, solar, and energy storage systems.</li>
                            <li><strong>Technical Studies</strong>: In-depth analysis including EYA, sizing, clipping, RTC, and BESS.</li>
                            <li><strong>Project Planning and Pre-Developmental Support</strong>: Comprehensive guidance through initial project stages.</li>
                        </ul>
                    </div>
                    <div className="sub-section">
                        <h3 className="sub-section-title">What You Get:</h3>
                        <ul className="benefit-list">
                            <li>Accurate energy yield projection</li>
                            <li>Optimize resources utilization</li>
                            <li>Informed site selection</li>
                            <li>Comprehensive technical support</li>
                            <li>Detailed project planning</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "Third Party Inspection at Project Site",
            content: (
                <>
                    <p className="intro-text">At RE4C, we are dedicated to ensuring the highest standards of quality and safety across your renewable energy projects. We deploy specified personnel to project sites to ensure the project meets quality, safety and compliance requirements.</p>
                    <ul className="service-list">
                        <li>Site quality control and assurance</li>
                        <li>Real time monitoring of project</li>
                        <li>Quality control and expediting the overall progress to meet timelines</li>
                        <li>Technical support and expert opinion</li>
                        <li>Engineering support including document review</li>
                        <li>WTG and BoP audit</li>
                        <li>Asset Inspection and audit</li>
                    </ul>
                </>
            )
        },
        {
            title: "Material Inspection at Vendor Premise",
            content: (
                <>
                    <p className="intro-text">At RE4C, ensuring consistent quality demands specialist inspection, monitoring, expedite and testing. RE4C vendor inspection and surveillance assures Quality, safety, compliance and monitors manufacturing processes, while our expediting services helps to meet overall project timeline and budget.</p>
                    <h3 className="sub-section-title">Vendor Inspection Stages:</h3>
                    <ul className="service-list">
                        <li>Pre-Dispatch Inspection (PDI)/ Factory Acceptance test (FAT)</li>
                        <li>In process/ stage Inspection</li>
                        <li>Type testing</li>
                        <li>Packaging Inspection</li>
                        <li>Prototype testing</li>
                        <li>Drone Inspection</li>
                    </ul>
                </>
            )
        },
        {
            title: "Construction Management",
            content: (
                <>
                    <p className="intro-text">RE4C conducts overall construction management to assure quality and safety work execution by ensuring procedure, standards and compliances, while we expedite timely delivery of materials, proper materials handling and storage, timely work completion.</p>
                    <h3 className="sub-section-title">Site Project Construction Stages:</h3>
                    <ul className="service-list">
                        <li>Initial site survey and investigation</li>
                        <li>Overall construction management</li>
                        <li>Land development</li>
                        <li>Expedite team, tools and machinery mobilization</li>
                        <li>Equipment's erection and installation</li>
                        <li>Pre-commissioning and final commissioning testing</li>
                        <li>Performance guarantee monitoring and testing</li>
                    </ul>
                    <div className="sub-section">
                        <h3 className="sub-section-title">What You Get:</h3>
                        <ul className="benefit-list">
                            <li>Skilled and competent inspectors</li>
                            <li>Traceability of materials</li>
                            <li>Materials management: desk and field expediting and handling</li>
                            <li>Quality assurance and audits</li>
                            <li>Manufacturer´s capability certification (MCC)</li>
                            <li>Early detection of deviations from standard specifications</li>
                            <li>Accurate and timely reporting</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "Owner's Engineer Services",
            content: (
                <>
                    <p className="intro-text">At RE4C, we serve as an independent representative of project owners and lenders, providing essential support throughout the entire project lifecycle. Our commitment to delivering high-quality services ensures project meets all relevant Indian and international standards, significantly reducing the risk of liabilities and addressing potential quality and safety issues.</p>
                    <div className="sub-section">
                        <h3 className="sub-section-title">What You Get:</h3>
                        <ul className="benefit-list">
                            <li>Independent Oversight</li>
                            <li>Compliance Assurance</li>
                            <li>Cost Optimization</li>
                            <li>Risk Mitigation</li>
                            <li>Strong Stakeholder Relationships</li>
                            <li>Expert Support in Planning and Management</li>
                            <li>Enhanced Decision-Making</li>
                        </ul>
                    </div>
                    <div className="sub-section">
                        <h3 className="sub-section-title">Stakeholders:</h3>
                        <ul className="stakeholder-list">
                            <li>Owner</li>
                            <li>Developer</li>
                            <li>EPC</li>
                            <li>Consultants</li>
                            <li>OEMs</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "Project Management Consultancy (PMC)",
            content: (
                <>
                    <p className="intro-text">Offering comprehensive project management consultancy services which are designed to ensure successful project delivery. Our expert team of professionals deliver end to end project support, from planning, design and engineering to final execution and handover.</p>
                    <div className="sub-section">
                        <h3 className="sub-section-title">Our PMC Services Include:</h3>
                        <ul className="service-list">
                            <li><strong>Strategic Planning and Feasibility Analysis</strong></li>
                            <li><strong>Detailed Project Scheduling and Coordination</strong></li>
                            <li><strong>Contract and Procurement Management</strong></li>
                            <li><strong>Quality and Safety Management</strong></li>
                            <li><strong>Risk Management and Mitigation</strong></li>
                            <li><strong>Cost Control and Budget Management</strong></li>
                            <li><strong>Stakeholder Communication and Reporting</strong></li>
                            <li><strong>Commissioning and Handover</strong></li>
                        </ul>
                    </div>
                    <div className="sub-section">
                        <h3 className="sub-section-title">What You Get:</h3>
                        <ul className="benefit-list">
                            <li>End to end project support</li>
                            <li>Customized strategic planning</li>
                            <li>Effective cost and budget control</li>
                            <li>Effective communication</li>
                            <li>Risk management and mitigation</li>
                            <li>Smooth commission and handover</li>
                            <li>Expert operational training</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "Detailed Project Report (DPR)",
            content: (
                <>
                    <p className="intro-text">We offer comprehensive detailed project report (DPR) services that provides through roadmap of renewable energy project, while ensuring every aspect of project planned from project initial concept till completion, ensuring all technical, financial and regulatory requirements are met.</p>
                    <div className="sub-section">
                        <h3 className="sub-section-title">Our DPR Services Include:</h3>
                        <ul className="service-list">
                            <li><strong>Project Feasibility Study</strong></li>
                            <li><strong>Technical Design and Specifications</strong></li>
                            <li><strong>Financial Analysis and Projections</strong></li>
                            <li><strong>Environmental and Social Impact Assessments</strong></li>
                            <li><strong>Regulatory Compliance and Permitting requirements</strong></li>
                            <li><strong>Project Implementation Strategy</strong></li>
                            <li><strong>Risk Assessment and Mitigation Plans</strong></li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "Technical Due Diligence (TDD) and Technical Evaluation and Verification Report (TEVR)",
            content: (
                <>
                    <p className="intro-text">At RE4C, we provide comprehensive TDD and TEVR services and accessing the feasibility, risk and overall quality of projects to make the informed decisions to the stakeholders to access projects are both technically and financially viable.</p>
                    <div className="sub-section">
                        <h3 className="sub-section-title">Our TDD and TEVR Services Include:</h3>
                        <ul className="service-list">
                            <li><strong>Overall project review</strong></li>
                            <li><strong>Site and resources assessment</strong></li>
                            <li><strong>Technology and equipment's evaluation</strong></li>
                            <li><strong>Risk Assessment and Mitigation</strong></li>
                            <li><strong>Regulatory Compliance Review</strong></li>
                            <li><strong>Financial and Economic Analysis</strong></li>
                            <li><strong>Performance Verification</strong></li>
                        </ul>
                    </div>
                    <div className="sub-section">
                        <h3 className="sub-section-title">What You Get:</h3>
                        <ul className="benefit-list">
                            <li>Comprehensive project evaluation</li>
                            <li>Risk Identification and Mitigation</li>
                            <li>Verified performance projection</li>
                            <li>Financial viability analysis</li>
                            <li>Regulatory compliance confidence</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "Lender's Independent Engineer (LIE)",
            content: (
                <>
                    <p className="intro-text">At RE4C, we offer lender's specialized technical advisory services to provide overall project evaluations to make the informed decision to lenders and financial institutions. We are protecting lenders and financial institutions investments, identify and mitigation of risk through our analysis of project's technical, financial and regulatory aspects.</p>
                    <div className="sub-section">
                        <h3 className="sub-section-title">Our LIE/LTA Services Include:</h3>
                        <ul className="service-list">
                            <li><strong>Technical Due Diligence</strong></li>
                            <li><strong>Construction Monitoring</strong></li>
                            <li><strong>Financial and Economic Review</strong></li>
                            <li><strong>Contract Review and Compliance</strong></li>
                            <li><strong>Risk Assessment</strong></li>
                            <li><strong>Performance Monitoring and Reporting</strong></li>
                        </ul>
                    </div>
                    <div className="sub-section">
                        <h3 className="sub-section-title">What You Get:</h3>
                        <ul className="benefit-list">
                            <li>Experienced technical expertise</li>
                            <li>Transparent reporting</li>
                            <li>Commitment to quality and transparency</li>
                            <li>Support across the project life cycle</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "Drone Inspection Services",
            content: (
                <>
                    <p className="intro-text">At RE4C, we provide high resolution imaginary and precise data and conduct comprehensive inspection for renewable energy solar, wind and hybrid projects, while ensuring and reporting work execution met as per approved documents.</p>
                </>
            )
        }
    ];

    return (
        <div className="re-consulting-container">
            <h1 className="main-title">RE Consulting Services</h1>

            {sections.map((section, index) => (
                <div key={index} className="section-wrapper">
                    <section 
                        className="section"
                        onClick={() => toggleSection(index)}
                        tabIndex={0}
                        role="button"
                        aria-expanded={activeSection === index}
                    >
                        <h2 className="section-title">{section.title}</h2>
                        <div className={`section-content ${activeSection === index ? 'active' : ''}`}>
                            {section.content}
                        </div>
                    </section>
                </div>
            ))}
        </div>
    );
};

export default REConsulting;
