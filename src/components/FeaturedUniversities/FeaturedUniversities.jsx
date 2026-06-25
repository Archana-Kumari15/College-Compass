import React from "react";
import "./FeaturedUniversities.css";
import { MapPin, CheckCircle } from "lucide-react";

import vgupic from "../../assets/vgupic.jpg";
import marwadi from "../../assets/marwadipic.jpg";
import sandip from "../../assets/sandipuni.jpg";
import amity from "../../assets/amity.jpg";
import manipal from "../../assets/manipal.jpg";
import lpu from "../../assets/lpu.jpg";

const universities = [
  {
    name: "VGU Jaipur",
    location: "Jaipur, Rajasthan",
    image: vgupic,
    description:
      "Multidisciplinary university with strong placements. Vivekananda Global University, Jaipur is a UGC-recognised private university offering a wide range of UG and PG programmes across engineering, management, pharmacy, law and other disciplines.",
    badges: ["DRCC"],
  },

  {
    name: "Marwadi University",
    location: "Rajkot, Gujarat",
    image: marwadi,
    description:
      "NAAC A+ accredited university. Marwadi University, Rajkot is a well-regarded private university with strong programmes in engineering, management, pharmacy, commerce, computer applications and other professional courses.",
    badges: ["DRCC"],
  },

  {
    name: "Sandip University",
    location: "Nashik, Maharashtra",
    image: sandip,
    description:
      "Multidisciplinary private university. Sandip University, Nashik provides UG and PG programmes across engineering, pharmacy, management, science and other professional disciplines.",
    badges: ["DRCC"],
  },

  {
    name: "Amity Online",
    location: "Online (UGC-DEB Entitled)",
    image: amity,
    description:
      "One of India's top private universities. Amity University Online offers UGC-entitled online degrees with live and recorded classes, recognised by employers and designed for flexible learning.",
    badges: ["Online"],
  },

  {
    name: "Manipal Online",
    location: "Online (UGC-DEB Entitled)",
    image: manipal,
    description:
      "Online degrees from a trusted brand. Manipal University's online programmes (via Online Manipal) offer industry-aligned UG and PG degrees with flexible learning, expert faculty and career support.",
    badges: ["Online"],
  },

  {
    name: "LPU Online",
    location: "Online (UGC-DEB Entitled)",
    image: lpu,
    description:
      "Online degrees from Lovely Professional University. LPU Online offers UGC-entitled online UG and PG programmes with flexible schedules, e-learning content and placement assistance.",
    badges: ["Online"],
  },
];

const FeaturedUniversities = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">

        <div className="featured-header">
          <div className="featured-header-left">
            <span className="featured-tag">TOP PICKS</span>

            <h2>Featured Universities</h2>

            <p>
              Popular DRCC & online admission partners chosen by our students.
            </p>
          </div>
        </div>

        <div className="featured-grid">
          {universities.map((college, index) => (
            <div className="featured-card" key={index}>
              <div className="featured-image">
                <img src={college.image} alt={college.name} />

                <div className="badges">
                  {college.badges.map((badge, i) => (
                    <span key={i}>{badge}</span>
                  ))}
                </div>

                <h3>{college.name}</h3>
              </div>

              <div className="featured-content">
                <div className="location">
                  <MapPin size={14} />
                  <span>{college.location}</span>
                </div>

                <p>{college.description}</p>

                <div className="card-footer">
                  <span className="open">
                    <CheckCircle size={14} />
                    Admission Open
                  </span>

                  <a href="/">View Details →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedUniversities;