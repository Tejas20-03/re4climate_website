import React from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/img-600x400-1.jpg";
import image2 from "../../assets/img-600x400-2.jpg";
import image3 from "../../assets/img-600x400-3.jpg";
import image4 from "../../assets/img-600x400-4.jpg";
import image5 from "../../assets/img-600x400-5.jpg";
import image6 from "../../assets/img-600x400-6.jpg";

// Service data can be stored externally or fetched from an API.
const services = [
  {
    id: 1,
    image: image1,
    icon: "fa-solar-panel",
    title: "Solar Energy",
    description:
      "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    delay: "0.1s",
  },
  {
    id: 2,
    image: image2,
    icon: "fa-wind",
    title: "Wind Energy",
    description:
      "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    delay: "0.3s",
  },
  {
    id: 3,
    image: image3,
    icon: "fa-lightbulb",
    title: "Hybrid Energy",
    description:
      "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    delay: "0.5s",
  },
  {
    id: 4,
    image: image4,
    icon: "fa-solar-panel",
    title: "BESS",
    description:
      "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    delay: "0.1s",
  },
  {
    id: 5,
    image: image5,
    icon: "fa-wind",
    title: "Green Hydrogen",
    description:
      "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    delay: "0.3s",
  },
  {
    id: 6,
    image: image6,
    icon: "fa-lightbulb",
    title: "Nearshore/Offshore",
    description:
      "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    delay: "0.5s",
  },
];

const ServiceItem = ({ image, icon, title, description, delay }) => {
  return (
    <div className={`col-md-6 col-lg-4 wow fadeInUp`} data-wow-delay={delay}>
      <div className="service-item rounded overflow-hidden">
        <img className="img-fluid" src={image} alt={title} />
        <div className="position-relative p-4 pt-0">
          <div className="service-icon">
            <i className={`fa ${icon} fa-3x`} />
          </div>
          <h4 className="mb-3">{title}</h4>
          <p>{description}</p>
          <Link
            className="small fw-medium"
            to={`/${title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            Read More
            <i className="fa fa-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h6 className="text-primary">Our Services</h6>
          <h1 className="mb-4">
            We Are Pioneers In The World Of Renewable Energy
          </h1>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
