import "../styles/services.css"; 
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  FiImage, FiCheckCircle,
  FiLayers, FiTrendingUp, FiUsers, FiArrowLeft, FiChevronRight,
  FiCode, FiDatabase, FiCpu as FiCpuIcon, FiServer, FiShield,
  FiGitBranch, FiMessageSquare, FiTarget, FiZap, FiActivity,
  FiArrowRight, FiPlay, FiSettings, FiTool, FiAward, FiMonitor,
  FiPieChart, FiBriefcase, FiSmartphone, FiGlobe, FiBox,
  FiBarChart2, FiClock, FiDollarSign, FiShield as FiShieldIcon, 
  FiUsers as FiUsersIcon, FiSearch, FiPackage, FiGrid, FiTerminal,
  FiSmartphone as FiSmartphoneIcon, FiCpu
} from "react-icons/fi";
import { IoIosStarHalf } from "react-icons/io";
import { MdSecurity, MdAutoAwesome, MdSpeed, MdPrecisionManufacturing, MdWorkspaces } from "react-icons/md";
import { GiArtificialIntelligence, GiCrystalBall, GiSpiderWeb, GiFactory } from "react-icons/gi";
import { FaBrain, FaRobot, FaChartLine, FaCloud, FaChartBar, FaProductHunt, FaMobileAlt, FaClipboardCheck } from "react-icons/fa";
import { TbDatabaseSearch } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { BsFillGearFill } from "react-icons/bs";
import { TbCube } from "react-icons/tb";


const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);
  
  // All services data with detailed information
  const allServices = {
    "llm-evaluation": {
      id: "llm-evaluation",
      title: "LLM Evaluation Platform",
      icon: <FiMessageSquare size={32} />,
      heroIcon: <FaBrain className="floating-icon" size={80} />,
      shortDescription: "Objective testing and monitoring of large language models",
      description: "Comprehensive platform for evaluating large language models across multiple dimensions including accuracy, robustness, safety, and task completion rates.",
      overview: "Our LLM Evaluation Platform provides systematic testing methodologies to ensure your language models perform reliably in production environments. We evaluate against industry benchmarks and custom business metrics.",
      problem: "Most organizations experimenting with large language models struggle with inconsistent or incorrect responses, hallucinations that erode user trust, lack of objective quality measurement, and risk when deploying LLMs in production environments.",
      solution: "Stellar Analytics builds and operates LLM Evaluation Platforms that bring engineering discipline, observability, and accountability to generative AI systems. We treat LLMs like any other production system: measurable, testable, and continuously improvable.",
      deliverables: [
        "Automated pipelines to evaluate LLM responses at scale",
        "Custom evaluation metrics aligned with business goals",
        "Hallucination, bias, and failure-pattern detection",
        "Prompt versioning and model comparison frameworks",
        "Human review workflows integrated into iteration cycles"
      ],
      impact: [
        "Reduced risk when deploying generative AI",
        "Higher-quality, more consistent AI outputs",
        "Faster iteration cycles with measurable improvements",
        "Confidence for leadership and compliance teams"
      ],
      outcome: "You move from 'We think the model is working' to 'We know exactly how well it's performing — and why.'",
      process: [
        { title: "Define Metrics", desc: "Establish evaluation criteria" },
        { title: "Benchmark Setup", desc: "Create testing environment" },
        { title: "Automated Testing", desc: "Run comprehensive tests" },
        { title: "Analysis & Reports", desc: "Generate insights" },
        { title: "Continuous Monitoring", desc: "Real-time performance tracking" }
      ],
      diagram: "llm-evaluation-diagram.png",
      images: [
        "llm-evaluation-1.png",
        "llm-evaluation-2.png",
        "llm-evaluation-3.png"
      ],
      highlight: "Enterprise-grade LLM testing suite",
      stats: [
        { value: "99.8%", label: "Accuracy Rate", icon: <FiCheckCircle /> },
        { value: "24/7", label: "Real-time Monitoring", icon: <FiMonitor /> },
        { value: "10x", label: "Faster Iteration", icon: <MdSpeed /> },
        { value: "Zero", label: "Hallucination Risk", icon: <MdSecurity /> }
      ]
    },
    "rag-pipelines": {
      id: "rag-pipelines",
      title: "RAG Pipelines: Design & Integration",
      // icon: <TbDatabaseSearch size={32} />,
      heroIcon: <TbDatabaseSearch className="floating-icon" size={80} />,
      shortDescription: "Retrieval-augmented generation pipelines for accuracy",
      description: "Build robust RAG systems that enhance LLM capabilities with your proprietary data while maintaining accuracy and traceability.",
      overview: "We design and implement production-ready RAG pipelines that seamlessly integrate with your existing infrastructure, providing accurate, contextual responses grounded in your data.",
      problem: "LLMs on their own do not know your internal data, produce outdated or incorrect information, cannot respect document-level permissions, and become unreliable at scale.",
      solution: "We design Retrieval-Augmented Generation (RAG) systems that connect LLMs to your trusted data sources — securely, efficiently, and at scale. Our approach ensures AI responses are grounded in your data, not generic internet knowledge.",
      deliverables: [
        "End-to-end RAG architecture tailored to your use case",
        "Data ingestion pipelines from PDFs, databases, APIs, and knowledge bases",
        "Optimal chunking, embedding, and retrieval strategies",
        "Vector database implementation and tuning",
        "Access control, auditability, and security enforcement"
      ],
      impact: [
        "Accurate, explainable AI responses",
        "Reduced hallucinations and misinformation",
        "Faster knowledge access for employees and customers",
        "Increased trust in AI-driven systems"
      ],
      outcome: "Your AI becomes a reliable knowledge interface, not a liability.",
      process: [
        { title: "Data Preparation", desc: "Clean and structure source data" },
        { title: "Embedding Strategy", desc: "Select optimal embedding models" },
        { title: "Retriever Setup", desc: "Implement efficient search" },
        { title: "Generator Integration", desc: "Connect with LLMs" },
        { title: "Evaluation", desc: "Test pipeline performance" }
      ],
      diagram: "rag-pipeline-diagram.png",
      images: [
        "rag-pipeline-1.png",
        "rag-pipeline-2.png",
        "rag-pipeline-3.png"
      ],
      highlight: "End-to-end RAG implementation",
      stats: [
        { value: "98%", label: "Accuracy Improvement", icon: <FiTrendingUp /> },
        { value: "60%", label: "Faster Retrieval", icon: <MdSpeed /> },
        { value: "100%", label: "Data Security", icon: <FiShield /> },
        { value: "Zero", label: "Outdated Info", icon: <FiClock /> }
      ]
    },
    "ai-agent-testing": {
      id: "ai-agent-testing",
      title: "AI Agent Testing",
      icon: <FiZap size={32} />,
      heroIcon: <FaRobot className="floating-icon" size={80} />,
      shortDescription: "End-to-end testing of autonomous agents",
      description: "Comprehensive testing framework for AI agents across workflows, decision paths, and failure scenarios.",
      overview: "Our AI Agent Testing suite validates autonomous agents in simulated environments, ensuring they make correct decisions, handle edge cases, and operate within defined boundaries.",
      problem: "AI agents are powerful — and dangerous if untested. Clients struggle with agents taking unexpected actions, tool misuse or infinite loops, unclear decision logic, and no way to validate behavior before deployment.",
      solution: "We provide AI Agent Testing frameworks that validate how agents think, decide, and act across real workflows. We test agents the same way we test critical systems — rigorously and defensively.",
      deliverables: [
        "Scenario-based testing of autonomous agents",
        "Multi-step task execution validation",
        "Tool interaction and API usage testing",
        "Failure-mode and recovery analysis",
        "Regression testing as agents evolve"
      ],
      impact: [
        "Safer deployment of autonomous systems",
        "Predictable and auditable agent behavior",
        "Reduced operational and reputational risk",
        "Higher confidence in AI-driven automation"
      ],
      outcome: "Your agents behave like trained professionals — not experiments.",
      process: [
        { title: "Agent Definition", desc: "Define agent capabilities" },
        { title: "Scenario Creation", desc: "Build test environments" },
        { title: "Automated Testing", desc: "Execute test suites" },
        { title: "Behavior Analysis", desc: "Monitor decision patterns" },
        { title: "Optimization", desc: "Improve agent performance" }
      ],
      diagram: "ai-agent-testing-diagram.png",
      images: [
        "ai-agent-1.png",
        "ai-agent-2.png",
        "ai-agent-3.png"
      ],
      highlight: "Production-ready agent validation",
      stats: [
        { value: "99.9%", label: "Decision Accuracy", icon: <FiCheckCircle /> },
        { value: "Zero", label: "Unexpected Actions", icon: <FiShield /> },
        { value: "100%", label: "Tool Safety", icon: <FiTool /> },
        { value: "24/7", label: "Monitoring", icon: <FiMonitor /> }
      ]
    },
    "ai-ml-data-science": {
      id: "ai-ml-data-science",
      title: "AI, ML & Data Science",
      icon: <FiCpuIcon size={32} />,
      heroIcon: <LuBrainCircuit className="floating-icon" size={80} />,
      shortDescription: "Intelligent systems powered by advanced models",
      description: "End-to-end AI/ML solutions from concept to deployment, leveraging cutting-edge algorithms and techniques.",
      overview: "We develop custom AI and machine learning solutions that solve complex business problems, from predictive analytics to computer vision and natural language processing.",
      problem: "Many organizations have data but cannot extract actionable insights, rely on manual decision-making, struggle to operationalize models, and fail to connect AI initiatives to ROI.",
      solution: "We build production-ready AI and ML systems that are designed to operate inside real business workflows — not just notebooks. Our focus is on usable intelligence, not academic models.",
      deliverables: [
        "Predictive and prescriptive analytics models",
        "NLP, computer vision, and recommendation systems",
        "End-to-end ML pipelines (data → model → deployment)",
        "Monitoring, retraining, and performance tracking",
        "Explainability for business and compliance needs"
      ],
      impact: [
        "Faster, data-driven decisions",
        "Automated insights at scale",
        "Improved forecasting and risk management",
        "Measurable business outcomes"
      ],
      outcome: "Your data becomes an active asset, not a passive byproduct.",
      process: [
        { title: "Problem Definition", desc: "Understand business needs" },
        { title: "Data Exploration", desc: "Analyze and prepare data" },
        { title: "Model Development", desc: "Build and train models" },
        { title: "Evaluation", desc: "Validate model performance" },
        { title: "Deployment", desc: "Production implementation" }
      ],
      diagram: "ai-ml-diagram.png",
      images: [
        "ai-ml-1.png",
        "ai-ml-2.png",
        "ai-ml-3.png"
      ],
      highlight: "Custom AI solutions",
      stats: [
        { value: "95%", label: "Prediction Accuracy", icon: <FiTarget /> },
        { value: "3x", label: "ROI Improvement", icon: <FiDollarSign /> },
        { value: "Real-time", label: "Insights", icon: <FiActivity /> },
        { value: "Scalable", label: "Architecture", icon: <FiTrendingUp /> }
      ]
    },
    "cloud-devops": {
      id: "cloud-devops",
      title: "Cloud Computing & DevOps",
      icon: <FiServer size={32} />,
      heroIcon: <FaCloud className="floating-icon" size={80} />,
      shortDescription: "Secure cloud infrastructure and CI/CD pipelines",
      description: "Modern cloud infrastructure and DevOps practices to accelerate development and ensure reliability.",
      overview: "We design, implement, and manage cloud infrastructure using best practices in DevOps, ensuring scalability, security, and cost-efficiency.",
      problem: "Legacy infrastructure leads to slow deployments, scaling failures, high operational costs, and fragile systems that break under load.",
      solution: "We design cloud-native, DevOps-driven infrastructure that supports growth, resilience, and automation from day one.",
      deliverables: [
        "Secure cloud architectures on AWS, Azure, or GCP",
        "CI/CD pipelines for rapid, reliable releases",
        "Infrastructure as Code for repeatability and control",
        "Containerization and orchestration (Docker, Kubernetes)",
        "Cost monitoring and optimization"
      ],
      impact: [
        "Faster time to market",
        "Higher system reliability",
        "Reduced infrastructure spend",
        "Scalable platforms ready for growth"
      ],
      outcome: "Your infrastructure stops being a bottleneck and starts being an advantage.",
      process: [
        { title: "Assessment", desc: "Analyze current infrastructure" },
        { title: "Architecture Design", desc: "Plan cloud solution" },
        { title: "Implementation", desc: "Deploy infrastructure" },
        { title: "Automation", desc: "Set up CI/CD pipelines" },
        { title: "Optimization", desc: "Monitor and improve" }
      ],
      diagram: "cloud-devops-diagram.png",
      images: [
        "cloud-devops-1.png",
        "cloud-devops-2.png",
        "cloud-devops-3.png"
      ],
      highlight: "Scalable cloud solutions",
      stats: [
        { value: "99.9%", label: "Uptime", icon: <FiCheckCircle /> },
        { value: "60%", label: "Cost Reduction", icon: <FiDollarSign /> },
        { value: "10x", label: "Faster Deployments", icon: <MdSpeed /> },
        { value: "Auto-scaling", label: "Infrastructure", icon: <FiTrendingUp /> }
      ]
    },
    "quality-assurance-testing": {
      id: "quality-assurance-testing",
      title: "Quality Assurance & Testing",
      icon: <FiCheckCircle size={32} />,
      heroIcon: <FaClipboardCheck className="floating-icon" size={80} />,
      shortDescription: "Comprehensive testing solutions",
      description: "End-to-end quality assurance services ensuring software reliability, performance, and security.",
      overview: "Our QA team implements robust testing strategies covering functional, performance, security, and usability aspects to deliver bug-free software.",
      problem: "Rushed releases lead to production bugs, poor user experience, security vulnerabilities, and lost customer trust.",
      solution: "We embed quality engineering throughout the development lifecycle — not as an afterthought.",
      deliverables: [
        "Manual and automated testing strategies",
        "Performance and load testing under real conditions",
        "Security and vulnerability testing",
        "Cross-browser and cross-device testing",
        "Continuous quality reporting"
      ],
      impact: [
        "Fewer production failures",
        "Higher customer satisfaction",
        "Lower long-term maintenance costs",
        "Predictable release cycles"
      ],
      outcome: "You ship faster without sacrificing reliability.",
      process: [
        { title: "Test Planning", desc: "Define test strategy" },
        { title: "Test Design", desc: "Create test cases" },
        { title: "Test Execution", desc: "Run comprehensive tests" },
        { title: "Defect Management", desc: "Track and resolve issues" },
        { title: "Reporting", desc: "Provide quality metrics" }
      ],
      diagram: "qa-testing-diagram.png",
      images: [
        "qa-testing-1.png",
        "qa-testing-2.png",
        "qa-testing-3.png"
      ],
      highlight: "Zero defect guarantee",
      stats: [
        { value: "99.9%", label: "Bug-free Delivery", icon: <FiCheckCircle /> },
        { value: "70%", label: "Faster Releases", icon: <MdSpeed /> },
        { value: "Zero", label: "Critical Bugs", icon: <FiShield /> },
        { value: "100%", label: "Test Coverage", icon: <FiSearch /> }
      ]
    },
    "erp-enterprise-systems": {
      id: "erp-enterprise-systems",
      title: "ERP & Enterprise Systems",
      icon: <FiLayers size={32} />,
      heroIcon: <GiFactory className="floating-icon" size={80} />,
      shortDescription: "Integrated enterprise solutions",
      description: "Custom ERP and enterprise system implementations that streamline business operations.",
      overview: "We design and implement enterprise resource planning systems that integrate various business functions, providing real-time visibility and efficiency.",
      problem: "Disjointed systems cause data silos, manual workarounds, poor visibility across departments, and slow decision-making.",
      solution: "We implement and integrate ERP and enterprise platforms that unify operations and data into a single source of truth.",
      deliverables: [
        "ERP selection, customization, and implementation",
        "Integration across finance, operations, HR, and supply chain",
        "Workflow automation",
        "Real-time reporting and analytics",
        "Ongoing optimization and support"
      ],
      impact: [
        "Streamlined operations",
        "Better cross-team coordination",
        "Accurate, real-time insights",
        "Scalable enterprise processes"
      ],
      outcome: "Your organization runs as one connected system, not fragmented tools.",
      process: [
        { title: "Requirement Analysis", desc: "Understand business needs" },
        { title: "System Design", desc: "Plan architecture" },
        { title: "Development", desc: "Build custom modules" },
        { title: "Integration", desc: "Connect with existing systems" },
        { title: "Training & Support", desc: "Ensure smooth adoption" }
      ],
      diagram: "erp-diagram.png",
      images: [
        "erp-1.png",
        "erp-2.png",
        "erp-3.png"
      ],
      highlight: "Business process optimization",
      stats: [
        { value: "40%", label: "Efficiency Gain", icon: <FiTrendingUp /> },
        { value: "Real-time", label: "Data Access", icon: <FiClock /> },
        { value: "Zero", label: "Data Silos", icon: <FiPackage /> },
        { value: "Seamless", label: "Integration", icon: <FiGrid /> }
      ]
    },
    "business-intelligence": {
      id: "business-intelligence",
      title: "Business Intelligence & Analytics",
      icon: <FiBarChart2 size={32} />,
      heroIcon: <FaChartBar className="floating-icon" size={80} />,
      shortDescription: "Data-driven decision making",
      description: "Transform raw data into actionable insights with powerful BI and analytics platforms.",
      overview: "We build comprehensive business intelligence solutions that enable data-driven decision making through interactive dashboards, reports, and advanced analytics.",
      problem: "Executives often lack real-time visibility, trustworthy metrics, consistent reporting, and actionable insights.",
      solution: "We build business intelligence platforms that turn raw data into clear, decision-ready insights.",
      deliverables: [
        "Data modeling and transformation pipelines",
        "Executive dashboards and operational reports",
        "KPI frameworks aligned to business goals",
        "Self-service analytics for teams",
        "Advanced and predictive analytics"
      ],
      impact: [
        "Faster, better decisions",
        "Organization-wide alignment on metrics",
        "Reduced reporting overhead",
        "Insight-driven leadership"
      ],
      outcome: "Decision-making becomes data-led, not debate-led.",
      process: [
        { title: "Data Integration", desc: "Connect data sources" },
        { title: "Data Modeling", desc: "Design data structure" },
        { title: "Dashboard Development", desc: "Create visualizations" },
        { title: "Deployment", desc: "Implement solution" },
        { title: "Training", desc: "Enable users" }
      ],
      diagram: "bi-analytics-diagram.png",
      images: [
        "bi-1.png",
        "bi-2.png",
        "bi-3.png"
      ],
      highlight: "Real-time business insights",
      stats: [
        { value: "90%", label: "Faster Decisions", icon: <FiClock /> },
        { value: "360°", label: "Business View", icon: <FiTarget /> },
        { value: "Real-time", label: "Analytics", icon: <FiActivity /> },
        { value: "Self-service", label: "Reporting", icon: <FiUsers /> }
      ]
    },
    "product-development": {
      id: "product-development",
      title: "Product Development",
      icon: <FiBox size={32} />,
      heroIcon: <TbCube className="floating-icon" size={80} />,
      shortDescription: "MVPs to enterprise-grade platforms",
      description: "Full-cycle product development from ideation to deployment and scaling.",
      overview: "We partner with you to transform ideas into market-ready products, following agile methodologies and best practices in software development.",
      problem: "Many products fail due to poor technical foundations, lack of user focus, slow iteration cycles, and scalability issues.",
      solution: "We deliver end-to-end product engineering, combining product thinking, engineering discipline, and data intelligence.",
      deliverables: [
        "Product discovery and feasibility analysis",
        "MVP and prototype development",
        "Scalable architecture design",
        "Iterative development with real feedback",
        "Long-term product optimization"
      ],
      impact: [
        "Faster validation of ideas",
        "Reduced product risk",
        "Stronger market fit",
        "Scalable, future-ready systems"
      ],
      outcome: "Ideas become market-ready products, not stalled experiments.",
      process: [
        { title: "Discovery", desc: "Define product vision" },
        { title: "Design", desc: "Create UX/UI" },
        { title: "Development", desc: "Build product" },
        { title: "Testing", desc: "Ensure quality" },
        { title: "Launch & Scale", desc: "Deploy and grow" }
      ],
      diagram: "product-dev-diagram.png",
      images: [
        "product-dev-1.png",
        "product-dev-2.png",
        "product-dev-3.png"
      ],
      highlight: "From idea to market",
      stats: [
        { value: "6-8 weeks", label: "MVP Delivery", icon: <FiClock /> },
        { value: "80%", label: "Faster Time-to-Market", icon: <MdSpeed /> },
        { value: "Scalable", label: "Architecture", icon: <FiTrendingUp /> },
        { value: "Agile", label: "Development", icon: <FiUsers /> }
      ]
    },
    "web-app-development": {
      id: "web-app-development",
      title: "Web & App Development",
      icon: <FiGlobe size={32} />,
      heroIcon: <FiGlobe className="floating-icon" size={80} />,
      shortDescription: "Scalable web and mobile applications",
      description: "Modern web and mobile applications built for performance, scalability, and user experience.",
      overview: "We develop high-performance web and mobile applications using cutting-edge technologies and following best practices in software engineering.",
      problem: "Poorly built applications result in performance issues, security risks, bad user experience, and high maintenance costs.",
      solution: "We build modern, scalable web and mobile applications engineered for performance, usability, and growth.",
      deliverables: [
        "Custom web and mobile app development",
        "UX/UI design focused on users and conversion",
        "Secure backend and API development",
        "Performance optimization and scalability",
        "Ongoing support and enhancements"
      ],
      impact: [
        "Better customer engagement",
        "Reliable digital platforms",
        "Reduced technical debt",
        "Faster iteration and growth"
      ],
      outcome: "Your applications become assets, not liabilities.",
      process: [
        { title: "Planning", desc: "Define requirements" },
        { title: "Design", desc: "Create wireframes" },
        { title: "Development", desc: "Build application" },
        { title: "Testing", desc: "Quality assurance" },
        { title: "Deployment", desc: "Launch and monitor" }
      ],
      diagram: "web-app-diagram.png",
      images: [
        "web-app-1.png",
        "web-app-2.png",
        "web-app-3.png"
      ],
      highlight: "High-performance applications",
      stats: [
        { value: "99.9%", label: "Uptime", icon: <FiCheckCircle /> },
        { value: "<2s", label: "Load Time", icon: <MdSpeed /> },
        { value: "Mobile-first", label: "Design", icon: <FiSmartphone /> },
        { value: "SEO", label: "Optimized", icon: <FiSearch /> }
      ]
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    
    if (serviceParam && allServices[serviceParam]) {
      setActiveService(allServices[serviceParam]);
      window.scrollTo(0, 0);
    } else {
      // Redirect to home if no valid service is found
      navigate('/');
    }
  }, [location.search, navigate]);

  // Detailed service view
  const renderServiceDetail = () => {
    if (!activeService) return null;

    return (
      <div className="service-detail-wrapper" data-service={activeService.id}>
        {/* Service Hero */}
        <section className="service-hero">
          <div className="hero-pattern"></div>
          <div className="hero-floating-icons">
            {activeService.heroIcon}
            {activeService.heroIcon}
            {activeService.heroIcon}
            {activeService.heroIcon}
          </div>

          <div className="service-hero-content">
            <div className="container">
              <div className="service-hero-header">
                {/* <div className="service-icon-large">
                  {activeService.icon}
                </div> */}
                <h1 data-aos="fade-up">{activeService.title}</h1>
                <p className="service-hero-description" data-aos="fade-up" data-aos-delay="100">{activeService.description}</p>
                <div className="hero-stats" data-aos="fade-up" data-aos-delay="200">
                  {activeService.stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="problem-solution-section">
          <div className="container">
            <div className="ps-grid">
              <div className="ps-card problem-card" data-aos="fade-right">
                <div className="ps-header">
                  <div className="ps-icon">
                    <FiTool size={24} />
                  </div>
                  <h3>What Problem Clients Face</h3>
                </div>
                <div className="ps-content">
                  <p>{activeService.problem}</p>
                </div>
              </div>
              
              <div className="ps-card solution-card" data-aos="fade-left">
                <div className="ps-header">
                  <div className="ps-icon">
                    <FiSettings size={24} />
                  </div>
                  <h3>How Stellar Analytics Solves It</h3>
                </div>
                <div className="ps-content">
                  <p>{activeService.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="service-overview">
          <div className="container">
            <div className="overview-header" data-aos="fade-up">
              <h2>Overview</h2>
              <p className="overview-description">{activeService.overview}</p>
            </div>

            {/* Process Diagram Section */}
            <div className="process-diagram-section" data-aos="fade-up">
              <h3>Our Process</h3>
              <div className="process-timeline">
                {activeService.process.map((step, index) => (
                  <div key={index} className="timeline-step" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="timeline-marker">
                      <div className="step-number">{index + 1}</div>
                      {index < activeService.process.length - 1 && (
                        <div className="timeline-line"></div>
                      )}
                    </div>
                    <div className="timeline-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="service-gallery" data-aos="fade-up">
              <h3>Implementation & Results</h3>
              <div className="gallery-grid">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="gallery-item" data-aos="zoom-in" data-aos-delay={num * 100}>
                    <div className="gallery-placeholder">
                      <div className="placeholder-content">
                        <FiImage size={40} />
                        <span>Service Image {num}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Section */}
            <div className="deliverables-section" data-aos="fade-up">
              <h3>What We Deliver</h3>
              <div className="deliverables-grid">
                {activeService.deliverables.map((item, index) => (
                  <div key={index} className="deliverable-card" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="deliverable-icon">
                      <FiCheckCircle size={24} />
                    </div>
                    <h4>{item}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div className="impact-section" data-aos="fade-up">
              <div className="impact-header">
                <div className="impact-icon">
                  <FiTrendingUp size={32} />
                </div>
                <h3>Business Impact</h3>
              </div>
              <div className="impact-grid">
                {activeService.impact.map((impact, index) => (
                  <div key={index} className="impact-item" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="impact-number">0{index + 1}</div>
                    <p>{impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome Section */}
            <div className="outcome-section" data-aos="fade-up">
              <div className="outcome-card">
                <div className="outcome-icon">
                  <FiAward size={40} />
                </div>
                <div className="outcome-content">
                  <h3>Final Outcome</h3>
                  <p className="outcome-text">{activeService.outcome}</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="service-cta" data-aos="fade-up">
              <div className="cta-content">
                <h3>Ready to Transform Your Business?</h3>
                <p>Schedule a free consultation with our experts to discuss how {activeService.title} can drive your success.</p>
                <div className="cta-buttons">
                  <button className="cta-button-primary">
                    Get Free Consultation <FiArrowRight />
                  </button>
                  <button className="cta-button-secondary">
                    View Case Studies <FiPlay />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar/>

      {/* Render service detail */}
      {activeService && renderServiceDetail()}

      {/* ================= FOOTER ================= */}
      <Footer/>
    </>
  );
};

export default Services;