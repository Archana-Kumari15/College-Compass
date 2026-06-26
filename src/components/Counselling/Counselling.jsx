import React from "react";
import "./Counselling.css";
import {
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

const Counselling = () => {
  return (
    <section className="counselling-section">
      <div className="counselling-container">

        {/* Left Side */}
        <div className="counselling-left">

          <span className="section-tag">
            FREE COUNSELLING
          </span>

          <h2>
            Talk to an Admission <br />
            Expert Today
          </h2>

          <p className="section-desc">
            Fill in your details and our counsellor will call you
            within 24 hours — completely free, no obligation.
          </p>

          <div className="benefits">

            <div className="benefit">
              <CheckCircle size={22} />
              <span>
                Personalised college & course recommendations
              </span>
            </div>

            <div className="benefit">
              <CheckCircle size={22} />
              <span>
                Help with entrance exams, loans & scholarships
              </span>
            </div>

            <div className="benefit">
              <CheckCircle size={22} />
              <span>
                Guidance for Bihar Student Credit Card & study abroad
              </span>
            </div>

          </div>

          <div className="contact-buttons">

            <a href="tel:+917357050909" className="contact-btn phone-btn">
              <Phone size={24} />
              <span>+91 73570 50909</span>
            </a>

            <a href="mailto:info@example.com" className="contact-btn email-btn">
              <Mail size={24} />
              <span>Email Us</span>
            </a>

            <a
              href="https://wa.me/917357050909"
              className="contact-btn whatsapp-btn"
            >
              <MessageCircle size={24} />
              <span>WhatsApp</span>
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="counselling-form-box">

          <h3>Get Free Counselling</h3>

          <p>
            We'll get back to you within 24 hours.
          </p>

          <form>

            <div className="form-row">

              <input
                type="text"
                placeholder="Full Name *"
              />

              <input
                type="tel"
                placeholder="Phone Number *"
              />

            </div>

            <div className="form-row">

              <input
                type="email"
                placeholder="Email Address *"
              />

              <input
                type="text"
                placeholder="Your City"
              />

            </div>

            <select>
              <option>Select Course / Stream *</option>
              <option>B.Tech</option>
              <option>MBA</option>
              <option>BCA</option>
              <option>MCA</option>
              <option>B.Sc</option>
              <option>M.Sc</option>
            </select>

            <textarea
              rows="5"
              placeholder="Your message (optional)"
            ></textarea>

            <button type="submit">
              <Send size={20} />
              Get Free Counselling
            </button>

          </form>

          <p className="privacy">
            We respect your privacy. Your details are safe with us.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Counselling;