import React from "react";
import {
  Users,
  Building2,
  GraduationCap,
  Trophy,
} from "lucide-react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">

        <div className="stat-item">
          <div className="stat-icon">
            <Users />
          </div>

          <div className="stat-content">
            <h3 className="stat-number">10,000+</h3>
            <p className="stat-title">Students Guided</p>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <Building2 />
          </div>

          <div className="stat-content">
            <h3 className="stat-number">500+</h3>
            <p className="stat-title">
              Partner Colleges & Universities
            </p>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <GraduationCap />
          </div>

          <div className="stat-content">
            <h3 className="stat-number">25+</h3>
            <p className="stat-title">Study Destinations</p>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <Trophy />
          </div>

          <div className="stat-content">
            <h3 className="stat-number">98%</h3>
            <p className="stat-title">
              Admission Success Rate
            </p>
          </div>
        </div>

      </div>

      <div className="stats-footer">
        Trusted by Students Across Bihar and India for Higher Education &
        Study Abroad Success
      </div>
    </section>
  );
};

export default StatsSection;