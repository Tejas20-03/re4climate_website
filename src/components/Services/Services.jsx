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
    to: "/solar",
    icon: "fa-solar-panel",
    title: "Solar Energy",
    description:
      "Solar energy harnesses the power of the sun through photovoltaic cells or solar thermal systems, converting sunlight directly into electricity or heat.",
    delay: "0.1s",
  },
  {
    id: 2,
    image: image2,
    to: "/wind",
    icon: "fa-wind",
    title: "Wind Energy",
    description:
      "Wind energy is a clean, renewable power source harnessed by wind turbines that convert the kinetic energy of wind into electricity.",
    delay: "0.3s",
  },
  {
    id: 3,
    image: image3,
    to: "/hybrid",
    icon: "fa-lightbulb",
    title: "Hybrid Energy",
    description:
      "Hybrid energy systems combine multiple renewable energy sources, such as wind and solar power, to maximize efficiency and ensure a more consistent energy supply.",
    delay: "0.5s",
  },
  {
    id: 4,
    image: image4,
    to: "/bess",
    icon: "fa-solar-panel",
    title: "BESS",
    description:
      "Battery Energy Storage Systems (BESS) are crucial for managing energy flow and enhancing reliability within the power grid by storing excess electricity generated from renewable sources.",
    delay: "0.1s",
  },
  {
    id: 5,
    image: image5,
    to: "/green",
    icon: "fa-wind",
    title: "Green Hydrogen",
    description:
      "Green hydrogen is produced using renewable energy sources to power the electrolysis of water, splitting it into hydrogen and oxygen without emitting carbon dioxide.",
    delay: "0.3s",
  },
  {
    id: 6,
    image: image6,
    to: "/nearshore",
    icon: "fa-lightbulb",
    title: "Nearshore/Offshore",
    description:
      "Nearshore and offshore outsourcing involves delegating business processes to companies in nearby or distant countries, respectively, often to capitalize on lower costs and access specialized skills.",
    delay: "0.5s",
  },
];

const ServiceItem = ({ image, to, icon, title, description, delay }) => {
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
          <Link className="small fw-medium" to={to}>
            Learn More
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
