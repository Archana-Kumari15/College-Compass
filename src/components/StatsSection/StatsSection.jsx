import React from "react";
import "./StatsSection.css";

import {
  FaUsers,
  FaUniversity,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa";

const StatsSection = () => {
  return (
    <section className="stats-section">

      <div className="stats-container">

        <div className="stat-card">
          <div className="icon-box">
            <FaUsers />
          </div>
          <div>
            <h2>10,000+</h2>
            <p>Students Guided</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-box">
            <FaUniversity />
          </div>

          <div>
            <h2>500+</h2>
            <p>Partner Colleges & Universities</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-box">
            <FaGraduationCap />
          </div>

          <div>
            <h2>25+</h2>
            <p>Study Destinations</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-box">
            <FaTrophy />
          </div>

          <div>
            <h2>98%</h2>
            <p>Admission Success Rate</p>
          </div>
        </div>

      </div>

      <div className="trusted-text">
        Trusted by Students Across Bihar and India for Higher Education & Study Abroad Success
      </div>

    </section>
  );
};

export default StatsSection;