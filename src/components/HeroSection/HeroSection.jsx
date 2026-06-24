import React, { useState, useEffect } from "react";
import "./HeroSection.css";

import slide1 from "../../assets/bg1.jpg";
import slide2 from "../../assets/bg2.jpg";
import slide3 from "../../assets/bg3.jpg";
import slide4 from "../../assets/bg4.jpg";
import slide5 from "../../assets/bg1.jpg";

const slides = [
  {
    tag: "Bihar Students",
    title: "Study in Top Colleges with Bihar Student Credit Card",
    desc: "Get expert guidance for admissions, course selection, education loans and Bihar Student Credit Card applications.",
    image: slide1,
    btn1: "Apply Now",
    btn2: "Free Counselling",
  },

  {
    tag: "Indian Students",
    title: "Your Dream College is Closer Than You Think",
    desc: "We help Indian students secure admissions in top institutions across the country.",
    image: slide2,
    btn1: "Explore Colleges",
    btn2: "Talk to an Expert",
  },

  {
    tag: "Global Admissions",
    title: "Study Abroad With Confidence",
    desc: "Explore universities across USA, UK, Canada, Australia and Europe.",
    image: slide3,
    btn1: "Study Abroad",
    btn2: "Book Consultation",
  },

  {
    tag: "Expert Consultancy",
    title: "Expert Counselling for Every Step",
    desc: "Our experienced counsellors help you choose the right course and university.",
    image: slide4,
    btn1: "Career Guidance",
    btn2: "Schedule Meeting",
  },

  {
    tag: "End-to-End Support",
    title: "Admissions, Loans, Visas & Scholarships",
    desc: "Everything from admission support to scholarships and visa guidance.",
    image: slide5,
    btn1: "Get Started",
    btn2: "Contact Us",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <span className="tag-pill">
            {slides[current].tag}
          </span>

          <h1>{slides[current].title}</h1>

          <p>{slides[current].desc}</p>

          <div className="hero-buttons">
            <button className="primary-btn">
              {slides[current].btn1}
            </button>

            <button className="secondary-btn">
              {slides[current].btn2}
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={
                current === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Tags Navigation */}

      
      <div className="tags-wrapper">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={
              current === index
                ? "slide-tag active-tag"
                : "slide-tag"
            }
          >
            {slide.tag}
          </button>
        ))}
      </div>
    </>
  );
}

export default HeroSection;