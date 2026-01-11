import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { 
  FiCpu, 
  FiLayers, 
  FiCheckCircle, 
  FiCloud, 
  FiBarChart2,
  FiBox,
  FiGlobe,
  FiChevronDown,
  FiX,
  FiMenu
} from "react-icons/fi";
import { IoIosStarHalf } from "react-icons/io";
import { FaBrain, FaChartBar, FaClipboardCheck, FaRobot } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { TbCube } from "react-icons/tb";
import { TbDatabaseSearch } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { FaCloud } from "react-icons/fa";


const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // All services in a single array, maintaining the original sequence
  const services = [
    {
      name: "LLM Evaluation Platform",
      icon: <FaBrain size={18} />,
      link: "/services?service=llm-evaluation"
    },
    {
      name: "RAG Pipelines: Design & Integration",
      icon: <TbDatabaseSearch size={18} />,
      link: "/services?service=rag-pipelines"
    },
    {
      name: "AI Agent Testing",
      icon: <FaRobot size={18} />,
      link: "/services?service=ai-agent-testing"
    },
    {
      name: "AI, ML & Data Science",
      icon: <LuBrainCircuit size={18} />,
      link: "/services?service=ai-ml-data-science"
    },
    {
      name: "Cloud Computing & DevOps",
      icon: <FaCloud size={18} />,
      link: "/services?service=cloud-devops"
    },
    {
      name: "Quality Assurance & Testing",
      icon: <FaClipboardCheck size={18} />,
      link: "/services?service=quality-assurance-testing"
    },
    {
      name: "ERP & Enterprise Systems",
      icon: <GiFactory size={18} />,
      link: "/services?service=erp-enterprise-systems"
    },
    {
      name: "Business Intelligence & Analytics",
      icon: <FaChartBar size={18} />,
      link: "/services?service=business-intelligence"
    },
    {
      name: "Product Development",
      icon: <TbCube size={18} />,
      link: "/services?service=product-development"
    },
    {
      name: "Web & App Development",
      icon: <FiGlobe size={18} />,
      link: "/services?service=web-app-development"
    }
  ];

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              Stellar Analytics
              <IoIosStarHalf />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="navbar-links desktop">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            
            {/* Services Dropdown */}
            <div 
              className="dropdown-container"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="dropdown-trigger">
                Services
                <FiChevronDown className={`chevron ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="dropdown-content wide-dropdown">
                  <div className="dropdown-grid">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="dropdown-grid-item"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="dropdown-item-content">
                          <span className="dropdown-grid-icon">{service.icon}</span>
                          <span className="dropdown-grid-title">{service.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact">Contact Us</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* CTA Button */}
          <div className="navbar-cta">
            <button className="cta-button">
              Get a Free Consultation
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav-links">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              
              {/* Mobile Services Dropdown */}
              <div className="mobile-dropdown-container">
                <button 
                  className="mobile-dropdown-trigger"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <FiChevronDown className={`chevron ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="mobile-dropdown-content">
                    <div className="mobile-services-list">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="mobile-service-item"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                        >
                          <div className="mobile-service-content">
                            <span className="mobile-service-icon">{service.icon}</span>
                            <span className="mobile-service-title">{service.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;