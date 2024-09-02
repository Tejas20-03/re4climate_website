import React, { useState, useEffect } from 'react';
import styles from './ProjectExecution.module.css';
import solarepc from '../../../assets/solarepc.jpeg';
import projectdevelopmentsupport from '../../../assets/projectSupport.jpg';

export const ProjectExecution = () => {
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
            title: "Solar EPC",
            image: solarepc,
            content: (
                <>
                    <h2>Solar EPC</h2>
                    <p>At RE4C, we provide end-to-end Engineering Procurement and Construction (EPC) solutions for both rooftop and ground-mounted solar projects, ensuring timely delivery, budget adherence, and the highest quality standards.</p>
                    <ul>
                        <li>Project Feasibility Study and Design</li>
                        <li>Engineering and Procurement</li>
                        <li>Construction and Installation</li>
                        <li>Grid Connection and Testing</li>
                        <li>Operations and Maintenance (O&M)</li>
                    </ul>
                </>
            )
        },
        {
            title: "Project Development Support",
            image: projectdevelopmentsupport,
            content: (
                <>
                    <h2>Project Development Support</h2>
                    <p>RE4C offers comprehensive services for Wind/Solar/Hybrid Project Development across various sites in India:</p>
                    <ul>
                        <li>Identification of Project Site</li>
                        <li>Assistance in project land survey and procurement</li>
                        <li>Support in obtaining approvals</li>
                        <li>Other development support</li>
                        <li>Tendering & Procurement assistance</li>
                        <li>BoP execution</li>
                    </ul>
                </>
            )
        }
    ];

    return (
        <div className={styles['pe-container']}>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`${styles['pe-section']} ${activeSection === index ? styles['active'] : activeSection !== null && !isMobile ? styles['shrink'] : ''}`}
                    onClick={() => toggleSection(index)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={activeSection === index}
                >
                    <img src={section.image} alt={section.title} className={styles['pe-section-image']} />
                    <div className={styles['pe-section-heading']}>{section.title}</div>
                    <div className={styles['pe-section-content']}>{section.content}</div>
                </div>
            ))}
        </div>
    );
};
