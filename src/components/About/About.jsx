import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image5.jpg";
import image4 from "../../assets/image6.png";
import image5 from "../../assets/image7.jpeg";

function About() {
  return (
    <Container fluid className="px-2px">
      <Row className="align-items-center">
        <Col
          md={6}
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            position: "absolute",
            bottom: "-45%",
          }}
          className="aboveHero border border-5 border-light-subtle"
        >
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image4} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image5} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6} style={{ paddingRight: "10px" }}>
          <div>
            <h2>Welcome to Our Website</h2>
            <p>
              This section can be used to introduce visitors to your website,
              explain what your site offers, or provide any information you
              consider important. Here, you can talk about your mission, vision,
              and values or introduce new products and announcements.
            </p>
            <p>
              Ensure that the text complements the images and adds value to the
              visitor's experience, enhancing both the visual elements and the
              message conveyed.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
