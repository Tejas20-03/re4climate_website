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
              <NavDropdown.Item as={Link} to="/services/re-consulting">RE Consulting Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/project-execution">Project Execution and Development Services</NavDropdown.Item>
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
