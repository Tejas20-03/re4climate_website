import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import "./style.css";

const UNavbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");

  const handleScroll = () => {
    if (window.innerWidth < 768) return;
    window.scrollY > 50
      ? setNavBackground("rgba(0, 0, 0, 0.5)")
      : setNavBackground("transparent");
  };

  useEffect(() => {
    window.addEventListener("resize", handleScroll);
    document.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      style={{ backgroundColor: navBackground }}
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" style={{ height: "70px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "white" }}>
              About
            </Nav.Link>
            <Nav.Link href="/services" style={{ color: "white" }}>
              Services
            </Nav.Link>
            <NavDropdown
              title="Sectors"
              id="basic-nav-dropdown"
              style={{ color: "white" }}
            >
              <NavDropdown.Item
                href="/sectors/renewable"
                style={{ color: "black" }}
              >
                Renewable Energy
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/sectors/solar"
                style={{ color: "black" }}
              >
                Solar Energy
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/careers" style={{ color: "white" }}>
              Careers
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "white" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UNavbar;
