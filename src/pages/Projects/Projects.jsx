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
    
    const partnerLogos = [
        acciona,
        avaada,
        continuum,
        fortum,
        images,
        inox,
        acme,
        alfanar,
        ampin,
        arcelor,
        blupin,
        cleantech,
        edf,
        enfinity,
        hitech,
        insolare,
        juniper,
        o2Power,
    ];
    return (
        <div className="testimonials-container">
            <h2 className="partners-heading">
                <span className="partners-text">Our Partners</span>
            </h2>
            <div className="company-info">
                <p>RE4C has already executed/executing more than 100 projects with cumulative ~27 GW of RE assets across India. Our team consists of 100+ FTEs and 50+ off-role professionals working on diverse assignments.</p>
                <p>We are currently assisting the following key clients with their multiple RE projects:</p>
            </div>
            <div className="logo-slider">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Partner ${(index % partnerLogos.length) + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;