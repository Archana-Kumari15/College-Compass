import React from "react";
import "./FooterBottom.css";

const universities = [
  "VGU Jaipur",
  "Jagannath University",
  "JNU Jaipur",
  "Desh Bhagat",
  "IIMT University",
  "MGM Patna",
  "Tula's Institute",
  "GNIOT",
  "NIU",
  "PP Savani",
  "Marwadi University",
  "MMU Haryana",
  "ITM Gwalior",
  "Mangalmay",
  "GB Institute",
  "Sandip University",
  "Ganpat University",
  "Guru Kashi",
  "Mangalayatan",
  "Doon Business School",
  "UPES",
  "JECRC University",
  "Poddar Institutions",
  "JKLU",
  "Amity Jaipur",
  "Bennett",
  "Geeta University",
  "RIT Roorkee",
  "Gyan Vihar University",
  "BML Munjal University",
  "Chandigarh University",
  "LPU Campus",
  "Amity Online",
  "Manipal Online",
  "CU Online",
  "SMU",
  "LPU Online",
];

const FooterBottom = () => {
  return (
    <>
      <section className="partner-strip">
        <div className="partner-strip-container">
          <h3>PARTNER UNIVERSITIES</h3>

          <div className="partner-list">
            {universities.map((item, index) => (
              <a href="/" key={index}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="copyright-section">
        <div className="copyright-container">
          <p>© 2026 Colleges Compass. All rights reserved.</p>

          <p>
            Designed &amp; developed by{" "}
            <a href="/">ElephantDash</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default FooterBottom;