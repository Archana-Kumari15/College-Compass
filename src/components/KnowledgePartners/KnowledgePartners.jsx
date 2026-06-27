import React from "react";
import "./KnowledgePartners.css";
import { Handshake } from "lucide-react";

import sunstone from "../../assets/sunstone.jpg";
import intellipaat from "../../assets/intellipaat.png";

const partners = [
  {
    name: "Sunstone",
    image: sunstone,
    description:
      "Industry-aligned, placement-focused skilling partner — co-designs curricula with recruiters and runs mentorship, capstone projects and placement support on campus.",
    university: "Associated with VGU Jaipur",
  },
  {
    name: "Intellipaat",
    image: intellipaat,
    description:
      "Professional upskilling partner delivering industry-ready training in AI/ML, data science, cloud and software development, with hands-on projects and placement.",
    university: "Associated with VGU Jaipur",
  },
];

const KnowledgePartners = () => {
  return (
    <section className="knowledge-section">
      <div className="knowledge-container">

        {/* Header */}

        <div className="knowledge-header">

          <span className="knowledge-tag">
            SKILLING PARTNERS
          </span>

          <h2>Our Knowledge Partners</h2>

          <p>
            Industry skilling partners that power placement-focused,
            industry-aligned programs at our partner universities —
            currently associated with VGU Jaipur.
          </p>

        </div>

        {/* Cards */}

        <div className="knowledge-grid">

          {partners.map((partner, index) => (
            <div className="knowledge-card" key={index}>

              <div className="partner-top">

                <div className="partner-logo-box">
                  <img src={partner.image} alt={partner.name} />
                </div>

                <div className="partner-content">

                  <div className="partner-title">

                    <Handshake className="hand-icon" />

                    <h3>{partner.name}</h3>

                  </div>

                  <p>{partner.description}</p>

                  <a href="/">
                    {partner.university}
                    <span> →</span>
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default KnowledgePartners;