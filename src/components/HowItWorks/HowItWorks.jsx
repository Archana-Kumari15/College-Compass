import React from "react";
import "./HowItWorks.css";

import {
  Users,
  Search,
  FileCheck,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    no: "01",
    icon: <Users />,
    title: "Free Counselling",
    desc: "Talk to our experts about your goals, scores and budget.",
  },
  {
    no: "02",
    icon: <Search />,
    title: "College Shortlist",
    desc: "Get a personalised list of colleges that fit you best.",
  },
  {
    no: "03",
    icon: <FileCheck />,
    title: "Application Help",
    desc: "We assist with forms, documents and entrance exams.",
  },
  {
    no: "04",
    icon: <GraduationCap />,
    title: "Secure Admission",
    desc: "Confirm your seat and start your college journey.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section">

      <div className="how-header">

        <span className="how-tag">
          HOW IT WORKS
        </span>

        <h2>
          Your Journey to Admission in 4 Steps
        </h2>

        <p>
          A simple, transparent process designed to get you into the right
          college.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>

            <div className="step-number">
              {step.no}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default HowItWorks;