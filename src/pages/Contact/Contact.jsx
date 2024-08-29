import React from "react";
import { Link } from "react-router-dom";
import contactImage from "../../assets/contact.jpg";
import './contact.css'
import { FaComments, FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
            />
            <label htmlFor="name"><FaUser /> Your Name</label>
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
            <label htmlFor="email"><FaEnvelope />Your Email</label>
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
            <label htmlFor="message"><FaComments />Message</label>
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary rounded-pill py-3 px-5 send-button"
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
    <div className="google-map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.708699527953!2d77.38063473179933!3d28.6319446584664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce581716c060d%3A0x197414f8f13e46b8!2sRE4Climate%20Private%20Limited!5e0!3m2!1sen!2sin!4v1710433830225!5m2!1sen!2sin"
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
        title="Re4Climate"
      />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info">
              <h1>Get in Touch</h1>
              <p>We'd love to hear from you. Here's how you can reach us...</p>
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>2406B, The Iconic Corenthum,<br/>41, Block A, Industrial Area,<br/> Sector 62, Noida,<br/> Uttar Pradesh 201301</span>
              </div>
              <div className="info-item">
                <FaPhone />
                <span>+91 99539 51266</span>
              </div>
              <div className="info-item">
                <FaEnvelope />
                <span>info@re4climate.com</span>
              </div>
            </div>
            <GoogleMap />
          </div>
          <div className="col-lg-6">
            <div className="contact-form-container">
              <h2>Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
