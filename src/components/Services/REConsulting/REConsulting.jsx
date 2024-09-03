import React, { useState, useEffect } from 'react';
import styles from './REConsulting.module.css';
import eya from '../../../assets/energyyeildassessment.jpg'
import tdd from '../../../assets/tdd.jpg'
import tpa from '../../../assets/thirdpartyinspection.jpg'
import cm from '../../../assets/constructionmanagement.jpg'
import dpr from '../../../assets/detailedprojectreport.jpg'
import lie from '../../../assets/lie.jpg'
import mi from '../../../assets/materialinspection.jpg'
import oes from '../../../assets/ownerengineerservice.png'
import pmc from '../../../assets/pmc.jpg'
import di from '../../../assets/drone.jpg'

const REConsulting = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    const sections = [
        {
            title: "Energy Yield Assessment (EYA)",
            image: eya, // Replace with actual image import
            content: (
                <>
                    <h2>Energy Yield Assessment (EYA)</h2>
                    <p>At RE4C, we offer a comprehensive suite of Renewable Energy Assessment and Advisory services designed to maximize the efficiency and profitability of your energy projects. Our expertise spans across wind, solar and hybrid energy systems, providing critical insights needed for successful project development and execution.</p>
                    <ul>
                        <li>Energy Yield Assessment (EYA): Detailed assessments for potential energy production of renewable energy projects.</li>
                        <li>Meso-Mapping and Pre-Feasibility Studies: High-level overview of potential project sites.</li>
                        <li>Nearshore/Offshore Wind Resource Assessment: Specialized assessments for coastal and marine environments.</li>
                        <li>Hybrid Advisory Services: Expert advice for integrating wind, solar, and energy storage systems.</li>
                        <li>Technical Studies: In-depth analysis including EYA, sizing, clipping, RTC, and BESS.</li>
                        <li>Project Planning and Pre-Developmental Support: Comprehensive guidance through initial project stages.</li>
                    </ul>
                </>
            )
        },
        {
            title: "Third Party Inspection at Project Site",
            image: tpa, // Replace with actual image import
            content: (
                <>
                    <h2>Third Party Inspection at Project Site</h2>
                    <p>At RE4C, we are dedicated to ensuring the highest standards of quality and safety across your renewable energy projects. We deploy specified personnel to project sites to ensure the project meets quality, safety and compliance requirements.</p>
                    <ul>
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
            image: mi, // Replace with actual image import
            content: (
                <>
                    <h2>Material Inspection at Vendor Premise</h2>
                    <p>At RE4C, ensuring consistent quality demands specialist inspection, monitoring, expedite and testing. RE4C vendor inspection and surveillance assures Quality, safety, compliance and monitors manufacturing processes, while our expediting services helps to meet overall project timeline and budget.</p>
                    <h3>Vendor Inspection Stages:</h3>
                    <ul>
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
            image: cm, // Replace with actual image import
            content: (
                <>
                    <h2>Construction Management</h2>
                    <p>RE4C conducts overall construction management to assure quality and safety work execution by ensuring procedure, standards and compliances, while we expedite timely delivery of materials, proper materials handling and storage, timely work completion.</p>
                    <h3>Site Project Construction Stages:</h3>
                    <ul>
                        <li>Initial site survey and investigation</li>
                        <li>Overall construction management</li>
                        <li>Land development</li>
                        <li>Expedite team, tools and machinery mobilization</li>
                        <li>Equipment's erection and installation</li>
                        <li>Pre-commissioning and final commissioning testing</li>
                        <li>Performance guarantee monitoring and testing</li>
                    </ul>
                </>
            )
        },
        {
            title: "Owner's Engineer Services",
            image: oes, // Replace with actual image import
            content: (
                <>
                    <h2>Owner's Engineer Services</h2>
                    <p>At RE4C, we serve as an independent representative of project owners and lenders, providing essential support throughout the entire project lifecycle. Our commitment to delivering high-quality services ensures project meets all relevant Indian and international standards, significantly reducing the risk of liabilities and addressing potential quality and safety issues.</p>
                    <h3>What You Get:</h3>
                    <ul>
                        <li>Independent Oversight</li>
                        <li>Compliance Assurance</li>
                        <li>Cost Optimization</li>
                        <li>Risk Mitigation</li>
                        <li>Strong Stakeholder Relationships</li>
                        <li>Expert Support in Planning and Management</li>
                        <li>Enhanced Decision-Making</li>
                    </ul>
                </>
            )
        },
        {
            title: "Project Management Consultancy (PMC)",
            image: pmc, // Replace with actual image import
            content: (
                <>
                    <h2>Project Management Consultancy (PMC)</h2>
                    <p>Offering comprehensive project management consultancy services which are designed to ensure successful project delivery. Our expert team of professionals deliver end to end project support, from planning, design and engineering to final execution and handover.</p>
                    <h3>Our PMC Services Include:</h3>
                    <ul>
                        <li>Strategic Planning and Feasibility Analysis</li>
                        <li>Detailed Project Scheduling and Coordination</li>
                        <li>Contract and Procurement Management</li>
                        <li>Quality and Safety Management</li>
                        <li>Risk Management and Mitigation</li>
                        <li>Cost Control and Budget Management</li>
                        <li>Stakeholder Communication and Reporting</li>
                        <li>Commissioning and Handover</li>
                    </ul>
                </>
            )
        },
        {
            title: "Detailed Project Report (DPR)",
            image: dpr, // Replace with actual image import
            content: (
                <>
                    <h2>Detailed Project Report (DPR)</h2>
                    <p>We offer comprehensive detailed project report (DPR) services that provides through roadmap of renewable energy project, while ensuring every aspect of project planned from project initial concept till completion, ensuring all technical, financial and regulatory requirements are met.</p>
                    <h3>Our DPR Services Include:</h3>
                    <ul>
                        <li>Project Feasibility Study</li>
                        <li>Technical Design and Specifications</li>
                        <li>Financial Analysis and Projections</li>
                        <li>Environmental and Social Impact Assessments</li>
                        <li>Regulatory Compliance and Permitting requirements</li>
                        <li>Project Implementation Strategy</li>
                        <li>Risk Assessment and Mitigation Plans</li>
                    </ul>
                </>
            )
        },
        {
            title: "Technical Due Diligence (TDD) and Technical Evaluation and Verification Report (TEVR)",
            image: tdd, // Replace with actual image import
            content: (
                <>
                    <h2>Technical Due Diligence (TDD) and Technical Evaluation and Verification Report (TEVR)</h2>
                    <p>At RE4C, we provide comprehensive TDD and TEVR services and accessing the feasibility, risk and overall quality of projects to make the informed decisions to the stakeholders to access projects are both technically and financially viable.</p>
                    <h3>Our TDD and TEVR Services Include:</h3>
                    <ul>
                        <li>Overall project review</li>
                        <li>Site and resources assessment</li>
                        <li>Technology and equipment's evaluation</li>
                        <li>Risk Assessment and Mitigation</li>
                        <li>Regulatory Compliance Review</li>
                        <li>Financial and Economic Analysis</li>
                        <li>Performance Verification</li>
                    </ul>
                </>
            )
        },
        {
            title: "Lender's Independent Engineer (LIE)",
            image: lie, // Replace with actual image import
            content: (
                <>
                    <h2>Lender's Independent Engineer (LIE)</h2>
                    <p>At RE4C, we offer lender's specialized technical advisory services to provide overall project evaluations to make the informed decision to lenders and financial institutions. We are protecting lenders and financial institutions investments, identify and mitigation of risk through our analysis of project's technical, financial and regulatory aspects.</p>
                    <h3>Our LIE/LTA Services Include:</h3>
                    <ul>
                        <li>Technical Due Diligence</li>
                        <li>Construction Monitoring</li>
                        <li>Financial and Economic Review</li>
                        <li>Contract Review and Compliance</li>
                        <li>Risk Assessment</li>
                        <li>Performance Monitoring and Reporting</li>
                    </ul>
                </>
            )
        },
        {
            title: "Drone Inspection Services",
            image: di, // Replace with actual image import
            content: (
                <>
                    <h2>Drone Inspection Services</h2>
                    <p>At RE4C, we provide high resolution imaginary and precise data and conduct comprehensive inspection for renewable energy solar, wind and hybrid projects, while ensuring and reporting work execution met as per approved documents.</p>
                </>
            )
        }
    ];

    return (
        <div className={styles['re-container']}>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`${styles['re-section']} ${activeSection === index ? styles['active'] : activeSection !== null && !isMobile ? styles['shrink'] : ''}`}
                    onClick={() => toggleSection(index)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={activeSection === index}
                >
                    <img src={section.image} alt={section.title} className={styles['re-section-image']} />
                    <div className={styles['re-section-heading']}>{section.title}</div>
                    <div className={styles['re-section-content']}>{section.content}</div>
                </div>
            ))}
        </div>
    );
};

export default REConsulting;