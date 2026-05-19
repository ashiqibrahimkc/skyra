"use client";

import React, { useState } from "react";
import "./contact.css";

export default function ContactPage(): React.JSX.Element {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    module: "",
    destination: "",
    message: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SEND TO WHATSAPP
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
*🌍 SKYRA NEW INQUIRY*

👤 Full Name: ${formData.name}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

📌 Service: ${formData.module}

🌎 Destination: ${formData.destination}

📝 Message:
${formData.message}
    `;

    // YOUR WHATSAPP NUMBER
    const whatsappURL = `https://wa.me/919895737331?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-tech-premium">

      {/* HERO */}
      <div className="tech-hero fade-in">
        <div className="hero-pill">
          SKYRA // CONTACT INITIATION
        </div>

        <h1 className="hero-title">
          Establish <span className="text-glow">Connection</span>.
        </h1>

        <p className="hero-subtitle">
          Secure your pathway to global education and career progression.
          Reach out to our advisors to initialise your journey.
        </p>
      </div>

      <div className="tech-container">

        <div className="contact-dual-grid">

          {/* FORM */}
          <div className="tech-card form-card fade-in stagger-1">

            <div className="card-header">
              <span className="card-node"></span>
              <h3>Secure Inquiry Form</h3>
            </div>

            <p className="card-desc">
              Fill out the parameters below.
              A Skyra operative will respond within 24 hours.
            </p>

            <form className="tech-form" onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  className="tech-input"
                  placeholder="Full Legal Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="input-row">

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    className="tech-input"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <input
                    type="tel"
                    name="phone"
                    className="tech-input"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* MODULE + DESTINATION */}
              <div className="input-row">

                <div className="input-group">
                  <select
                    name="module"
                    className="tech-select"
                    required
                    value={formData.module}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select Required Module
                    </option>

                    <option value="International Education Support">
                      International Education Support
                    </option>

                    <option value="Career Guidance & Placement">
                      Career Guidance & Placement
                    </option>

                    <option value="Visa & Immigration Processing">
                      Visa & Immigration Processing
                    </option>

                    <option value="General System Inquiry">
                      General System Inquiry
                    </option>
                  </select>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    name="destination"
                    className="tech-input"
                    placeholder="Target Destination"
                    value={formData.destination}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* MESSAGE */}
              <div className="input-group">
                <textarea
                  name="message"
                  className="tech-textarea"
                  placeholder="Transmit your message or specific requirements..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="btn-tech submit-btn"
              >
                Transmit Data

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

            </form>
          </div>

          {/* INFO SECTION */}
          <div className="tech-card info-card fade-in stagger-2">

            <div className="card-header">
              <span className="card-node node-alt"></span>
              <h3>Command Centre</h3>
            </div>

            <div className="contact-nodes">

              <div className="info-node">
                <div className="node-text">
                  <span className="node-label">Headquarters</span>
                  <p>Malappuram, Kerala, India</p>
                </div>
              </div>

              <div className="info-node">
                <div className="node-text">
                  <span className="node-label">Direct Comms</span>
                  <p>+91 98957 37331</p>
                </div>
              </div>

              <div className="info-node">
                <div className="node-text">
                  <span className="node-label">Data Relay</span>
                  <p>abroadsolutionskyra@gmail.com</p>
                </div>
              </div>

              <div className="info-node">
                <div className="node-text">
                  <span className="node-label">Operational Hours</span>
                  <p>Mon - Sat: 09:00 - 06:00</p>
                  <p className="sub-text">
                    Sunday: System Offline
                  </p>
                </div>
              </div>

            </div>

            {/* WHATSAPP BUTTON */}
            <div className="whatsapp-box">

              <p>Require immediate assistance?</p>

              <button
                className="btn-whatsapp"
                onClick={() =>
                  window.open(
                    "https://wa.me/919895737331",
                    "_blank"
                  )
                }
                type="button"
              >
                Initiate Secure Chat
              </button>

            </div>

          </div>

        </div>

        {/* GLOBAL INFRA */}
        <div className="global-infra-box fade-in stagger-3">

          <div className="infra-text">
            <h2>Global Infrastructure</h2>

            <p>
              Active deployment zones and verified institutional partnerships
              across four continents.
            </p>
          </div>

          <div className="infra-tags">
            <span>North America</span>
            <span>United Kingdom</span>
            <span>European Union</span>
            <span>Australia & NZ</span>
            <span>Middle East</span>
            <span>Singapore</span>
          </div>

        </div>

        {/* MAP */}
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