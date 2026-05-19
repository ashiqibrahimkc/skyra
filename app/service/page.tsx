"use client";
import React from "react";
import "./service.css";

// --- EXPANDED DATA STRUCTURES ---

const coreServices = [
  {
    id: "01",
    title: "International Education Support",
    desc: "We secure admissions in elite global universities through a meticulously engineered application process.",
    features: [
      "Precision University & Course Selection",
      "SOP & LOR Architecture",
      "Global Scholarship Mapping",
      "Student Visa Compliance"
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    )
  },
  {
    id: "02",
    title: "Global Career Placement",
    desc: "Direct access to high-tier overseas job opportunities with comprehensive employer networking.",
    features: [
      "Targeted Overseas Job Matching",
      "CV & Profile Optimisation",
      "Corporate Interview Simulation",
      "Employer Salary Negotiations"
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    )
  },
  {
    id: "03",
    title: "Visa & Immigration Protocol",
    desc: "Error-free, rapid visa processing handled by our dedicated legal compliance team.",
    features: [
      "Work & Student Visa Processing",
      "Legal Document Authentication",
      "Embassy Interview Preparation",
      "Express Processing Support"
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><line x1="4" y1="10" x2="20" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg>
    )
  },
  {
    id: "04",
    title: "Post-Deployment Integration",
    desc: "We ensure you are fully operational upon arrival in your new target destination.",
    features: [
      "Accommodation Logistics",
      "Financial & Banking Setup",
      "Cultural Onboarding",
      "24/7 Emergency Support"
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    )
  }
];

const targetSectors = [
  { name: "Information Technology", icon: "💻" },
  { name: "Healthcare & Medicine", icon: "⚕️" },
  { name: "Engineering & Mechanics", icon: "⚙️" },
  { name: "Business & Finance", icon: "📊" },
  { name: "Hospitality & Tourism", icon: "🏨" },
  { name: "Academic Research", icon: "🔬" }
];

const timelineSteps = [
  { step: "Phase 1", title: "Diagnostic", desc: "Profile assessment & global goal mapping." },
  { step: "Phase 2", title: "Architecture", desc: "Document preparation & strategic targeting." },
  { step: "Phase 3", title: "Execution", desc: "Application submission & employer networking." },
  { step: "Phase 4", title: "Compliance", desc: "Visa processing & legal authentication." },
  { step: "Phase 5", title: "Deployment", desc: "Flight logistics & successful arrival." }
];

export default function ServicesPage(): React.JSX.Element {
  return (
    <section className="services-tech-premium">
      
      {/* Ambient Glows */}
      <div className="ambient-glow glow-top" aria-hidden="true" />
      <div className="ambient-glow glow-middle" aria-hidden="true" />

      {/* --- HERO SECTION --- */}
      <div className="tech-hero fade-in">
        <div className="hero-pill">SKYRA // CORE MODULES</div>
        <h1 className="hero-title">
          Our <span className="text-glow">Services</span>
        </h1>
        <p className="hero-subtitle">
          Comprehensive, end-to-end solutions engineered to accelerate your global education and career trajectory.
        </p>
      </div>

      <div className="tech-container">

        {/* --- DETAILED SERVICES GRID --- */}
        <div className="detailed-services-grid">
          {coreServices.map((service, index) => (
            <div className={`service-module-card fade-in stagger-${index + 1}`} key={service.id}>
              <div className="module-header">
                <div className="module-icon-large">{service.icon}</div>
                <span className="module-id">{service.id}</span>
              </div>
              
              <h3>{service.title}</h3>
              <p className="module-desc">{service.desc}</p>
              
              <ul className="module-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover Line */}
              <div className="card-bottom-line"></div>
            </div>
          ))}
        </div>

        {/* --- TARGET SECTORS (BENTO) --- */}
        <div className="section-title fade-in stagger-5">
          <h2>Target <span className="text-glow">Sectors</span></h2>
          <p>We facilitate priority placements across high-demand global industries.</p>
        </div>

        <div className="sectors-grid fade-in stagger-6">
          {targetSectors.map((sector, index) => (
            <div className="sector-pill" key={index}>
              <span className="sector-icon">{sector.icon}</span>
              <span className="sector-name">{sector.name}</span>
            </div>
          ))}
        </div>

        {/* --- DEPLOYMENT TIMELINE (PROCESS) --- */}
        <div className="section-title fade-in">
          <h2>Deployment <span className="text-glow">Timeline</span></h2>
          <p>Our strictly monitored 5-phase execution protocol.</p>
        </div>

        <div className="timeline-wrapper fade-in">
          <div className="timeline-track"></div>
          <div className="timeline-steps">
            {timelineSteps.map((item, index) => (
              <div className="timeline-node" key={index}>
                <div className="node-point"></div>
                <div className="node-content">
                  <span className="node-phase">{item.step}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MINIMAL CTA --- */}
        <div className="tech-cta fade-in">
          <div className="cta-grid">
            <div className="cta-text-side">
              <h2>Initialise Your Journey.</h2>
              <p>Speak with a deployment specialist to map out your future.</p>
            </div>
            <div className="cta-action-side">
              <a href="https://wa.me/9895737301">
              <button className="btn-tech">
                Book Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}