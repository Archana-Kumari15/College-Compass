import React from "react";
import "./OnlineUniversities.css";
import { Laptop, MapPin, CheckCircle } from "lucide-react";

import amity from "../../assets/amity.jpg";
import manipal from "../../assets/manipal.jpg";
import lpu from "../../assets/lpu.jpg";
import cu from "../../assets/cu.jpg";
import smu from "../../assets/smu.jpg";
import vgu from "../../assets/vgupic.jpg";

const universities = [
  {
    name: "VGU",
    location: "Jaipur, Rajasthan",
    image: vgu,
    description:
      "Vivekananda Global University (VGU), Jaipur is a UGC-recognised private university offering undergraduate and postgraduate programmes across Engineering, Management, Law, Pharmacy, Design, Agriculture and many other disciplines. The university is known for its modern campus, industry collaborations, excellent placements and student-focused learning environment.",
    badge: "Online",
  },

  {
    name: "Amity Online",
    location: "Online (UGC-DEB Entitled)",
    image: amity,
    description:
      "One of India's top private universities, Amity University Online offers UGC-DEB approved online undergraduate and postgraduate degree programmes with live classes, recorded lectures, industry mentors, placement assistance and flexible learning for students as well as working professionals.",
    badge: "Online",
  },

  {
    name: "Manipal Online",
    location: "Online (UGC-DEB Entitled)",
    image: manipal,
    description:
      "Online degrees from Manipal University Jaipur through Online Manipal provide industry-aligned undergraduate and postgraduate programmes with expert faculty, career support, live classes, recorded lectures and recognised UGC-entitled qualifications.",
    badge: "Online",
  },

  {
    name: "LPU Online",
    location: "Online (UGC-DEB Entitled)",
    image: lpu,
    description:
      "LPU Online offers UGC-entitled undergraduate and postgraduate programmes with flexible schedules, interactive learning, digital study material, placement assistance and career guidance designed for students and working professionals.",
    badge: "Online",
  },

  {
    name: "CU Online",
    location: "Online (UGC-DEB Entitled)",
    image: cu,
    description:
      "Chandigarh University Online provides flexible UGC-approved online degree programmes with experienced faculty, modern digital learning platforms, industry-oriented curriculum, placement support and affordable education for learners across India.",
    badge: "Online",
  },

  {
    name: "SMU",
    location: "Online / Distance",
    image: smu,
    description:
      "Sikkim Manipal University is a pioneer in online and distance education, offering recognised undergraduate and postgraduate programmes with flexible learning, quality faculty, affordable fees and nationwide student support services.",
    badge: "Online",
  },
];

export default function OnlineUniversities() {
  return (
    <section className="online-section">

      <div className="online-heading">

        <div className="category-line"></div>

        <div>

          <div className="title">

            <Laptop size={32} className="icon" />

            <h2>Online Mode</h2>

            <span>(6)</span>

          </div>

          <p>UGC-entitled online degrees — study from anywhere.</p>

        </div>

      </div>

      <div className="online-grid">

        {universities.map((college, index) => (

          <div className="online-card" key={index}>

            <div className="card-image">

              <img src={college.image} alt={college.name} />

              <span className="badge">{college.badge}</span>

              <h3>{college.name}</h3>

            </div>

            <div className="card-content">

              <div className="location">
                <MapPin size={15} />
                {college.location}
              </div>

              <p>{college.description}</p>

              <div className="card-footer">

                <span className="admission-open">
                  <CheckCircle size={15} />
                  Admission Open
                </span>

                <a href="/" className="view-details">
                   View Details →
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="bottom-text">
        <CheckCircle size={22} />
        And many more — contact us to check availability for your preferred course.
      </div>

    </section>
  );
}