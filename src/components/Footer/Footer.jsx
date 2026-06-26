import React from "react";
import "./Footer.css";
import {
  Instagram,
  Facebook,
  Youtube,
  LinkedinIcon,
  Phone,
  Mail,
} from "lucide-react";

import logo from "../../assets/logo.png"; // Replace with your logo

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-col footer-brand">

          <img src={logo} alt="logo" className="footer-logo" />

          <p>
            Your Trusted Partner for Indian College Admissions
          </p>

          <div className="social-icons">
            <a href="#"><Instagram /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Youtube /></a>
            <a href="#"><LinkedinIcon /></a>
          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h3>QUICK LINKS</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Colleges</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Scholarships</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>

        </div>

        {/* Courses */}

        <div className="footer-col">

          <h3>POPULAR COURSES</h3>

          <ul>
            <li>Engineering</li>
            <li>Medical</li>
            <li>Management</li>
            <li>Commerce</li>
            <li>Science</li>
            <li>Arts & Humanities</li>
            <li>Law</li>
            <li>Agriculture</li>
            <li>Pharmacy</li>
            <li>Design</li>
            <li>Hotel Management</li>
            <li>Computer Applications</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-col">

          <h3>GET IN TOUCH</h3>

          <div className="contact-item">
            <Phone size={22} />
            <span>+91 73570 50909</span>
          </div>

          <div className="contact-item">
            <Mail size={22} />
            <span>Info@collegescompass.com</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;