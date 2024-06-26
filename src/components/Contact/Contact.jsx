import React from "react";
import { Link } from "react-router-dom";

import contactImage from "../../assets/contact.jpg";
const ContactForm = () => {
  return (
    <form>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
            />
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
            />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a message here"
              id="message"
              style={{ height: "100px" }} // Moved inline style here for simplicity
            />
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary rounded-pill py-3 px-5"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

const GoogleMap = () => {
  return (
    <iframe
      className="position-absolute w-100 h-100"
      style={{ objectFit: "cover", paddingRight: "20px" }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.708699527953!2d77.38063473179933!3d28.6319446584664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce581716c060d%3A0x197414f8f13e46b8!2sRE4Climate%20Private%20Limited!5e0!3m2!1sen!2sin!4v1710433830225!5m2!1sen!2sin"
      allowFullScreen
      aria-hidden="false"
      tabIndex="0"
      title="Re4Climate"
    />
  );
};

const Contact = () => {
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5"
        style={{
          backgroundImage: `url(${contactImage})`, // Update the path as necessary
          backgroundSize: "cover", // Ensures the background covers the whole area
          backgroundPosition: "center", // Centers the background image
          backgroundRepeat: "no-repeat", // Prevents the background from repeating
        }}
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Contact
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
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div
        className="container-fluid bg-light overflow-hidden px-lg-0"
        style={{ margin: "6rem 0" }}
      >
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 contact-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 ps-lg-0">
                <h6 className="text-primary">Contact Us</h6>
                <h1 className="mb-4">Feel Free To Contact Us</h1>
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
