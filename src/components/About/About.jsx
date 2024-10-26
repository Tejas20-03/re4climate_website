import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image5.jpg";
import image4 from "../../assets/image6.png";
import image5 from "../../assets/image7.jpeg";
import "./style.css";
import grow from "../../assets/grow.png";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={8}
          className="aboveHero carousel-overlay border border-4"
        >
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="First slide" />
              <Carousel.Caption>
                <Link to="/wind-energy" style={{ color: 'white', textDecoration: 'none' }}>
                  <h3>Wind Energy</h3>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="First slide" />
              <Carousel.Caption>
                <Link to="/solar-energy" style={{ color: 'white', textDecoration: 'none' }}>
                  <h3>Solar Energy</h3>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="First slide" />
              <Carousel.Caption>
                <Link to="/hybrid-energy" style={{ color: 'white', textDecoration: 'none' }}>
                  <h3>Hybrid Energy</h3>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image4} alt="First slide" />
              <Carousel.Caption>
                <Link to="/bess" style={{ color: 'white', textDecoration: 'none' }}>
                  <h3>BESS</h3>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image5} alt="First slide" />
              <Carousel.Caption>
                <Link to="/green-hydrogen" style={{ color: 'white', textDecoration: 'none' }}>
                  <h3>Green Hydrogen</h3>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <div
            style={{
              paddingRight: "10px",
              marginBottom: "0",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={grow}
              alt="grow logo"
              style={{ maxWidth: "80%", marginTop: "40px" }}
            />
            <h2 className="center-text">Growing strong over the years</h2>
            <p className="about-text">
              RE4Climate stands out as an engineering consultancy with a robust
              technical foundation, offering comprehensive 360-degree services.
              We are uniquely equipped to successfully deliver projects at any
              point in the project life-cycle, ensuring seamless integration and
              outstanding results.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
