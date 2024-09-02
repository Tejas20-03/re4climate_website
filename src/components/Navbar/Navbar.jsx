import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import "./style.css";

const HNavbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(
        window.scrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "transparent"
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`custom-navbar ${
        navBackground === "transparent" ? "bg-transparent" : "bg-dark"
      }`}
      style={{ backgroundColor: navBackground }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="/services/re-consulting">RE Consulting Services</NavDropdown.Item>
              <NavDropdown.Item href="/services/project-execution">Project Execution and Development Services</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sectors" id="basic-nav-dropdown">
              <NavDropdown.Item href="/solar-energy">Solar Energy</NavDropdown.Item>
              <NavDropdown.Item href="/wind-energy">Wind Energy</NavDropdown.Item>
              <NavDropdown.Item href="/hybrid-energy">Hybrid Energy</NavDropdown.Item>
              <NavDropdown.Item href="/bess">BESS</NavDropdown.Item>
              <NavDropdown.Item href="/green-hydrogen">Green Hydrogen</NavDropdown.Item>
              <NavDropdown.Item href="/nearshore-offshore">
                Nearshore/Offshore
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/careers">Careers</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HNavbar;
