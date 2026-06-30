import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import { FaBars, FaTimes, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     <nav className="navbar">
  <div className="nav-container">

    {/* Logo */}
    <div className="logo">
      <img src={logo} alt="College Compass" />
    </div>

    {/* Navigation Links */}
    <ul className={menuOpen ? "nav-links active" : "nav-links"}>
      <li>
        <a className="active-link" href="/">Home</a>
      </li>

      <li>
        <a href="/">Colleges</a>
      </li>

      <li>
        <a href="/">Courses</a>
      </li>

      <li>
        <a href="/">Scholarships</a>
      </li>

      <li>
        <a href="/">Services</a>
      </li>

      <li>
        <a href="/">About</a>
      </li>

      <li>
        <a href="/">Contact</a>
      </li>

      {/* Mobile Button */}
      <li className="mobile-only">
        <button className="mobile-btn">
          Free Counselling
        </button>
      </li>
    </ul>

    {/* Desktop Right Section */}
    <div className="nav-right">
      <div className="phone">
        <FaPhoneAlt />
        <span>+91 73570 50909</span>
      </div>

      <button className="counselling-btn">
        Free Counselling
      </button>
    </div>

    {/* Mobile Menu Icon */}
    <div
      className="menu-icon"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </div>

  </div>
</nav>




      {/* WhatsApp Floating Button */}
      <a
  href="https://wa.me/917357050909"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-btn"
>
  <FaWhatsapp size={32} />
</a>
    </>
  );
};

export default Navbar;