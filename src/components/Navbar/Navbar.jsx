import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import "./style.css";

const HNavbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("rgba(0, 0, 0, 0.5)");
      } else {
        setNavBackground("transparent");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${
        navBackground === "transparent" ? "bg-transparent" : "bg-dark"
      }`}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
            <NavDropdown title="Sectors" id="basic-nav-dropdown">
              <NavDropdown.Item href="/solar">Solar Energy</NavDropdown.Item>
              <NavDropdown.Item href="/wind">Wind Energy</NavDropdown.Item>
              <NavDropdown.Item href="/hybrid">Hybrid Energy</NavDropdown.Item>
              <NavDropdown.Item href="/bess">BESS</NavDropdown.Item>
              <NavDropdown.Item href="/green">Green Hydrogen</NavDropdown.Item>
              <NavDropdown.Item href="/nearshore">Nearshore/Offshore</NavDropdown.Item>
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
