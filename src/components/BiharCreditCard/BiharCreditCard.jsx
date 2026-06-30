import React from "react";
import "./BiharCreditCard.css";

import {
  IndianRupee,
  Percent,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  CreditCard,
} from "lucide-react";

const BiharCreditCard = () => {
  return (
    <section className="bscc-section">
      <div className="bscc-container">

        {/* LEFT SIDE */}
        <div className="bscc-left">

          <div className="bscc-badge">
            <CreditCard size={18} />
            <span>Special for Bihar Students</span>
          </div>

          <h2>
            Study with Bihar Student
          
            Credit Card
          </h2>

          <p>
            Passed 12th from Bihar? Get an education loan of up to
            <strong> ₹4 Lakh </strong>
            at just
            <strong> 4% interest </strong>
            — no guarantor needed. We guide you through the entire process,
            free.
          </p>

          <div className="bscc-tags">
            <div className="tag">
              <IndianRupee size={18} />
              Up to ₹4 Lakh
            </div>

            <div className="tag">
              <Percent size={18} />
              4% Interest
            </div>

            <div className="tag">
              <ShieldCheck size={18} />
              No Collateral
            </div>
          </div>

          <button className="apply-btn">
            <span>Learn More & Apply</span>
            <ArrowRight size={22} />
          </button>
        </div>

        {/* RIGHT SIDE */}

        <div className="bscc-right">

  <div className="bscc-stat-card">
    <IndianRupee className="bscc-stat-icon" />
    <h3 className="bscc-stat-title">₹4 Lakh</h3>
    <p className="bscc-stat-text">Maximum Loan</p>
  </div>

  <div className="bscc-stat-card">
    <Percent className="bscc-stat-icon" />
    <h3 className="bscc-stat-title">4%</h3>
    <p className="bscc-stat-text">Simple Interest</p>
  </div>

  <div className="bscc-stat-card">
    <ShieldCheck className="bscc-stat-icon" />
    <h3 className="bscc-stat-title">₹0</h3>
    <p className="bscc-stat-text">No Guarantor Needed</p>
  </div>

  <div className="bscc-stat-card">
    <GraduationCap className="bscc-stat-icon" />
    <h3 className="bscc-stat-title">All</h3>
    <p className="bscc-stat-text">Courses Covered</p>
  </div>

</div>
      </div>
    </section>
  );
};

export default BiharCreditCard;