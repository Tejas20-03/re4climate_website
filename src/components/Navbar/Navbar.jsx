import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./style.css";

const HNavbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        setNavBackground(
          window.scrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "transparent"
        );
      } else {
        setNavBackground("rgba(0,0,0,0.8")
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`custom-navbar ${navBackground === "transparent" ? "bg-transparent" : "bg-dark"}`}
      style={{ backgroundColor: navBackground }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/services/energy-yield-assessment">Energy Yield Assessment</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/third-party-inspection">Third Party Inspection</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/material-inspection">Material Inspection</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/construction-management">Construction Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/owners-engineer-services">Owner's Engineer Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/project-management-consultancy">Project Management Consultancy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/detailed-project-report">Detailed Project Report</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/technical-due-digilence">Technical Due Diligence</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/lenders-independent-engineer">Lender's Independent Engineer</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/drone-inspection-services">Drone Inspection Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/solar-epc">Solar EPC</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/project-development-support">Project Development Support</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sectors" id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/solar-energy">Solar Energy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wind-energy">Wind Energy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hybrid-energy">Hybrid Energy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bess">BESS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/green-hydrogen">Green Hydrogen</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nearshore-offshore">
                Nearshore/Offshore
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HNavbar;
