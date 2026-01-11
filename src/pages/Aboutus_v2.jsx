import React, { useState } from 'react';
import "../styles/aboutus.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Aboutus = () => {
  const [activeSection, setActiveSection] = useState('mission');

  const sections = [
    { id: 'mission', label: 'Mission' },
    { id: 'why', label: 'Why We Exist' },
    { id: 'what', label: 'What We Do' },
    { id: 'philosophy', label: 'Our Philosophy' },
    { id: 'work', label: 'How We Work' },
    { id: 'different', label: 'What Makes Us Different' },
    { id: 'role', label: 'Your AI Journey' }
  ];

  return (
    <div className="home-wrapper">
      <Navbar />
    <div className="about-us-container">
      {/* Hero Section with Parallax Effect */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            {/* <h1 className="company-name">
              <span className="stellar">Stellar</span>
              <span className="analytics">Analytics</span>
            </h1> */}
            <div className="tagline-wrapper">
              <h2 className="tagline">
                We Build AI That Holds Up in the <span className="highlight">Real World</span>
              </h2>
              <div className="tagline-underline"></div>
            </div>
            <p className="hero-description">
              Stellar Analytics is an AI and software engineering studio focused on building 
              systems that work reliably in real-world conditions — not just controlled demos.
            </p>
          </div>
          <div className="hero-image-container">
            <div className="floating-image-grid">
               <img
    className="hero-diagram"
    src="/images/about-hero.jpg"
    alt="Trust-driven AI systems"
  />
            </div>
          </div>
        </div>
        
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Problem Statement */}
        <section id="mission" className="content-section problem-section">
          <div className="section-header">
            <h3 className="section-title">The Reality Gap</h3>
            <div className="section-divider"></div>
          </div>
          <div className="section-content">
            <div className="problem-statement">
              <p className="lead-text">
                Modern AI is powerful, but power without validation creates risk.
              </p>
              <div className="risk-grid">
                <div className="risk-card">
                  <div className="risk-icon">⚠️</div>
                  <h4>Models hallucinate</h4>
                </div>
                <div className="risk-card">
                  <div className="risk-icon">🎭</div>
                  <h4>Agents behave unpredictably</h4>
                </div>
                <div className="risk-card">
                  <div className="risk-icon">📉</div>
                  <h4>Systems fail under scale</h4>
                </div>
                <div className="risk-card">
                  <div className="risk-icon">⚖️</div>
                  <h4>Decisions lack accountability</h4>
                </div>
              </div>
              <div className="mission-statement">
                <div className="mission-highlight">
                  <span className="highlight-text">We exist to close that gap.</span>
                </div>
                <p>
                  From LLM evaluation platforms and RAG pipelines to AI agent testing, 
                  cloud infrastructure, and enterprise software, we help teams design, 
                  validate, and deploy production-grade AI systems that behave as expected — 
                  consistently, safely, and at scale.
                </p>
                <div className="proof-statement">
                  <div className="proof-badge">
                    <span className="proof-icon">✓</span>
                  </div>
                  <h3>We don't just ship models. We prove they work.</h3>
                </div>
          </div>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section id="why" className="content-section why-section">
          <div className="section-header">
            <h3 className="section-title">Why Stellar Analytics Exists</h3>
            <div className="section-divider"></div>
          </div>

          <img
            className="section-diagram"
            src="/images/about3png"
            alt="Reliable AI systems lifecycle"
          />
          <div className="section-content">
            <div className="why-content">
              <div className="why-text">
                <p className="lead-text">
                  AI adoption is moving faster than most organizations can control. 
                  Teams are pressured to deploy intelligent systems quickly — often 
                  without clear answers to critical questions:
                </p>
                <div className="questions-grid">
                  <div className="question-card">
                    <span className="question-number">01</span>
                    <h4>Is the model accurate and reliable?</h4>
                  </div>
                  <div className="question-card">
                    <span className="question-number">02</span>
                    <h4>How does it behave under edge cases?</h4>
                  </div>
                  <div className="question-card">
                    <span className="question-number">03</span>
                    <h4>Can we measure performance objectively?</h4>
                  </div>
                  <div className="question-card">
                    <span className="question-number">04</span>
                    <h4>What happens when it fails?</h4>
                  </div>
                  <div className="question-card">
                    <span className="question-number">05</span>
                    <h4>Can we trust it in production?</h4>
                  </div>
                </div>
                <div className="key-insight">
                  <div className="insight-line"></div>
                  <h3 className="insight-text">
                    Most AI failures are not algorithmic. They are engineering failures.
                  </h3>
                  <p>
                    Stellar Analytics was founded to bring engineering discipline, 
                    validation, and accountability into AI systems — so businesses 
                    can adopt AI with confidence, not guesswork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Actually Do */}
        <section id="what" className="content-section what-section">
          <div className="section-header">
            <h3 className="section-title">What We Actually Do</h3>
            <div className="section-divider"></div>
          </div>

          <img
  className="section-diagram"
  src="/images/about2.png"
  alt="Reliable AI systems lifecycle"
/>

          <div className="section-content">
            <div className="what-content">
              <div className="role-badge">
                <span>AI & Software Engineering Partner</span>
                <em>(Not a tool vendor. Not a research lab.)</em>
              </div>
              <div className="lifecycle-grid">
                <div className="lifecycle-phase">
                  <div className="phase-number">1</div>
                  <h4>Designing Architectures</h4>
                  <p>Supporting scale and safety</p>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-phase">
                  <div className="phase-number">2</div>
                  <h4>Building AI Models</h4>
                  <p>Grounded in real data</p>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-phase">
                  <div className="phase-number">3</div>
                  <h4>Testing Systems</h4>
                  <p>LLMs, RAG systems, and autonomous agents</p>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-phase">
                  <div className="phase-number">4</div>
                  <h4>Engineering Infrastructure</h4>
                  <p>Cloud-native, performance-focused</p>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-phase">
                  <div className="phase-number">5</div>
                  <h4>Delivering Software</h4>
                  <p>Enterprise-grade AI workflows</p>
                </div>
              </div>
              <div className="system-principles">
                <h3 className="principles-title">Every system we build is:</h3>
                <div className="principles-grid">
                  <div className="principle-card">
                    <div className="principle-icon">📊</div>
                    <h4>Measurable</h4>
                  </div>
                  <div className="principle-card">
                    <div className="principle-icon">👁️</div>
                    <h4>Observable</h4>
                  </div>
                  <div className="principle-card">
                    <div className="principle-icon">🧪</div>
                    <h4>Testable</h4>
                  </div>
                  <div className="principle-card">
                    <div className="principle-icon">🏭</div>
                    <h4>Production-Ready</h4>
                  </div>
                </div>
                <div className="validation-rule">
                  <div className="rule-icon">⚠️</div>
                  <h3>If it cannot be validated, we do not consider it finished.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section id="philosophy" className="content-section philosophy-section">
          <div className="section-header">
            <h3 className="section-title">Our Philosophy: Proof Over Promises</h3>
            <div className="section-divider"></div>
          </div>

          <div className="philosophy-visual">
  <img src="/images/about1.png" alt="AI philosophy: trust through engineering" />
</div>

          <div className="section-content">
            <div className="philosophy-content">
              <p className="lead-text">
                AI is full of claims. We operate on evidence. At Stellar Analytics, 
                every solution is built around three non-negotiables:
              </p>
              <div className="philosophy-grid">
                <div className="philosophy-card">
                  <div className="card-number">01</div>
                  <h3>Measurable Performance</h3>
                  <p>
                    If you cannot measure accuracy, robustness, and failure modes, 
                    you cannot trust the system. We define metrics before deployment 
                    and track them continuously.
                  </p>
                </div>
                <div className="philosophy-card">
                  <div className="card-number">02</div>
                  <h3>Real-World Reliability</h3>
                  <p>
                    AI must work under imperfect data, unexpected inputs, system load, 
                    and changing conditions. We design and test for reality, not ideal scenarios.
                  </p>
                </div>
                <div className="philosophy-card">
                  <div className="card-number">03</div>
                  <h3>Scalable Engineering</h3>
                  <p>
                    From cloud infrastructure to data pipelines, every system is built 
                    to scale securely, cost-effectively, and predictably.
                  </p>
                </div>
              </div>
              <div className="philosophy-conclusion">
                <div className="conclusion-line"></div>
                <h3>
                  This is how AI earns trust — not through demos, but through proof.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="work" className="content-section work-section">
          <div className="section-header">
            <h3 className="section-title">How We Work With Clients</h3>
            <div className="section-divider"></div>
          </div>
          <div className="section-content">
            <div className="work-content">
              <div className="work-intro">
                <p className="lead-text">
                  We partner with teams that take outcomes seriously. Our engagements 
                  are structured to reduce risk, accelerate learning, and create long-term value:
                </p>
              </div>
              <div className="process-timeline">
                <div className="process-step">
                  <div className="step-circle">1</div>
                  <div className="step-content">
                    <h4>Understanding & Discovery</h4>
                    <p>We start by understanding your goals, constraints, and data</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-circle">2</div>
                  <div className="step-content">
                    <h4>Architecture & Design</h4>
                    <p>We design systems with validation built in</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-circle">3</div>
                  <div className="step-content">
                    <h4>Aggressive Testing</h4>
                    <p>We test thoroughly before deployment</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-circle">4</div>
                  <div className="step-content">
                    <h4>Monitor & Optimize</h4>
                    <p>We continuously improve systems post-launch</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-circle">5</div>
                  <div className="step-content">
                    <h4>Transparent Operation</h4>
                    <p>Clear roadmaps, regular demos, and shared metrics — no surprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section id="different" className="content-section different-section">
          <div className="section-header">
            <h3 className="section-title">What Makes Stellar Analytics Different</h3>
            <div className="section-divider"></div>
          </div>

          <img
            className="section-diagram"
            src="/images/about4.png"
            alt="Reliable AI systems lifecycle"
          />
          <div className="section-content">
            <div className="different-content">
              <div className="different-grid">
                <div className="different-card">
                  <h4 className="card-title">Engineering-First AI</h4>
                  <p>
                    We approach AI as a production system, not an experiment. Testing, 
                    monitoring, and reliability are built in — not added later.
                  </p>
                </div>
                <div className="different-card">
                  <h4 className="card-title">Validation as Core Capability</h4>
                  <p>
                    From LLM evaluation to AI agent testing, we specialize in proving 
                    systems work before they impact users or operations.
                  </p>
                </div>
                <div className="different-card">
                  <h4 className="card-title">Business-Driven Design</h4>
                  <p>
                    Every solution is tied to business outcomes: cost reduction, 
                    efficiency, accuracy, speed, or risk mitigation.
                  </p>
                </div>
                <div className="different-card">
                  <h4 className="card-title">Cloud-Native & Cost-Aware</h4>
                  <p>
                    Scalability matters, but so does cost. We design infrastructure 
                    that performs without wasting resources.
                  </p>
                </div>
                <div className="different-card">
                  <h4 className="card-title">Long-Term Partnership</h4>
                  <p>
                    We don't disappear after delivery. We support, optimize, and 
                    evolve systems as your needs grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your AI Journey */}
        <section id="role" className="content-section role-section">
          <div className="section-header">
            <h3 className="section-title">Our Role in Your AI Journey</h3>
            <div className="section-divider"></div>
          </div>
          <div className="section-content">
            <div className="role-content">
              <div className="journey-stages">
                <div className="journey-stage">
                  <div className="stage-indicator experimenting"></div>
                  <div className="stage-content">
                    <h4>If you are experimenting with AI</h4>
                    <p>We help you validate it</p>
                  </div>
                </div>
                <div className="journey-arrow">→</div>
                <div className="journey-stage">
                  <div className="stage-indicator scaling"></div>
                  <div className="stage-content">
                    <h4>If you are scaling AI</h4>
                    <p>We help you control it</p>
                  </div>
                </div>
                <div className="journey-arrow">→</div>
                <div className="journey-stage">
                  <div className="stage-indicator production"></div>
                  <div className="stage-content">
                    <h4>If AI is already in production</h4>
                    <p>We help you trust it</p>
                  </div>
                </div>
              </div>
              <div className="final-statement">
                <div className="final-highlight">
                  <h2>
                    Stellar Analytics exists for teams that want AI to be an advantage — 
                    <span className="highlight"> not a liability.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating CTA */}
      <div className="floating-cta">
        <button className="cta-button">
          <span>Start Building Trusted AI</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
    </div>
<Footer/>
</div>

  );
};

export default Aboutus;