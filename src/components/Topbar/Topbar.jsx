import React from "react";
import { Link } from "react-router-dom";

// Data for dynamic rendering of info and social links
const contactInfo = [
  { icon: "fa-map-marker-alt", text: "2406B, Sector 46, Noida, Uttar Pradesh" },
  { icon: "far fa-clock", text: "Mon - Fri : 09.00 AM - 05.00 PM" },
];

const socialLinks = [
  { icon: "fab fa-facebook-f", to: "/" },
  { icon: "fab fa-twitter", to: "/" },
  { icon: "fab fa-linkedin-in", to: "/" },
  { icon: "fab fa-instagram", to: "/", border: false },
];

const ContactItem = ({ icon, text }) => (
  <div className="h-100 d-inline-flex align-items-center me-4">
    <small className={`${icon} text-primary me-2`}></small>
    <small>{text}</small>
  </div>
);

const SocialLink = ({ to, icon, border }) => (
  <Link
    className={`btn btn-square btn-link rounded-0 border-0 ${
      border ? "border-end border-secondary" : ""
    }`}
    to={to}
  >
    <i className={icon}></i>
  </Link>
);

const Topbar = () => {
  return (
    <div className="container-fluid bg-bark p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          {contactInfo.map((info, index) => (
            <ContactItem key={index} {...info} />
          ))}
        </div>
        <div className="col-lg-5 px-5 text-end">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              {...link}
              border={index < socialLinks.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
