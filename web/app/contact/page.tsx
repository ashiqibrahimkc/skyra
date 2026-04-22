"use client";
import React from "react";
import "./contact.css";

export default function ContactPage(): React.JSX.Element {
  return (
    <section className="contact-tech-premium">
      
      {/* --- MINIMAL HERO --- */}
      <div className="tech-hero fade-in">
        <div className="hero-pill">SKYRA // CONTACT INITIATION</div>
        <h1 className="hero-title">
          Establish <span className="text-glow">Connection</span>.
        </h1>
        <p className="hero-subtitle">
          Secure your pathway to global education and career progression. Reach out to our advisors to initialise your journey.
        </p>
      </div>

      <div className="tech-container">
        
        {/* --- DUAL GRID: FORM & INFO --- */}
        <div className="contact-dual-grid">
          
          {/* SECURE TRANSMISSION FORM */}
          <div className="tech-card form-card fade-in stagger-1">
            <div className="card-header">
              <span className="card-node"></span>
              <h3>Secure Inquiry Form</h3>
            </div>
            <p className="card-desc">Fill out the parameters below. A Skyra operative will respond within 24 hours.</p>

            <form className="tech-form">
              <div className="input-group">
                <input type="text" className="tech-input" placeholder="Full Legal Name" required />
              </div>
              
              <div className="input-row">
                <div className="input-group">
                  <input type="email" className="tech-input" placeholder="Email Address" required />
                </div>
                <div className="input-group">
                  <input type="tel" className="tech-input" placeholder="Phone Number" required />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <select className="tech-select" required defaultValue="">
                    <option value="" disabled>Select Required Module</option>
                    <option value="education">International Education Support</option>
                    <option value="career">Career Guidance & Placement</option>
                    <option value="visa">Visa & Immigration Processing</option>
                    <option value="general">General System Inquiry</option>
                  </select>
                </div>
                <div className="input-group">
                  <input type="text" className="tech-input" placeholder="Target Destination" />
                </div>
              </div>

              <div className="input-group">
                <textarea className="tech-textarea" placeholder="Transmit your message or specific requirements..." rows={5} required></textarea>
              </div>

              <button type="submit" className="btn-tech submit-btn">
                Transmit Data
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>

          {/* COMMAND CENTER INFO */}
          <div className="tech-card info-card fade-in stagger-2">
            <div className="card-header">
              <span className="card-node node-alt"></span>
              <h3>Command Centre</h3>
            </div>
            
            <div className="contact-nodes">
              <div className="info-node">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="node-text">
                  <span className="node-label">Headquarters</span>
                  <p>Malappuram, Kerala, India</p>
                </div>
              </div>

              <div className="info-node">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="node-text">
                  <span className="node-label">Direct Comms</span>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-node">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="node-text">
                  <span className="node-label">Data Relay</span>
                  <p>info@skyra.com</p>
                </div>
              </div>

              <div className="info-node">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="node-text">
                  <span className="node-label">Operational Hours</span>
                  <p>Mon - Sat: 09:00 - 18:00 (IST)</p>
                  <p className="sub-text">Sunday: System Offline</p>
                </div>
              </div>
            </div>

            {/* WHATSAPP SECURE CHAT */}
            <div className="whatsapp-box">
              <p>Require immediate assistance?</p>
              <button 
                className="btn-whatsapp"
                onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                Initiate Secure Chat
              </button>
            </div>
          </div>

        </div>

        {/* --- GLOBAL INFRASTRUCTURE --- */}
        <div className="global-infra-box fade-in stagger-3">
          <div className="infra-text">
            <h2>Global Infrastructure</h2>
            <p>Active deployment zones and verified institutional partnerships across four continents.</p>
          </div>
          <div className="infra-tags">
            <span>North America</span>
            <span>United Kingdom</span>
            <span>European Union</span>
            <span>Australia & NZ</span>
            <span>Middle East </span>
            <span>Singapore</span>
          </div>
        </div>

        {/* --- TACTICAL MAP --- */}
        <div className="map-bento fade-in stagger-4">
          <div className="card-header">
            <span className="card-node"></span>
            <h3>Tactical Overview</h3>
          </div>
          <div className="map-wrapper">
            <iframe
              title="Skyra Headquarters Location"
              src="https://maps.google.com/maps?q=Malappuram,%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}