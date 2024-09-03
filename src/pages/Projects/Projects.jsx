import "./style.css";

import acciona from "../../assets/clients/acciona.png";
import avaada from "../../assets/clients/avaada.png";
import continuum from "../../assets/clients/continuum.png";
import fortum from "../../assets/clients/fortum.png";
import images from "../../assets/clients/images.png";
import inox from "../../assets/clients/inox.jpg";
import acme from "../../assets/clients/acme.png";
import alfanar from "../../assets/clients/alfanar.png";
import ampin from "../../assets/clients/ampin.png";
import arcelor from "../../assets/clients/arcelor.png";
import blupin from "../../assets/clients/blupine.png";
import cleantech from "../../assets/clients/cleantech.png";
import edf from "../../assets/clients/edf.jpg";
import enfinity from "../../assets/clients/enfinity.webp";
import hitech from "../../assets/clients/hi-tech.jpg";
import insolare from "../../assets/clients/insolare.webp";
import juniper from "../../assets/clients/juniper.png";
import o2Power from "../../assets/clients/o2Power.png";

const Projects = () => {
    const partners = [
        { logo: acciona, name: "Acciona", description: "Leading global company in renewable energy and sustainable infrastructure." },
        { logo: avaada, name: "Avaada", description: "Integrated energy platform with a strong presence in solar power generation." },
        { logo: continuum, name: "Continuum Green Energy", description: "Leading clean energy solutions provider in India." },
        { logo: fortum, name: "Fortum", description: "Finnish energy company focusing on carbon-free power generation." },
        { logo: images, name: "Fourth Partner Energy", description: "Innovative solutions for renewable energy projects." },
        { logo: inox, name: "INOXGreen", description: "Major player in wind turbine manufacturing and wind farm development." },
        { logo: acme, name: "ACME", description: "Renewable energy company specializing in solar power projects." },
        { logo: alfanar, name: "Alfanar", description: "Global player in power and renewable energy sectors." },
        { logo: ampin, name: "Ampin Energy", description: "Renewable energy developer focusing on solar and wind projects." },
        { logo: arcelor, name: "ArcelorMittal", description: "World's leading steel and mining company, investing in renewable energy." },
        { logo: blupin, name: "BluPine Energy", description: "Renewable energy company focused on utility-scale solar projects." },
        { logo: cleantech, name: "Cleantech", description: "Provider of innovative clean energy solutions." },
        { logo: edf, name: "EDF Renewables", description: "Global leader in low-carbon energy production." },
        { logo: enfinity, name: "Enfinity", description: "International renewable energy company specializing in solar power." },
        { logo: hitech, name: "Hi-Tech", description: "Technology solutions provider for renewable energy projects." },
        { logo: insolare, name: "Insolare", description: "Solar energy solutions provider for residential and commercial sectors." },
        { logo: juniper, name: "Juniper Green Energy", description: "Renewable energy developer with a focus on green hydrogen." },
        { logo: o2Power, name: "O2 Power", description: "Renewable energy platform backed by EQT Infrastructure and Temasek." },
    ];

    return (
        <div className="projects-container">
            <h2 className="partners-heading">
                <span className="partners-text">Our Partners</span>
            </h2>
            <div className="company-info">
                <p>RE4C has already executed/executing more than 100 projects with cumulative ~27 GW of RE assets across India. Our team consists of 100+ FTEs and 50+ off-role professionals working on diverse assignments.</p>
                <p>We are currently assisting the following key clients with their multiple RE projects:</p>
            </div>
            <div className="partners-grid">
                {partners.map((partner, index) => (
                    <div key={index} className="partner-card">
                        <img src={partner.logo} alt={partner.name} />
                        <h3>{partner.name}</h3>
                        <p>{partner.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
