// ContactUs.jsx
import React from "react";
import "../styles/contactus.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  FiUsers
} from "react-icons/fi";

export default function ContactUs() {
  return (
    <div className="about-wrapper">
       {/* ================= NAVBAR ================= */}
      <Navbar/>
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-content">
          <h1> Are you ready to  turn ideas into production?</h1>
          <p>
            Schedule a free 30-minute consultation - we can discuss feasibility and next steps.
          </p>
         
          
        </div>

        {/* Right Section – Form */}
        <div className="contact-form-box">
          <form>
            <div className="row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>

            <input type="email" placeholder="Business email" />
            <input type="text" placeholder="Job title" />

            <div className="row">
              <select>
                <option>Country/Region</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
              <input type="tel" placeholder="Phone number (optional)" />
            </div>

            <select>
              <option>Company size (no. of employees)</option>
              <option>1–50</option>
              <option>51–200</option>
              <option>201–1000</option>
              <option>1000+</option>
            </select>

            

            <textarea
              rows="4"
              placeholder="How do you plan to use Software, Data & AI?"
            ></textarea>

            <div className="checkbox">
              <input type="checkbox" />
              <span>I agree to receive email communications from Stellar Analytics.</span>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    {/* ================= TEAM CTA SECTION ================= */}
            <section className="team-cta-section">
              <div className="team-cta-bg" />
              <div className="team-cta-content">
                <div className="team-icon">
                  <FiUsers size={48} />
                </div>
                <blockquote className="team-quote">
                  "We have a dedicated team ready to build your next breakthrough."
                </blockquote>
                <p className="team-subtext">
                  Our cross-disciplinary teams of engineers, data scientists, and product designers work together to transform your vision into reality.
                </p>
                <button className="team-cta-button">
                  Let's Innovate Together
                </button>
              </div>
            </section>

    {/* ================= FOOTER ================= */}
      <Footer/>
    </div>
  );
}
