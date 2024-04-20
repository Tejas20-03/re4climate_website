import React from "react";
import { Link } from "react-router-dom";
import team1 from "../../assets/team-1.jpg";
import team3 from "../../assets/team-3.jpg";
import team2 from "../../assets/team-2.jpg";
import aboutImage from "../../assets/about.jpg";

// Component for displaying a team member
const TeamMember = ({ src, name, designation }) => (
  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div className="team-item rounded overflow-hidden">
      <div className="d-flex">
        <img className="img-fluid w-75" src={src} alt={name} />
        <div className="team-social w-25">
          <Link
            className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
            to="/facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
            to="/twitter"
          >
            <i className="fab fa-twitter" />
          </Link>
          <Link
            className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
            to="/instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h5>{name}</h5>
        <span>{designation}</span>
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  const teamMembers = [
    {
      src: team1,
      name: "Full Name",
      designation: "Designation",
      delay: "0.1s",
    },
    {
      src: team2,
      name: "Full Name",
      designation: "Designation",
      delay: "0.3s",
    },
    {
      src: team3,
      name: "Full Name",
      designation: "Designation",
      delay: "0.5s",
    },
  ];

  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5"
        style={{ backgroundColor: "#C0DEFF" }}
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 ps-lg-0 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={aboutImage}
                  style={{ objectFit: "cover" }}
                  alt="About Us"
                />
              </div>
            </div>
            <div
              className="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">About Us</h6>
                <h1 className="mb-4">
                  5+ Years Experience In Solar & Renewable Energy Industry
                </h1>
                <p>
                  RE4Climate, founded in early 2021, is a pioneering entity
                  committed to driving impactful change in the renewable energy
                  sector. With a robust portfolio of services, we specialize in
                  offering comprehensive solutions aimed at fostering
                  sustainable development and mitigating climate change
                  challenges.
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3" />
                  Innovation and Excellence{" "}
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3" />
                  Expertise and Experience
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3" />
                  Comprehensive Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Team Member</h6>
            <h1 className="mb-4">Experienced Team Members</h1>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
