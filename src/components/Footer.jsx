import "../styles/footer.css";
import { IoIosStarHalf } from "react-icons/io";
import {
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiInstagram
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* CTA STRIP */}
        <div className="footer-cta">
          <h3>Start building scalable digital solutions</h3>
          <div className="footer-cta-actions">
            <button className="cta-primary">Get a free consultation</button>
            <button className="cta-secondary">View case studies</button>
          </div>
          <p className="cta-note">No obligation. No hard sell.</p>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              Stellar Analytics<IoIosStarHalf />
            </h2>
            <p className="footer-mission">
              We design and build scalable software, data platforms,
              and AI-powered systems for growing businesses.
            </p>

            <div className="social-links">
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiGithub /></a>
              <a href="#"><FiInstagram /></a>
            </div>
          </div>

          {/* LINKS */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="#">Case Studies</Link></li>
              <li><Link to="#">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li>Web & App Development</li>
              <li>AI & Machine Learning</li>
              <li>Cloud & DevOps</li>
              <li>Data Analytics</li>
              <li>Enterprise Systems</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Security</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Stellar Analytics. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
