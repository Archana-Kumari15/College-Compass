import React from "react";
import "./Testimonials.css";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "MBBS, AIIMS",
    review:
      "Colleges Compass guided me through NEET counselling step by step. I got into my dream medical college!",
    initial: "P",
  },
  {
    id: 2,
    name: "Rahul Verma",
    course: "B.Tech, VIT",
    review:
      "Their team shortlisted the perfect engineering colleges for my rank. Smooth admission process.",
    initial: "R",
  },
  {
    id: 3,
    name: "Aisha Khan",
    course: "MBA, IIM",
    review:
      "From CAT prep advice to final admission, the support was incredible. Highly recommended.",
    initial: "A",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

        {/* Heading */}

        <div className="testimonial-header">
          <span className="testimonial-tag">
            SUCCESS STORIES
          </span>

          <h2>
            What Our Students Say
          </h2>

          <p>
            Real results from students we've helped reach their dream colleges.
          </p>
        </div>

        {/* Testimonial Cards */}

        <div className="testimonial-grid">

          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>

              {/* Quote Icon */}

              <div className="quote-wrapper">
                <Quote className="quote-icon" />
              </div>

              {/* Review */}

              <p className="review">
                "{item.review}"
              </p>

              <div className="testimonial-divider"></div>

              {/* Footer */}

              <div className="testimonial-footer">

                <div className="student-info">

                  <div className="avatar">
                    {item.initial}
                  </div>

                  <div className="student-details">
                    <h4>{item.name}</h4>
                    <span>{item.course}</span>
                  </div>

                </div>

                <div className="rating">

                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="#ff7a00"
                      color="#ff7a00"
                    />
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;