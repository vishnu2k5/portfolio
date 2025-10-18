import React from "react";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">
        I'd love to connect! Feel free to reach out for collaboration, opportunities, or just a friendly chat.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p><a href="mailto:mvishnuvardhan156@gmail.com">mvishnuvardhan156@gmail.com</a></p>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p><a href="https://github.com/vishnu2k5" target="_blank" rel="noopener noreferrer">github.com/vishnu2k5</a></p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/manchuru-vishnuvardhan-38009025a/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/manchuru-vishnuvardhan
          </a></p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p><a href="tel:+919398259314">+91 93982 59314</a></p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Bangalore, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
