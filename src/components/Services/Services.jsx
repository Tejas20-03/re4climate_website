import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { services } from "./servicesData";
import "./style.css";

function ServicesSection() {
  return (
    <Container fluid className="services-container">
      <Row className="mb-5">
        <Col xs={12}>
          <h2 className="sectors-heading">
            <span className="sectors-text">Our Services</span>
          </h2>
        </Col>
      </Row>
      <Row>
        {services.map((service, index) => (
          <Col xs={12} md={4} key={service.title} className="mb-4">
            <div className="service-card">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="service-image"
                loading="lazy"
              />
              <div className="service-overlay">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.moreInfoLink} className="btn btn-primary">
                  Learn more
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesSection;
