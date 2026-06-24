import React from "react";
import "./ExploreSection.css";
import {
  FaGraduationCap,
  FaStethoscope,
  FaBriefcase,
  FaCalculator,
  FaFlask,
  FaPalette,
  FaBalanceScale,
  FaSeedling,
  FaPills,
  FaTag,
  FaUtensils,
  FaCode,
} from "react-icons/fa";

const streams = [
  {
    icon: <FaGraduationCap />,
    title: "Engineering",
    desc: "B.Tech, M.Tech & more",
  },
  {
    icon: <FaStethoscope />,
    title: "Medical",
    desc: "MBBS, BDS, Nursing & more",
  },
  {
    icon: <FaBriefcase />,
    title: "Management",
    desc: "MBA, BBA, PGDM & more",
  },
  {
    icon: <FaCalculator />,
    title: "Commerce",
    desc: "B.Com, CA, Economics & more",
  },
  {
    icon: <FaFlask />,
    title: "Science",
    desc: "B.Sc, Research & more",
  },
  {
    icon: <FaPalette />,
    title: "Arts & Humanities",
    desc: "B.A, Journalism, Psychology & more",
  },
  {
    icon: <FaBalanceScale />,
    title: "Law",
    desc: "BA LLB, LLB, LLM & more",
  },
  {
    icon: <FaSeedling />,
    title: "Agriculture",
    desc: "B.Sc Agriculture, Horticulture & more",
  },
  {
    icon: <FaPills />,
    title: "Pharmacy",
    desc: "B.Pharm, D.Pharm, Pharm.D & more",
  },
  {
    icon: <FaTag />,
    title: "Design",
    desc: "Fashion, Interior, UX & more",
  },
  {
    icon: <FaUtensils />,
    title: "Hotel Management",
    desc: "BHM, Culinary, Hospitality & more",
  },
  {
    icon: <FaCode />,
    title: "Computer Applications",
    desc: "BCA, MCA, IT & more",
    active: true,
  },
];

const ExploreSection = () => {
  return (
    <section className="explore-section">

      <div className="heading-area">
        <span className="sub-heading">
          EXPLORE BY STREAM
        </span>

        <h2>Choose Your Field of Study</h2>

        <p>
          From Engineering to Medical, we cover every major stream with expert guidance.
        </p>
      </div>

      <div className="cards-grid">
        {streams.map((item, index) => (
          <div className="stream-card" key={index}>
            <div
              className={`icon-box ${
                item.active ? "active-icon" : ""
              }`}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <a href="/">
              View Colleges →
            </a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ExploreSection;