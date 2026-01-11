import React from 'react';
import "../styles/aboutus.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Aboutus = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
    <div className="about-us-container">
      {/* Hero Section with Particle Background */}
      <section className="hero-section">
        <div className="particle-background" id="particles-js"></div>
        <div className="hero-content">
          <div className="hero-text">
            <p className="tagline">We Build AI That Holds Up in the Real World</p>
            <div className="hero-description">
              <p>Stellar Analytics is an AI and software engineering studio focused on building systems that work reliably in real-world conditions — not just controlled demos.</p>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/about1.png" alt="AI Validation Visualization" className="floating-image" />
            <div className="glow-effect"></div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Explore Our Vision</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="problem-section">
        <div className="section-header">
          <h3>The Challenge We Solve</h3>
          {/* <div className="underline"></div> */}
        </div>
        <div className="problem-content">
          <div className="problem-text">
            <p className="highlight-text">Modern AI is powerful, but power without validation creates risk.</p>
            <div className="risk-grid">
              <div className="risk-item">
                <div className="risk-icon">⚠️</div>
                <span>Models hallucinate</span>
              </div>
              <div className="risk-item">
                <div className="risk-icon">⚠️</div>
                <span>Agents behave unpredictably</span>
              </div>
              <div className="risk-item">
                <div className="risk-icon">⚠️</div>
                <span>Systems fail under scale</span>
              </div>
              <div className="risk-item">
                <div className="risk-icon">⚠️</div>
                <span>Decisions lack accountability</span>
              </div>
            </div>
            <div className="closing-gap">
              <div className="gap-line">
                <div className="gap-start">Risk</div>
                <div className="gap-fill"></div>
                <div className="gap-end">Reliability</div>
              </div>
              <p className="mission-statement">We exist to close that gap.</p>
            </div>
          </div>
          <div className="problem-image">
            <img src="/images/about3.png" alt="AI Risk Visualization" className="perspective-image" />
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="work-section">
        <div className="work-header">
          <h3>What We Actually Do</h3>
          <p className="subtitle">We are an AI and software engineering partner, not a tool vendor and not a research lab.</p>
        </div>
        
        <div className="work-grid">
          <div className="work-card">
            <div className="card-number">01</div>
            <h4>Design & Architecture</h4>
            <p>Designing architectures that support scale and safety</p>
          </div>
          <div className="work-card">
            <div className="card-number">02</div>
            <h4>AI Development</h4>
            <p>Building AI models grounded in real data</p>
          </div>
          <div className="work-card">
            <div className="card-number">03</div>
            <h4>Validation & Testing</h4>
            <p>Testing LLMs, RAG systems, and autonomous agents before deployment</p>
          </div>
          <div className="work-card">
            <div className="card-number">04</div>
            <h4>Infrastructure</h4>
            <p>Engineering cloud-native infrastructure for performance and cost control</p>
          </div>
          <div className="work-card full-width">
            <div className="card-number">05</div>
            <h4>Enterprise Integration</h4>
            <p>Delivering enterprise-grade software that integrates AI into real workflows</p>
          </div>
        </div>

        <div className="validation-banner">
          <div className="banner-content">
            <div className="banner-icon">✅</div>
            <div className="banner-text">
              <h4>Every system we build is:</h4>
              <div className="attribute-tags">
                <span className="tag">Measurable</span>
                <span className="tag">Observable</span>
                <span className="tag">Testable</span>
                <span className="tag">Production-Ready</span>
              </div>
            </div>
          </div>
          <div className="banner-quote">
            <p>"If it cannot be validated, we do not consider it finished."</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-header">
          <h3>Our Philosophy: Proof Over Promises</h3>
          <p>AI is full of claims. We operate on evidence.</p>
        </div>
        
        <div className="philosophy-grid">
          <div className="principle-card">
            <div className="principle-number">01</div>
            <h4>Measurable Performance</h4>
            <p>If you cannot measure accuracy, robustness, and failure modes, you cannot trust the system. We define metrics before deployment and track them continuously.</p>
            <div className="metric-visual">
              <div className="metric-bar" style={{width: '95%'}}>
                <span>Accuracy</span>
              </div>
              <div className="metric-bar" style={{width: '92%'}}>
                <span>Robustness</span>
              </div>
              <div className="metric-bar" style={{width: '98%'}}>
                <span>Reliability</span>
              </div>
            </div>
          </div>
          
          <div className="principle-card">
            <div className="principle-number">02</div>
            <h4>Real-World Reliability</h4>
            <p>AI must work under imperfect data, unexpected inputs, system load, and changing conditions. We design and test for reality, not ideal scenarios.</p>
            <div className="reality-icons">
              <div className="reality-icon">🌐</div>
              <div className="reality-icon">⚡</div>
              <div className="reality-icon">🔄</div>
              <div className="reality-icon">📊</div>
            </div>
          </div>
          
          <div className="principle-card">
            <div className="principle-number">03</div>
            <h4>Scalable Engineering</h4>
            <p>From cloud infrastructure to data pipelines, every system is built to scale securely, cost-effectively, and predictably.</p>
            <div className="scale-visual">
              <div className="scale-node small">1x</div>
              <div className="scale-node medium">10x</div>
              <div className="scale-node large">100x</div>
              <div className="scale-line"></div>
            </div>
          </div>
        </div>
        
        <div className="philosophy-image">
          <img src="/images/about4.png" alt="Proof Over Promises Visualization" className="glow-image" />
          <div className="image-caption">
            <p>This is how AI earns trust — not through demos, but through proof.</p>
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <section className="journey-section">
        <div className="journey-header">
          <h3>Our Role in Your AI Journey</h3>
        </div>
        
        <div className="journey-path">
          <div className="journey-step">
            <div className="step-marker">1</div>
            <div className="step-content">
              <h4>Experimenting with AI</h4>
              <p>We help you validate it</p>
            </div>
          </div>
          
          <div className="journey-connector">
            <div className="connector-line"></div>
            <div className="connector-arrow">→</div>
          </div>
          
          <div className="journey-step">
            <div className="step-marker">2</div>
            <div className="step-content">
              <h4>Scaling AI</h4>
              <p>We help you control it</p>
            </div>
          </div>
          
          <div className="journey-connector">
            <div className="connector-line"></div>
            <div className="connector-arrow">→</div>
          </div>
          
          <div className="journey-step">
            <div className="step-marker">3</div>
            <div className="step-content">
              <h4>AI in Production</h4>
              <p>We help you trust it</p>
            </div>
          </div>
        </div>
        
        <div className="journey-conclusion">
          <img src="/images/about2.png" alt="AI Journey Visualization" className="journey-image" />
          <div className="conclusion-text">
            <p className="conclusion-quote">
              Stellar Analytics exists for teams that want AI to be an advantage — not a liability.
            </p>
            <button className="cta-button">Start Your Journey</button>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="differentiators-section">
        <h3>What Makes Stellar Analytics Different</h3>
        
        <div className="differentiators-grid">
          <div className="differentiator-card">
            <div className="diff-icon">⚙️</div>
            <h4>Engineering-First AI</h4>
            <p>We approach AI as a production system, not an experiment. Testing, monitoring, and reliability are built in — not added later.</p>
          </div>
          
          <div className="differentiator-card">
            <div className="diff-icon">✅</div>
            <h4>Validation as Core</h4>
            <p>From LLM evaluation to AI agent testing, we specialize in proving systems work before they impact users.</p>
          </div>
          
          <div className="differentiator-card">
            <div className="diff-icon">🎯</div>
            <h4>Business-Driven Design</h4>
            <p>Every solution is tied to business outcomes: cost reduction, efficiency, accuracy, speed, or risk mitigation.</p>
          </div>
          
          <div className="differentiator-card">
            <div className="diff-icon">☁️</div>
            <h4>Cloud-Native & Cost-Aware</h4>
            <p>Scalability matters, but so does cost. We design infrastructure that performs without wasting resources.</p>
          </div>
        </div>
      </section>

      {/* Client Work Section */}
      <section className="client-work-section">
        <div className="client-work-header">
          <h3>How We Work With Clients</h3>
          <p className="subtitle">We partner with teams that take outcomes seriously.</p>
        </div>
        
        <div className="client-process">
          <div className="process-step">
            <div className="process-number">01</div>
            <h4>Understand</h4>
            <p>We start by understanding your goals, constraints, and data</p>
          </div>
          
          <div className="process-step">
            <div className="process-number">02</div>
            <h4>Design</h4>
            <p>We design architectures and systems with validation built in</p>
          </div>
          
          <div className="process-step">
            <div className="process-number">03</div>
            <h4>Test</h4>
            <p>We test aggressively before deployment</p>
          </div>
          
          <div className="process-step">
            <div className="process-number">04</div>
            <h4>Monitor</h4>
            <p>We monitor, optimize, and evolve systems post-launch</p>
          </div>
          
          <div className="process-step">
            <div className="process-number">05</div>
            <h4>Transparency</h4>
            <p>We operate with clear roadmaps, regular demos, and shared metrics</p>
          </div>
        </div>
        
        <div className="client-promise">
          <div className="promise-icon">🤝</div>
          <div className="promise-text">
            <h4>Long-Term Partnership Mentality</h4>
            <p>We don't disappear after delivery. We support, optimize, and evolve systems as your needs grow.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h3>Build AI That Earns Trust</h3>
          <p>Join teams that rely on Stellar Analytics for production-grade AI systems</p>
          <div className="cta-buttons">
            <button className="primary-cta">Schedule Discovery Call</button>
            <button className="secondary-cta">View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
</div>
  );
};

export default Aboutus;