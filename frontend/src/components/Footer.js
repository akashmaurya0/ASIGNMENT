import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">Logo</div>
        <ul className="footer-links">
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Blog Insights</li>
        </ul>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Security Council. All rights reserved.</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
