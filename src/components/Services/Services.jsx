import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../assets/img-600x400-1.jpg";
import image2 from "../../assets/img-600x400-2.jpg";
import image3 from "../../assets/image5.jpg";
import image4 from "../../assets/image6.png";
import image5 from "../../assets/img-600x400-5.jpg";
import "./style.css";

const services = [
  {
    title: "Solar Energy",
    description:
      "With a robust history of successfully completing numerous projects across the globe, RE4Climate demonstrates exceptional proficiency and expertise in project execution. As major corporations and leading financial institutions recognize the lucrative potential of the solar industry and are increasingly willing to invest in solar projects, the future for Solar PV looks exceedingly promising. This growing interest from influential market players not only underscores the viability of solar energy as a sustainable investment but also propels the industry toward greater innovation and expansion.",
    imageUrl: image1,
    moreInfoLink: "/solar-energy",
  },
  {
    title: "Wind Energy",
    description:
      "RE4Climate has earned considerable acclaim in the wind power sector, thanks to its profound expertise and successful project implementations. Recent changes in government policies, combined with ongoing advancements in wind turbine technology, have substantially increased the attractiveness of developing wind farms at multiple scales. This dynamic environment not only promotes the expansion of wind energy projects but also boosts their efficiency and viability, positioning SgurrEnergy at the forefront of this evolving market.",
    imageUrl: image2,
    moreInfoLink: "/wind-energy",
  },
  {
    title: "Hybrid Energy",
    description:
      "RE4Climate possesses a deep understanding of the rapidly evolving energy landscape. With the ever-changing configurations and mix of various power generation sources, numerous challenges arise. To address the intermittent nature of Renewable Energy Sources (RES), hybrid solutions have been developed. These innovative approaches effectively combine different energy forms to ensure a more stable and reliable power supply, showcasing RE4Climate's adaptability and forward-thinking in navigating the complexities of modern energy systems.",
    imageUrl: image3,
    moreInfoLink: "/hybrid-energy",
  },
  {
    title: "BESS",
    description:
      "RE4Climate's storage analysis division leverages cutting-edge technology and sophisticated software packages to conduct detailed stationary storage analysis. Maintaining and managing the grid presents a formidable challenge; the demands and difficulties it introduces are substantial and require thorough and timely solutions. This division’s expertise ensures that RE4Climate can effectively address these complex challenges, supporting the stability and efficiency of grid operations.",
    imageUrl: image4,
    moreInfoLink: "/bess",
  },
  {
    title: "Green Hydrogen",
    description:
      "Hydrogen is celebrated as a fuel of the future, holding immense potential as an energy source. As the most flammable element on Earth, engineering solutions for its use present unique challenges. However, hydrogen stands out as a stellar alternative to conventional fossil fuels, offering the significant environmental advantage of emitting only water as a by-product upon combustion. This attribute makes it an attractive option for sustainable energy initiatives seeking to reduce global carbon emissions.",
    imageUrl: image5,
    moreInfoLink: "/green-hydrogen",
  },
];

function ServicesSection() {
  return (
    <Container fluid>
      {services.map((service, index) => (
        <Row
          className="align-items-center my-4 service-row"
          key={service.title}
        >
          <Col
            xs={12}
            md={6}
            className={`p-4 ${index % 2 !== 0 && "order-md-2"}`}
          >
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <Link to={service.moreInfoLink} className="btn btn-primary">
              Read more
            </Link>
          </Col>
          <Col
            xs={12}
            md={6}
            className={`p-0 ${index % 2 !== 0 && "order-md-1"}`}
          >
            <img
              src={service.imageUrl}
              alt={service.title}
              className="service-image"
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default ServicesSection;
