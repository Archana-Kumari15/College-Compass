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
    location: "Online (UGC-DEB Entitled)",
    image: vgu,
    description:
      "Recognized online university offering industry-ready undergraduate and postgraduate programmes.",
    badge: "Online",
  },
  {
    name: "Amity Online",
    location: "Online (UGC-DEB Entitled)",
    image: amity,
    description:
      "One of India's top private universities. Amity Online offers UGC-entitled online degrees with live and recorded classes.",
    badge: "Online",
  },
  {
    name: "Manipal Online",
    location: "Online (UGC-DEB Entitled)",
    image: manipal,
    description:
      "Online degrees from a trusted brand with industry-aligned UG and PG programmes.",
    badge: "Online",
  },
  {
    name: "LPU Online",
    location: "Online (UGC-DEB Entitled)",
    image: lpu,
    description:
      "Online UG and PG programmes with flexible schedules and career support.",
    badge: "Online",
  },
  {
    name: "CU Online",
    location: "Online (UGC-DEB Entitled)",
    image: cu,
    description:
      "Flexible online learning with UGC-approved degree programmes for working professionals.",
    badge: "Online",
  },
  {
    name: "SMU",
    location: "Online / Distance",
    image: smu,
    description:
      "Sikkim Manipal University offers quality online and distance education across India.",
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

              <div className="footer">

                <span className="open">
                  <CheckCircle size={15} />
                  Admission Open
                </span>

                <a href="/">View Details →</a>

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