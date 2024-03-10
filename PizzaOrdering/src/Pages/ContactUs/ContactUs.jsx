import React from "react";
import "./ContactUs.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div className="ContactUs">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-info">
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhone />
          </div>
          <div className="contact-details">
            <h3>Phone</h3>
            <p>123-456-7890</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div className="contact-details">
            <h3>Email</h3>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-details">
            <h3>Address</h3>
            <p>123 Pizza Street, City, Country</p>
          </div>
        </div>
      </div>
      <p className="contact-message">
        Have any questions or suggestions? Feel free to reach out to us using
        the contact information provided above. We'd love to hear from you!
      </p>
      <div className="social-icons">
        <Link>
          <FaFacebook />
        </Link>
        <Link>
          <FaTwitter />
        </Link>
        <Link>
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
