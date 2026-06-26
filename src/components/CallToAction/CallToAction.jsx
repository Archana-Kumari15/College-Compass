import React from "react";
import "./CallToAction.css";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <h2>
          Ready to Find Your Dream College?
        </h2>

        <p>
          Get free, personalised counselling from our admission experts today.
          No cost, no obligation.
        </p>

        <button className="cta-btn">
          Book Free Counselling
          <ArrowRight size={24} />
        </button>

      </div>
    </section>
  );
};

export default CallToAction;