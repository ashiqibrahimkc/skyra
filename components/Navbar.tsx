"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <header className="navbar-oval">
          
          {/* 1. LEFT COLUMN: Logo */}
          
            <div className="logo">
              SKYRA
            </div>
          

          {/* 2. CENTER COLUMN: Desktop Menu */}
          <nav className="desktop-menu">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="nav-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. RIGHT COLUMN: Actions */}
          <div className="nav-actions">
            <Link href="https://wa.me/9895737301" className="nav-cta-btn">
              Let's Talk
            </Link>

            <button
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </header>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-overlay ${isOpen ? "show" : ""}`}>
        <div className="mobile-menu-content">
          <ul>
            {navLinks.map((link, index) => (
              <li 
                key={index} 
                style={{ transitionDelay: `${isOpen ? 0.1 * (index + 1) : 0}s` }}
                className={isOpen ? "fade-in-up" : ""}
              >
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div 
            className={`mobile-footer ${isOpen ? "fade-in-up" : ""}`}
            style={{ transitionDelay: `${isOpen ? 0.6 : 0}s` }}
          >
            <p>info@skyra.com</p>
            <div className="mobile-socials">
              <span>TW</span>
              <span>IG</span>
              <span>IN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}