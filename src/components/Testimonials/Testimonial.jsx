import './style.css'

import acciona from '../../assets/clients/acciona.png';
import avaada from '../../assets/clients/avaada.png';
import continuum from '../../assets/clients/continuum.png';
import fortum from '../../assets/clients/fortum.png';
import images from '../../assets/clients/images.png';
import inox from '../../assets/clients/inox.jpg';


const Testimonial = () => {
    const partnerLogos = [acciona, avaada, continuum, fortum, images, inox];
    return (
        <div className="testimonials-container">
            <h2 className="partners-heading">
                <span className="partners-text">Our Partners</span>
            </h2>
            <div className="logo-slider">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                    <img key={index} src={logo} alt={`Partner ${index % partnerLogos.length + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default Testimonial;

