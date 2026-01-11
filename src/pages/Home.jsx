import "../styles/home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoIosStarHalf } from "react-icons/io";
import { useEffect, useState } from "react";
import { 
  FiCpu, 
  FiSettings, 
  FiBarChart2, 
  FiTrendingUp 
} from "react-icons/fi";
import {
  FiGlobe,
  FiBox,
  FiCloud,
  FiCheckCircle,
  FiLayers
} from "react-icons/fi";
import {
  FiShoppingCart,
  FiCreditCard,
  FiHeart,
  FiTruck
} from "react-icons/fi";
import { FiDatabase, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaBrain } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { TbDatabaseSearch, TbCube } from "react-icons/tb";
import { FaRobot, FaCloud, FaClipboardCheck, FaChartBar } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import {
  HiUserGroup,
  HiChip,
  HiCloud,
  HiTrendingUp,
  HiChatAlt2,
  HiBriefcase
} from "react-icons/hi";



const Home = () => {

    const marketingLines = [
    "Boost your revenue with AI-driven insights",
    "Automate processes to save time & costs",
    "Transform data into actionable strategies"
  ];

  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
  const els = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in-view");
      });
    },
    { threshold: 0.15 }
  );

  els.forEach(el => observer.observe(el));
  return () => observer.disconnect();
}, []);

  
  useEffect(() => {
    const typingSpeed = 80; // ms per character
    const pauseBetweenLines = 1500; // ms between lines

    const type = () => {
      if (charIndex < marketingLines[lineIndex].length) {
        setCurrentText((prev) => prev + marketingLines[lineIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setLineIndex((prev) => (prev + 1) % marketingLines.length);
        }, pauseBetweenLines);
      }
    };

    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex]);


  return (
    <div className="home-wrapper">
    <Navbar />

{/* ================= HERO ================= */}
<section className="hero">
  {/* Enhanced Background with Multiple Layers */}
  <div className="hero-bg-layers">
    <div className="bg-layer layer-1"></div>
    <div className="bg-layer layer-2"></div>
    <div className="bg-layer layer-3"></div>
    <div className="bg-gradient-overlay"></div>
    
    {/* Animated Grid Pattern */}
    <div className="grid-pattern"></div>
    
    {/* Floating AI Icons */}
    <div className="floating-icons">
      <div className="floating-icon" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>
        <FaBrain size={24} />
      </div>
      <div className="floating-icon" style={{ top: '25%', left: '85%', animationDelay: '1s' }}>
        <FiCpu size={24} />
      </div>
      <div className="floating-icon" style={{ top: '65%', left: '15%', animationDelay: '2s' }}>
        <FiDatabase size={24} />
      </div>
      <div className="floating-icon" style={{ top: '75%', left: '90%', animationDelay: '3s' }}>
        <FaRobot size={24} />
      </div>
    </div>
    
    {/* Pulse Rings */}
    <div className="pulse-ring ring-1"></div>
    <div className="pulse-ring ring-2"></div>
    <div className="pulse-ring ring-3"></div>
  </div>

  <div className="hero-content">
  
    {/* Enhanced Title with Staggered Animation */}
    <div className="hero-header">
  <h1 className="hero-title">
    <span className="title-line line-1">We Don't Just Build AI</span>
    <span className="title-line line-2">
      <span className="highlight-gradient">We Prove It Works</span>
      <span className="sparkle">✨</span>
    </span>
  </h1>

  <p className="hero-subtitle">
    We are an AI and software engineering studio focused on building systems that
    work reliably in the real world. From LLM evaluation platforms and RAG
    pipelines to AI agent testing, cloud infrastructure, and enterprise software.
  </p>
</div>



{/* ================= AI VALUE VISUALIZER ================= */}
<div className="ai-value-visualizer">
  {/* Tech-inspired Header */}
  <div className="visualizer-header">
    <div className="header-left">
      <div className="header-icon">
        <div className="icon-core"></div>
        <FaBrain className="brain-icon" />
      </div>
      <div className="header-text">
        <h3 className="header-title">AI Value Stream</h3>
        <div className="header-subtitle">Real-time insight generation</div>
      </div>
    </div>
    <div className="header-status">
      <span className="status-indicator active"></span>
      <span className="status-text">Processing</span>
    </div>
  </div>

  {/* Main Visualization */}
  <div className="visualization-grid">
    {/* Data Input */}
    <div className="grid-cell data-input">
      <div className="cell-header">
        <FiDatabase className="cell-icon" />
        <span className="cell-title">Data Input</span>
      </div>
      <div className="cell-content">
        <div className="data-stream">
          <div className="stream-line">
            <div className="stream-dot"></div>
            <div className="stream-dot"></div>
            <div className="stream-dot"></div>
          </div>
          <div className="stream-text">Processing raw data streams</div>
        </div>
      </div>
    </div>

    {/* AI Processing Core */}
    <div className="grid-cell processing-core">
      <div className="cell-header">
        <FiCpu className="cell-icon" />
        <span className="cell-title">AI Processing</span>
      </div>
      <div className="cell-content">
        <div className="processing-visual">
          <div className="core-ring outer"></div>
          <div className="core-ring middle"></div>
          <div className="core-ring inner"></div>
          <div className="core-center">
            <div className="center-glow"></div>
            <span className="core-percent">
              {Math.round((charIndex / marketingLines[lineIndex].length) * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Value Output */}
    <div className="grid-cell value-output">
      <div className="cell-header">
        <FiBarChart2 className="cell-icon" />
        <span className="cell-title">Value Output</span>
      </div>
      <div className="cell-content">
        <div className="typing-display">
          <div className="typing-line">
            <span className="typing-text">{currentText}</span>
            <span className="typing-cursor"></span>
          </div>
          <div className="typing-meta">
            <span className="meta-item">Live</span>
            <span className="meta-item">·</span>
            <span className="meta-item">High Confidence</span>
          </div>
        </div>
      </div>
    </div>

    {/* Connection Lines */}
    <div className="connection connection-1"></div>
    <div className="connection connection-2"></div>
  </div>

  {/* Progress Indicator */}
  <div className="progress-indicator">
    <div className="progress-bar">
      <div 
        className="progress-fill"
        style={{ 
          width: `${(charIndex / marketingLines[lineIndex].length) * 100}%` 
        }}
      ></div>
    </div>
    <div className="progress-label">
      <span>Generating insights</span>
      <span className="progress-value">
        {Math.round((charIndex / marketingLines[lineIndex].length) * 100)}% complete
      </span>
    </div>
  </div>

  {/* Next Insight */}
  <div className="next-insight">
    <div className="next-label">Next insight:</div>
    <div className="next-text">
      {lineIndex < marketingLines.length - 1 ? 
        marketingLines[lineIndex + 1] : 
        marketingLines[0]}
    </div>
  </div>
</div>

{/* Enhanced Actions with Glow Effects */}
    <div className="hero-actions">
      <button className="primary-btn glow-effect">
        <span className="btn-text">Get a Free Consultation</span>
        <div className="btn-glow"></div>
        <span className="btn-sparkle">💫</span>
      </button>
      {/* <button className="secondary-btn hover-glow">
        <span className="btn-text">See Our Work</span>
        <div className="btn-hover-light"></div>
      </button> */}
    </div>
    
  </div>
</section>

{/* ================= WHAT WE DO GRID ================= */}
<section className="capabilities">
  <div className="container">

    {/* HEADER */}
    <div className="capabilities-header">
      <h2 className="gradient-heading">What We Build & Deliver</h2>
      <p>
        We design, test, and deploy production-grade AI systems — supported by
        robust software engineering and cloud infrastructure.
      </p>
    </div>

    {/* ================= AI SERVICES (TOP) ================= */}
    <div className="capabilities-grid featured">

      <div className="cap-card featured" data-animate>
        <FaBrain size={28} />
        <h3>LLM Evaluation Platform</h3>
        <p>
          Objective testing and monitoring of large language models across
          accuracy, robustness, hallucinations, safety, and task completion.
        </p>
        <Link to="/services?service=llm-evaluation" className="learn-more">
          Learn more →
        </Link>
      </div>

      <div className="cap-card featured" data-animate>
        <TbDatabaseSearch size={28} />
        <h3>RAG Pipelines: Design & Integration</h3>
        <p>
          Retrieval-augmented generation pipelines built for accuracy,
          traceability, and production performance.
        </p>
        <Link to="/services?service=rag-pipelines" className="learn-more">
          Learn more →
        </Link>
      </div>

      <div className="cap-card featured" data-animate>
        <FaRobot size={28} />
        <h3>AI Agent Testing</h3>
        <p>
          End-to-end testing of autonomous and tool-using agents across workflows,
          decision paths, and failure scenarios.
        </p>
        <Link to="/services?service=ai-agent-testing" className="learn-more">
          Learn more →
        </Link>
      </div>

      <div className="cap-card featured" data-animate>
        <LuBrainCircuit size={28} />
        <h3>AI, ML & Data Science</h3>
        <p>
          Intelligent systems powered by ML, NLP, and advanced models
        </p>
        <Link to="/services?service=ai-ml-data-science" className="learn-more">
          Learn more →
        </Link>
      </div>

    </div>

    {/* ================= CORE ENGINEERING ================= */}
    <div className="capabilities-grid">

      <div className="cap-card" data-animate>
        <FaCloud size={28} />
        <h3>Cloud Computing & DevOps</h3>
        <p>Secure cloud infrastructure and CI/CD pipelines.</p>
        <Link to="/services?service=cloud-devops" className="learn-more">
          Learn more →
        </Link>
      </div>

      <div className="cap-card" data-animate>
        <FaClipboardCheck size={28} />
        <h3>Quality Assurance & Testing</h3> 
        <p>Automation, performance, and security testing solutions.</p>
        <Link to="/services?service=quality-assurance-testing" className="learn-more">
          Learn more →
        </Link>
      </div>

      <div className="cap-card" data-animate>
        <GiFactory size={28} />
       <h3>ERP & Enterprise Systems</h3> 
       <p>Integrated systems for efficient enterprise operations.</p>
        <Link to="/services?service=erp-enterprise-systems" className="learn-more">
          Learn more →
        </Link>
      </div>

      <div className="cap-card" data-animate>
        <FaChartBar size={28} />
        <h3>Business Intelligence & Analytics</h3>
        <p>Dashboards and insights for data-driven decisions.</p>
        <Link to="/services?service=business-intelligence" className="learn-more">
          Learn more →
        </Link>
      </div>

      <div className="cap-card" data-animate>
        <TbCube size={28} />
        <h3>Product Development</h3>
        <p>MVPs to enterprise-grade platforms.</p>
        <Link to="/services?service=product-development" className="learn-more">
          Learn more →
        </Link>
      </div>

      <div className="cap-card" data-animate>
        <FiGlobe size={28} />
        <h3>Web & App Development</h3>
        <p>Scalable, high-performance web and mobile applications.</p>
        <Link to="/services?service=web-app-development" className="learn-more">
          Learn more →
        </Link>
      </div>

    </div>
  </div>
</section>

{/* ================= HOW WE THINK ================= */}
<section className="how-we-think">
  <div className="how-container">

    {/* Header */}

          <div className="capabilities-header">
            <h2 className="gradient-heading">How We Think</h2>
            <p>
              We don’t jump to solutions. We move deliberately — from data,
              to intelligence, to real-world impact.
            </p>
          </div>
  

    {/* Cards */}
    <div className="think-stack">
      {[
  {
    step: "01",
    title: "DATA",
    icon: <FiDatabase />,
    image: "/images/Data.png",
    text:
      "Get the data: collect, clean, and store it properly—pipelines, ETLs, and storage solutions so that the data used by the teams is reliable."
  },
  {
    step: "02",
    title: "INFORMATION",
    icon: <FiBarChart2 />,
    image: "/images/Information.png",
    text:
      "Turn raw data into intelligent actions: analytics and models that uncover insights and risks."
  },
  {
    step: "03",
    title: "DISTRIBUTION",
    icon: <FiSend />,
    image: "/images/Distribution.png",
    text:
      "Bring insights and automation where they matter – in applications, integrations, APIs, and notifications that empower users and enable decision automation."
  }
]
.map((card, index) => (
        <div
          key={index}
          className="think-card"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty(
              "--x",
              `${e.clientX - rect.left}px`
            );
            e.currentTarget.style.setProperty(
              "--y",
              `${e.clientY - rect.top}px`
            );
          }}
        >
          <span className="think-step">{card.step}</span>

          <div className="think-icon">{card.icon}</div>

          <span className="think-accent" />

    <div className="think-visual">
      <img src={card.image} alt={card.title} />
    </div>

          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= POWERING THE FLOW ================= */}
<section className="powering-flow v2">
  <div className="container two-col">
    {/* <div className="flow-content">
      <span className="eyebrow">POWERING THE FLOW</span>
    </div> */}

    <div className="capabilities-header">
      <span className="eyebrow">POWERING THE FLOW</span>
      <h2 className="gradient-heading"> Artificial Intelligence & Automation </h2>
      <p>
         We overlay ML & AI solutions on top of your data to eliminate repetitive work,
        automate decision-making, and turn insights into action faster and more accurately.
      </p>
    </div>

    <div className="icon-grid">
      <div className="icon-card glow-blue" data-animate>
        <FiCpu size={26} />
        <span>AI Models</span>
      </div>
      <div className="icon-card glow-indigo" data-animate>
        <FiSettings size={26} />
        <span>Automation</span>
      </div>
      <div className="icon-card glow-cyan" data-animate>
        <FiBarChart2 size={26} />
        <span>Insights</span>
      </div>
      <div className="icon-card glow-sky" data-animate>
        <FiTrendingUp size={26} />
        <span>Scale</span>
      </div>
    </div>
  </div>
</section>

{/* ================= APPROACH ================= */}
<section className="approach v3">
  <div className="container">
     <div className="capabilities-header">
      <span className="eyebrow">OUR PROCES</span>
      <h2 className="gradient-heading"> A Proven Approach</h2>
      <p>
         A structured, iterative lifecycle designed to take ideas from discovery
        to production — and keep them running.
      </p>
    </div>

    {/* Diagram as centerpiece */}
    <div className="approach-visual">
      <img
        src="/images/our-process.png"
        alt="AI Development Lifecycle"
      />
    </div>

    {/* Interpretation */}
    <div className="approach-steps">
      {[
        {
          title: "Discover",
          text: "Align on goals, systems, and data reality."
        },
        {
          title: "Design",
          text: "Define architecture, UX, and data contracts."
        },
        {
          title: "Build",
          text: "Iterate fast with test-driven, cloud-native delivery."
        },
        {
          title: "Optimize",
          text: "Tune models, monitor performance, control cost."
        },
        {
          title: "Run",
          text: "Operate with SLAs, observability, and continuous improvement."
        }
      ].map((step, i) => (
        <div key={i} className="approach-step">
          <span className="step-index">0{i + 1}</span>
          <h4>{step.title}</h4>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ================= WHY US / IMPACT ================= */}

<section className="impact">
  <div className="container">
    
          <div className="capabilities-header">
            <h2 className="gradient-heading">WHY PARTNER WITH US</h2>
            <p>
              We focus on outcomes, reliability, and long-term value — not just delivery.
            </p>
          </div>


    <div className="impact-grid">
      {[
        {
          title: "Cross-disciplinary teams",
          icon: <HiUserGroup />,
          text: "Engineers, data scientists, and product designers working as one."
        },
        {
          title: "Real-world AI",
          icon: <HiChip />,
          text: "Models that perform predictably in production, not just demos."
        },
        {
          title: "Cloud-native & cost-aware",
          icon: <HiCloud />,
          text: "Scalable systems built with performance and budget in mind."
        },
        {
          title: "ROI-focused engineering",
          icon: <HiTrendingUp />,
          text: "Every solution is measured by business impact, not vanity metrics."
        },
        {
          title: "Transparent communication",
          icon: <HiChatAlt2 />,
          text: "Clear roadmaps, frequent demos, and shared understanding."
        },
        {
          title: "Long-term partnership mindset",
          icon: <HiBriefcase />,
          text: "We build, support, and evolve systems alongside your team."
        }
      ].map((item, i) => (
        <div key={i} className="impact-card">
          <div className="impact-card-inner">
            {/* Front */}
            <div className="impact-card-front">
              <span className="impact-icon">{item.icon}</span>
              <h4>{item.title}</h4>
            </div>

            {/* Back */}
            <div className="impact-card-back">
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ================= INDUSTRIES ================= */}
<section className="industries slider-v2">

        <div className="capabilities-header">
          <h2 className="gradient-heading">Industries We Help</h2>
        </div>


  <div className="industry-slider">
    <div className="industry-track">
      {[
        { label: "E-commerce", icon: <FiShoppingCart /> },
        { label: "FinTech", icon: <FiCreditCard /> },
        { label: "Healthcare", icon: <FiHeart /> },
        { label: "Logistics", icon: <FiTruck /> },
        { label: "SaaS", icon: <FiCloud /> },
        { label: "Manufacturing", icon: <FiSettings /> },
      ]
        .concat([
          { label: "E-commerce", icon: <FiShoppingCart /> },
          { label: "FinTech", icon: <FiCreditCard /> },
          { label: "Healthcare", icon: <FiHeart /> },
          { label: "Logistics", icon: <FiTruck /> },
          { label: "SaaS", icon: <FiCloud /> },
          { label: "Manufacturing", icon: <FiSettings /> },
        ])
        .map((item, i) => (
          <div key={i} className="industry-card">
            <span className="industry-icon">{item.icon}</span>
            <span className="industry-name">{item.label}</span>
          </div>
        ))}
    </div>
  </div>
</section>


<section className="impact-section">
  <div className="container">

    <div className="capabilities-header">
          <h2 className="gradient-heading">Case Previews</h2>
        </div>
    {/* <h2 className="impact-heading">Case Previews</h2> */}

    <div className="impact-wrapper">
      <div className="impact-item">
        <div className="impact-value">50%</div>
        <div className="impact-text">Reduction in Cloud Costs</div>
      </div>

      <div className="impact-item">
        <div className="impact-value">80%</div>
        <div className="impact-text">
          Reduction in Manual Governance Processes
        </div>
      </div>

      <div className="impact-item">
        <div className="impact-value">500+</div>
        <div className="impact-text">Resource Types Supported</div>
      </div>
    </div>
  </div>
</section>

{/* ================= FOOTER ================= */}
<Footer/>
    </div>
  );
};

export default Home;

