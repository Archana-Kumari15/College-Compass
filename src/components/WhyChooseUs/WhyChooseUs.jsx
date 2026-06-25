import React from "react";
import "./WhyChooseUs.css";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Personalised college shortlisting based on your profile",
  "Expert guidance on entrance exams & cut-offs",
  "End-to-end application & documentation support",
  "Honest advice — we recommend what's right for you",
];

const stats = [
  {
    number: "5,000+",
    text: "Students Guided",
  },
  {
    number: "200+",
    text: "Partner Colleges",
  },
  {
    number: "50+",
    text: "Courses Covered",
  },
  {
    number: "12+",
    text: "Years of Experience",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* Left Side */}

        <div className="why-left">

          <span className="why-tag">
            WHY CHOOSE US
          </span>

          <p className="why-text">
            We've helped thousands of students find their ideal college.
            Here's why families trust us.
          </p>

          <div className="why-list">

            {features.map((item, index) => (

              <div className="why-item" key={index}>

                <div className="check-circle">
                  <CheckCircle2 size={18} />
                </div>

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

        {/* Right Side */}

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div className="stat-card" key={index}>

              <h3>{item.number}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;