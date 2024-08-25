import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { services } from "./servicesData";
import "./style.css";

function ServicesSection() {
  return (
    <Container fluid className="services-container">
      {services.map((service, index) => (
        <Row
          className={`align-items-center my-5 service-row ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
          key={service.title}
        >
          <Col xs={12} md={6} className="p-4">
            <h2 className="service-title mb-3">{service.title}</h2>
            <p className="service-description mb-4">{service.description}</p>
            <Link to={service.moreInfoLink} className="btn btn-primary">
              Read more
            </Link>
          </Col>
          <Col xs={12} md={6} className="p-0">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="service-image"
              loading="lazy"
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default ServicesSection;
