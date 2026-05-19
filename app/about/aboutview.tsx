"use client";
import React, { useState } from "react";
import "./about.css";

// --- STATIC DATA WITH PREMIUM COPY ---
const servicesData = [
  { title: "Education Support", desc: "Bespoke university admissions, rigorous course selection, and comprehensive scholarship assistance.", icon: "🎓" },
  { title: "Career Placement", desc: "Strategic overseas job placements, CV building, and meticulous corporate interview preparation.", icon: "💼" },
  { title: "Visa & Immigration", desc: "End-to-end visa processing, strict legal compliance, and reliable documentation support.", icon: "🛂" },
  { title: "Global Integration", desc: "Accommodation assistance, seamless cultural onboarding, and ongoing professional guidance.", icon: "🌍" }
];

const processData = [
  { phase: "01", title: "Strategic Consultation", desc: "Deep-dive analysis of your academic and professional profile to map out the most viable global pathways." },
  { phase: "02", title: "Profile Engineering", desc: "Crafting compelling applications, optimising CVs, and strategically selecting elite targets." },
  { phase: "03", title: "Legal & Compliance", desc: "Flawless execution of visa processing and complex immigration documentation with absolute precision." },
  { phase: "04", title: "Global Deployment", desc: "Comprehensive pre-departure briefings, accommodation setup, and ongoing integration support." }
];

const testimonialLogs = [
  { name: "Rahul M.", role: "Masters Student, London", log: "Skyra engineered my entire admission process to the UK. The transparency and precision were simply unmatched. Deployed seamlessly." },
  { name: "Aisha K.", role: "Software Engineer, Toronto", log: "Their job placement module is flawless. Skyra handled my work visa and employer negotiations with absolute professionalism." },
  { name: "John D.", role: "Medical Professional, Dubai", log: "Navigating UAE compliance is tough, but Skyra's legal team executed my immigration paperwork with zero errors." }
];

export default function AboutPage(): React.JSX.Element {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="about-tech-premium">
      
      {/* --- MINIMAL HERO --- */}
      <div className="tech-hero fade-in">
        <div className="hero-pill">SKYRA // SYSTEM OVERVIEW</div>
        <h1 className="hero-title">
          Architecting <span className="text-glow">Global</span> Futures.
        </h1>
        <p className="hero-subtitle">
          We process international education and global career progression with the precision of top-tier engineering. Welcome to the future of global consulting.
        </p>
      </div>

      <div className="tech-container">
        
        {/* --- THE BENTO BOX GRID (INTRO & VIDEO) --- */}
        <div className="bento-grid">
          
          <div className="bento-card bento-video-card stagger-1">
            {isVideoPlaying ? (
              <video 
                className="bento-video" 
                src="/skyra.mp4" 
                autoPlay loop muted playsInline controls 
              />
            ) : (
              <div className="bento-video-thumbnail" onClick={() => setIsVideoPlaying(true)}>
                <div className="play-button-tech">
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div className="video-label-tech">Watch System Overview</div>
              </div>
            )}
          </div>

          <div className="bento-card bento-intro stagger-2">
            <h2>The Core System</h2>
            <p>
              Operating from Malappuram, Kerala, Skyra is a highly specialised consultancy focusing on elite study abroad programmes and international job placements.
            </p>
            <p>
              We bypass traditional methods to provide meticulous, end-to-end support—acting as the core infrastructure for your global ambitions.
            </p>
          </div>

          <div className="bento-card bento-stat stagger-3">
            <span className="stat-val">6+</span><span className="stat-key">Years Exp.</span>
          </div>
          <div className="bento-card bento-stat stagger-4">
            <span className="stat-val">40+</span><span className="stat-key">Countries</span>
          </div>
          <div className="bento-card bento-stat stagger-5">
            <span className="stat-val">98%</span><span className="stat-key">Success Rate</span>
          </div>
          <div className="bento-card bento-stat stagger-6">
            <span className="stat-val">5k+</span><span className="stat-key">Deployments</span>
          </div>
        </div>

        {/* --- MISSION & VISION --- */}
        <div className="dual-grid">
          <div className="tech-card fade-in">
            <div className="card-header">
              <span className="card-node"></span><h3>System Mission</h3>
            </div>
            <p>To deploy transparent, high-performance guidance that seamlessly connects individuals with elite global education and career networks worldwide, ensuring every client reaches their peak potential.</p>
          </div>

          <div className="tech-card fade-in">
            <div className="card-header">
              <span className="card-node node-alt"></span><h3>System Vision</h3>
            </div>
            <p>To be recognised globally as the definitive standard for integrity, precision, and technological excellence in the international immigration and placement sector.</p>
          </div>
        </div>

        {/* --- EXECUTION PROTOCOL (PROCESS) --- */}
        <div className="section-title fade-in">
          <h2>Execution Protocol</h2>
          <p>Our systematic four-phase approach to global deployment.</p>
        </div>

        <div className="process-timeline fade-in">
          {processData.map((step, index) => (
            <div className="process-node" key={index}>
              <div className="phase-marker">{step.phase}</div>
              <div className="process-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- CORE MODULES (SERVICES) --- */}
        <div className="section-title fade-in">
          <h2>Core Modules</h2>
        </div>

        <div className="services-tech-grid">
          {servicesData.map((service, index) => (
            <div className="tech-module-card fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="module-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
              <div className="module-line"></div>
            </div>
          ))}
        </div>

        {/* --- GLOBAL INFRASTRUCTURE --- */}
        <div className="global-infra-box fade-in">
          <div className="infra-text">
            <h2>Global Infrastructure</h2>
            <p>Active deployment zones and verified institutional partnerships across four continents.</p>
          </div>
          <div className="infra-tags">
            <span>North America</span>
            <span>United Kingdom</span>
            <span>European Union</span>
            <span>Australia & NZ</span>
            <span>Middle East (GCC)</span>
            <span>Singapore</span>
          </div>
        </div>

        {/* --- SYSTEM LOGS (TESTIMONIALS) --- */}
        <div className="section-title fade-in">
          <h2>Client Data Logs</h2>
        </div>

        <div className="logs-grid fade-in">
          {testimonialLogs.map((log, index) => (
            <div className="log-card" key={index}>
              <div className="log-header">
                <span className="log-status"></span>
                <span className="log-user">{log.name} // {log.role}</span>
              </div>
              <p>"{log.log}"</p>
            </div>
          ))}
        </div>

        {/* --- MINIMAL CTA --- */}
        <div className="tech-cta fade-in">
          <div className="cta-grid">
            <div className="cta-text-side">
              <h2>Initialise Your Journey.</h2>
              <p>Book a secure, complimentary consultation with our global advisors.</p>
            </div>
            <div className="cta-action-side">
              <a href="https://wa.me/9895737301">
              <button className="btn-tech">
                
                Initialise Sequence
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