import React from "react";
import "./StudyAbroad.css";
import { Globe } from "lucide-react";

const countries = [
  {
    flag: "🇨🇦",
    name: "Canada",
    description: "Post-study work & PR pathways",
  },
  {
    flag: "🇺🇸",
    name: "USA",
    description: "World's top-ranked universities",
  },
  {
    flag: "🇬🇧",
    name: "UK",
    description: "1-year master's degrees",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    description: "Work while you study",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    description: "Low / no tuition fees",
  },
  {
    flag: "🇳🇿",
    name: "New Zealand",
    description: "Safe & affordable",
  },
  {
    flag: "🇮🇪",
    name: "Ireland",
    description: "Tech & pharma hub",
  },
  {
    flag: "🇫🇷",
    name: "France",
    description: "Scholarships available",
  },
];

const StudyAbroad = () => {
  return (
    <section className="study-section">
      <div className="study-container">

        {/* Header */}

        <div className="study-header">
          <span className="study-tag">
            STUDY ABROAD
          </span>

          <h2>
            Explore Global Study Destinations
          </h2>

          <p>
            Dreaming of an international degree? We help you apply to top
            universities across the world with complete admission and visa
            support.
          </p>
        </div>

        {/* Countries */}

        <div className="study-grid">
          {countries.map((country, index) => (
            <div className="study-card" key={index}>

              <div className="flag">
                {country.flag}
              </div>

              <h3>
                {country.name}
              </h3>

              <p>
                {country.description}
              </p>

            </div>
          ))}
        </div>

        {/* Button */}

        <div className="study-btn-wrapper">
          <a href="/" className="study-btn">
            <Globe size={22} />
            Get Study Abroad Guidance
          </a>
        </div>

      </div>
    </section>
  );
};

export default StudyAbroad;