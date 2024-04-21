import React from "react";
import { Link } from "react-router-dom";
import Gallery1 from "../../assets/gallery-1.jpg";
import Gallery2 from "../../assets/gallery-2.jpg";
import Gallery3 from "../../assets/gallery-3.jpg";
import Gallery4 from "../../assets/gallery-4.jpg";
import Gallery5 from "../../assets/gallery-5.jpg";
import Gallery6 from "../../assets/gallery-6.jpg";

const footerData = {
  address: {
    location:
      "2406B, The Iconic Corenthum, 41, Block Link, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301",
    phone: "+91 9953951266",
    email: "info@re4climate.com",
  },
  links: [
    { to: "/aboutUs", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/service", label: "Our Services" },
  ],
  socialLinks: [
    { to: "/", icon: "facebook-f" },
    { to: "https://www.linkedin.com/company/re4climate", icon: "linkedin-in" },
  ],
  galleryImages: [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6],
};

const Footer = () => {
  const { address, links, socialLinks, galleryImages } = footerData;

  return (
    <div
      className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Address</h5>
            <p className="mb-2 text-white">
              <i className="fa fa-map-marker-alt me-3" />
              {address.location}
            </p>
            <p className="mb-2 text-white">
              <i className="fa fa-phone-alt me-3" />
              {address.phone}
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              {address.email}
            </p>
            <div className="d-flex pt-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  className={`btn btn-square btn-outline-light btn-social ${link.icon}`}
                  to={link.to}
                >
                  <i className={`fab fa-${link.icon}`} />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            {links.map((link, index) => (
              <Link
                key={index}
                className="btn btn-link"
                style={{ textDecoration: "none" }}
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Project Gallery</h5>
            <div className="row g-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="col-4">
                  <img
                    className="img-fluid rounded"
                    src={image}
                    alt={`Gallery ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white">
            ©{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              RE4Climate
            </Link>
            , All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
