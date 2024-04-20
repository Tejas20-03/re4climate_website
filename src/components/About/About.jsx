import React from "react";
import aboutImage from "../../assets/about.jpg";
import { Link } from "react-router-dom";

// Separate styles for easier maintenance
const styles = {
  imageContainer: {
    minHeight: 400,
  },
  imageStyle: {
    objectFit: "cover",
  },
};

const About = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 ps-lg-0" style={styles.imageContainer}>
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={aboutImage}
                style={styles.imageStyle}
                alt="Office setting with RE4Climate team working on renewable energy projects"
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
                offering comprehensive solutions aimed at fostering sustainable
                development and mitigating climate change challenges.
              </p>
              {[
                "Innovation and Excellence",
                "Expertise and Experience",
                "Comprehensive Solutions",
              ].map((item, index) => (
                <p key={index}>
                  <i className="fa fa-check-circle text-primary me-3" />
                  {item}
                </p>
              ))}
              <Link
                to="/aboutUs"
                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
