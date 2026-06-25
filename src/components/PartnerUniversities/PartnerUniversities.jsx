import React from "react";
import "./PartnerUniversities.css";
import { Building2 } from "lucide-react";

import { MapPin, CheckCircle } from "lucide-react";

import vgu from "../../assets/vgupic.jpg";
import jagannath from "../../assets/jagannath.jpg";
import jnu from "../../assets/jnu.jpg";
import deshbhagat from "../../assets/deshbhagat.jpg";
import iimt from "../../assets/iimt.jpg";
import mgm from "../../assets/mgm.jpg";
import tulas from "../../assets/tula.jpg";
import gniot from "../../assets/gniot.jpg";
import niu from "../../assets/niu.jpg";
import ppsavani from "../../assets/ppsavani.jpg";
import marwadi from "../../assets/marwadipic.jpg";
import mmu from "../../assets/mmu.jpg";
import itm from "../../assets/itm.jpg";
import mangalmay from "../../assets/mangalmay.jpg";
import gb from "../../assets/gb.jpg";
import sandip from "../../assets/sandipuni.jpg";
import ganpat from "../../assets/ganpat.jpg";
import gurukashi from "../../assets/gurukashi.jpg";
import mangalayatan from "../../assets/mangalyatan.jpg";


const universities = [
  {
    name: "VGU Jaipur",
    location: "Jaipur, Rajasthan",
    image: vgu,
    description:
      "Multidisciplinary university with strong placements. Vivekananda Global University, Jaipur is a UGC-recognised private university offering a wide range of UG and PG programmes in engineering, management, law, design, pharmacy, science and other professional disciplines.",
    badge: "DRCC",
  },
  {
    name: "Jagannath University",
    location: "Jaipur, Rajasthan",
    image: jagannath,
    description:
      "Wide range of UG & PG programmes. Jagannath University is a private university offering engineering, management, law, agriculture, education and other career-oriented courses with excellent academic infrastructure.",
    badge: "DRCC",
  },
  {
    name: "JNU Jaipur",
    location: "Jaipur, Rajasthan",
    image: jnu,
    description:
      "NAAC-accredited multidisciplinary university. Jaipur National University offers programmes in engineering, pharmacy, management, media studies, law, science and healthcare with modern campus facilities.",
    badge: "DRCC",
  },
  {
    name: "Desh Bhagat University",
    location: "Mandi Gobindgarh, Punjab",
    image: deshbhagat,
    description:
      "Diverse programmes across many faculties. Desh Bhagat University is a private university in Punjab offering engineering, management, journalism, pharmacy, nursing, hotel management and medical sciences.",
    badge: "DRCC",
  },
  {
    name: "IIMT University",
    location: "Meerut, Uttar Pradesh",
    image: iimt,
    description:
      "Industry-oriented education in NCR region. IIMT University offers professional UG and PG programmes in engineering, management, law, pharmacy, agriculture, nursing and computer applications.",
    badge: "DRCC",
  },
  {
    name: "MGM Patna",
    location: "Patna, Bihar",
    image: mgm,
    description:
      "Popular choice for Bihar students. A well-known institution in Patna offering professional education with engineering, management, pharmacy and science programmes under DRCC eligibility.",
    badge: "DRCC",
  },
  {
    name: "Tula's Institute",
    location: "Dehradun, Uttarakhand",
    image: tulas,
    description:
      "Reputed engineering and management institute. Tula's Institute, Dehradun is known for engineering, management, computer applications, modern laboratories and excellent placement opportunities.",
    badge: "DRCC",
  },
  {
    name: "GNIOT",
    location: "Greater Noida, Uttar Pradesh",
    image: gniot,
    description:
      "Established institute in NCR. GNIOT offers AICTE-approved programmes in engineering, management and computer applications with excellent infrastructure and placement support.",
    badge: "DRCC",
  },
  {
    name: "NIU",
    location: "Greater Noida, Uttar Pradesh",
    image: niu,
    description:
      "Multidisciplinary university near Delhi. Noida International University offers engineering, management, law, journalism, pharmacy, nursing and medical sciences programmes.",
    badge: "DRCC",
  },
  {
    name: "PP Savani University",
    location: "Surat, Gujarat",
    image: ppsavani,
    description:
      "Modern campus with diverse programmes. PP Savani University offers UG and PG programmes across engineering, science, management, pharmacy, architecture and health sciences.",
    badge: "DRCC",
  },
  {
    name: "Marwadi University",
    location: "Rajkot, Gujarat",
    image: marwadi,
    description:
      "NAAC A+ accredited university. Marwadi University is well known for engineering, management, computer science, architecture, pharmacy and innovation-driven education.",
    badge: "DRCC",
  },
  {
    name: "MMU Haryana",
    location: "Mullana, Ambala, Haryana",
    image: mmu,
    description:
      "Reputed for medical and engineering education. Maharishi Markandeshwar University offers medical, dental, engineering, management, pharmacy and nursing programmes.",
    badge: "DRCC",
  },
  {
    name: "ITM University",
    location: "Gwalior, Madhya Pradesh",
    image: itm,
    description:
      "Multidisciplinary university in MP offering engineering, agriculture, nursing, pharmacy, management, law and science programmes with modern facilities.",
    badge: "DRCC",
  },
  {
    name: "Mangalmay Institute",
    location: "Greater Noida, Uttar Pradesh",
    image: mangalmay,
    description:
      "Management and technology institute offering engineering, MBA, BBA, MCA, BCA and other professional programmes with experienced faculty and placement assistance.",
    badge: "DRCC",
  },
  {
    name: "GB Institute",
    location: "Greater Noida, Uttar Pradesh",
    image: gb,
    description:
      "Engineering and technology institute offering AICTE-approved engineering, management and computer application programmes with focus on practical learning.",
    badge: "DRCC",
  },
  {
    name: "Sandip University",
    location: "Nashik, Maharashtra",
    image: sandip,
    description:
      "Multidisciplinary private university. Sandip University offers UG and PG programmes across engineering, pharmacy, management, science, agriculture and law.",
    badge: "DRCC",
  },
  {
    name: "Ganpat University",
    location: "Mehsana, Gujarat",
    image: ganpat,
    description:
      "Established university with strong placements. Ganpat University offers engineering, pharmacy, management, architecture, computer applications and agriculture programmes.",
    badge: "DRCC",
  },
  {
    name: "Guru Kashi University",
    location: "Talwandi Sabo, Bathinda, Punjab",
    image: gurukashi,
    description:
      "Diverse UG & PG programmes. Guru Kashi University offers agriculture, engineering, management, pharmacy, education, nursing and science programmes.",
    badge: "DRCC",
  },
  {
    name: "Mangalayatan University",
    location: "Aligarh, Uttar Pradesh",
    image: mangalayatan,
    description:
      "Multidisciplinary university offering engineering, journalism, fine arts, management, pharmacy, agriculture, law, education and science programmes.",
    badge: "DRCC",
  },
];

        const PartnerUniversities = () => {
  return (
    <section className="partner-section">
      <div className="partner-container">

        {/* Header */}

        <div className="partner-header">
          <span className="partner-tag">OUR NETWORK</span>

          <h2>Partner Universities</h2>

          <p>
            We have direct tie-ups with leading universities for admissions
            <br />
            both on-campus and online mode.
          </p>
        </div>

        {/* Category */}

        <div className="category-heading">
          <div className="category-line"></div>

          <div className="category-content">
            <div className="category-title">
              <Building2 className="category-icon" />

              <h3>
                Direct / DRCC <span>(19)</span>
              </h3>
            </div>

            <p>
              On-campus admission — usable with the Bihar Student Credit Card.
            </p>
          </div>
        </div>

        {/* Universities Grid */}

        <div className="university-grid">
          {universities.map((college, index) => (
            <div className="university-card" key={index}>

              <div className="card-image">
                <img src={college.image} alt={college.name} />

                <span className="card-badge">
                  {college.badge}
                </span>

                <h3 className="card-title">
                  {college.name}
                </h3>
              </div>

              <div className="card-content">

                <div className="location">
                  <MapPin size={15} />
                  <span>{college.location}</span>
                </div>

                <p className="card-description">
                  {college.description}
                </p>

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

      </div>
    </section>
  );
};

export default PartnerUniversities;