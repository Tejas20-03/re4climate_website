import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(true); // This will always collapse the navbar on click
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0"
        style={{ position: "sticky", top: 0, zIndex: 1020 }}
      >
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
          onClick={handleNavCollapse}
        >
          RE4Climate
        </NavLink>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-expanded={!isNavCollapsed}
          aria-controls="navbarCollapse"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink
              to="/"
              exact
              className="nav-item nav-link"
              onClick={handleNavCollapse}
            >
              Home
            </NavLink>
            <a
              href="#about"
              className="nav-item nav-link"
              onClick={handleNavCollapse}
            >
              About
            </a>
            <NavLink
              to="/service"
              className="nav-item nav-link"
              onClick={handleNavCollapse}
            >
              Service
            </NavLink>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Sector
              </a>
              <div className="dropdown-menu bg-light m-0">
                <NavLink
                  to="/wind"
                  className="dropdown-item"
                  onClick={handleNavCollapse}
                >
                  Wind Energy
                </NavLink>
                <NavLink
                  to="/solar"
                  className="dropdown-item"
                  onClick={handleNavCollapse}
                >
                  Solar Energy
                </NavLink>
                <NavLink
                  to="/hybrid"
                  className="dropdown-item"
                  onClick={handleNavCollapse}
                >
                  Hybrid Energy
                </NavLink>
                <NavLink
                  to="/bess"
                  className="dropdown-item"
                  onClick={handleNavCollapse}
                >
                  BESS
                </NavLink>
                <NavLink
                  to="/green"
                  className="dropdown-item"
                  onClick={handleNavCollapse}
                >
                  Green Hydrogen
                </NavLink>
                <NavLink
                  to="/nearshore"
                  className="dropdown-item"
                  onClick={handleNavCollapse}
                >
                  Nearshore/Offshore
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/contact"
              className="nav-item nav-link"
              onClick={handleNavCollapse}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
