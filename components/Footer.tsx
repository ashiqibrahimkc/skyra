"use client";
import React from "react";


// 1. Strict Typing
interface LinkItem {
  label: string;
  href: string;
}

interface SocialIcon {
  name: string;
  icon: React.ReactNode;
}

// 2. Static Data Arrays for Clean JSX
const quickLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Jobs", href: "/service" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks: LinkItem[] = [
  { label: "Study Abroad", href: "/service" },
  { label: "Job Placement", href: "/service" },
  { label: "Visa Assistance", href: "/service" },
  { label: "Career Counseling", href: "/service" },
];

const socialIcons: SocialIcon[] = [
  {
    name: "Website",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
];

export default function Footer(): React.JSX.Element {
  return (
    <footer className="footer-premium">
      {/* Subtle Ambient Background Glows */}
      <div className="ambient-glow glow-left" aria-hidden="true" />
      <div className="ambient-glow glow-right" aria-hidden="true" />

      <div className="footer-container">
        
        {/* Column 1: Brand & Newsletter (Wider) */}
        <div className="footer-col brand-col fade-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="logo">
            Global <span className="text-gradient">Consultancy</span>
          </h2>
          <p className="brand-desc">
            Your premier partner for exclusive education and career opportunities worldwide. 
            We engineer your journey from ambition to global success.
          </p>
          
          {/* Premium Newsletter Input */}
          <div className="newsletter-box">
            <input type="email" placeholder="Subscribe to our newsletter" aria-label="Email address" />
            <button type="button" aria-label="Subscribe">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col fade-up" style={{ animationDelay: '0.2s' }}>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col fade-up" style={{ animationDelay: '0.3s' }}>
          <h3>Services</h3>
          <ul className="footer-links">
            {servicesLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info & Socials */}
        <div className="footer-col fade-up" style={{ animationDelay: '0.4s' }}>
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>abroadsolutionskyra@gmail.com</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+91 98957 37331</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Malappuram, Kerala</span>
            </li>
          </ul>

          <div className="socials-premium">
            {socialIcons.map((social, idx) => (
              <a href="#" key={idx} aria-label={social.name} className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>Copyright © {new Date().getFullYear()} SKYRA All rights reserved. Powered by byten</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="dot">•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}