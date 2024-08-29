import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";
import { Link } from "react-router-dom";
import { BoxIconElement } from "boxicons";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="logo-box">
                    <a href="#">
                      <img src={logo} style={{ width: "80px" }} alt="" />
                    </a>
                  </figure>
                  <div className="text">
                    <p>
                      RE4Climate, founded in early 2021, is a pioneering entity
                      committed to driving impactful change in the renewable
                      energy sector. With a robust portfolio of services, we
                      specialize in offering comprehensive solutions aimed at
                      fostering sustainable development and mitigating climate
                      change challenges.
                    </p>
                  </div>
                  <ul className="footer-social">
                    <li>
                      <a href="https://www.linkedin.com/company/re4climate/">
                        <box-icon type="logo" name="facebook-circle"></box-icon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/re4climate/">
                        <box-icon type="logo" name="twitter"></box-icon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/re4climate/">
                        <box-icon type="logo" name="instagram"></box-icon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/re4climate/">
                        <box-icon type="logo" name="linkedin"></box-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-title">Services</div>
                  <ul className="list">
                    <li>
                      <a href="/" className="text-decoration-none">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-decoration-none">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-decoration-none">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="text-decoration-none">
                        Career
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
                <div className="contact-widget footer-widget">
                  <div className="footer-title">Contact</div>
                  <div className="text">
                    <p>
                      2406B, The Iconic Corenthum, 41, Block A, Industrial Area,
                      Sector 62, Noida, Uttar Pradesh 201301
                    </p>
                    <p>+91 9953951266</p>
                    <p>info@re4climate.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="copyright">
                <a href="#" className="text-decoration-none">
                  RE4Climate
                </a>{" "}
                &copy; 2024 All Right Reserved
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <ul className="footer-nav">
                <li>
                  <a href="#" className="text-decoration-none">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
