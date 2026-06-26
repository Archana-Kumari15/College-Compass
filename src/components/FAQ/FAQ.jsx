import React, { useState } from "react";
import "./FAQ.css";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Is your counselling really free?",
    answer:
      "Yes — our college counselling and admission guidance is 100% free for students. We never charge you for shortlisting colleges or expert advice.",
  },
  {
    question: "Which courses and colleges do you cover?",
    answer:
      "We help students with Engineering, Medical, Management, Law, Pharmacy, Arts, Commerce, Science, Online Degrees and many other UG & PG courses across India.",
  },
  {
    question: "Can you help with the Bihar Student Credit Card?",
    answer:
      "Yes. We provide complete guidance regarding Bihar Student Credit Card (BSCC), DRCC admissions, documentation and eligible colleges.",
  },
  {
    question: "Do you help with education loans and scholarships?",
    answer:
      "Absolutely. We guide students about education loans, scholarships, fee structures and financial assistance options available at different colleges.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out the counselling form or contact us via phone or WhatsApp. Our admission expert will contact you within 24 hours.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <span className="faq-tag">FAQS</span>

        <h2>Frequently Asked Questions</h2>

        <p className="faq-subtitle">
          Everything you need to know before getting started with us.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-card ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="faq-header"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>

                <button className="faq-icon">
                  {activeIndex === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </button>
              </div>

              {activeIndex === index && (
                <div className="faq-body">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;