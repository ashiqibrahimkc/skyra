"use client";
import React, { useState, useEffect } from "react";

// --- STRICT TYPING ---
interface FeatureData {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface CountryData {
  name: string;
  flag: string;
  description: string;
}

interface ServiceData {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface HighlightStat {
  endValue: number;
  suffix: string;
  label: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// --- DATA ARRAYS ---
const features: FeatureData[] = [
  {
    title: "Expert Guidance",
    desc: "Experienced consultants helping you at every step of your journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Global Network",
    desc: "Strong partnerships with universities and employers worldwide.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Transparent Process",
    desc: "No hidden fees, complete clarity in every single step.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    desc: "From application to visa and job placement—we handle everything.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const topCountries: CountryData[] = [
  { name: "Middle East", flag: "🇦🇪", description: "Tech Hubs & Tax-Free Income" },
  { name: "Europe", flag: "🇬🇧", description: "Historic & Elite Education" },
  { name: "Canada", flag: "🇨🇦", description: "Welcoming & PR Friendly" },
  { name: "Australia", flag: "🇦🇺", description: "High Quality of Life & ROI" },
];

const services: ServiceData[] = [
  {
    title: "Study Abroad",
    desc: "Gain admission into top-tier universities worldwide with our International Education Support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Job Placement",
    desc: "Secure lucrative global job opportunities tailored strictly to your skill set.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Visa Assistance",
    desc: "Seamless visa processing backed by meticulous documentation support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <line x1="4" y1="10" x2="20" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
    ),
  },
  {
    title: "Career Guidance",
    desc: "Personalised strategy sessions to help you define and achieve your ultimate career trajectory.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

const processSteps: ProcessStep[] = [
  { step: "01", title: "Initial Consultation", desc: "We evaluate your profile and aspirations to map out the perfect global pathway." },
  { step: "02", title: "Strategic Planning", desc: "Shortlisting the best institutions or employers to match your unique objectives." },
  { step: "03", title: "Execution & Visas", desc: "Handling all complex documentation, application submissions, and immigration procedures." },
  { step: "04", title: "Departure & Placement", desc: "Providing pre-departure briefings and ensuring a smooth transition into your new role or programme." },
];

const testimonialsData: Testimonial[] = [
  { name: "Aisha R.", role: "MSc Student, London", quote: "Skyra's International Education Support made my transition to the UK completely effortless. Their attention to detail is unmatched." },
  { name: "David K.", role: "Software Architect, Toronto", quote: "The Career Guidance team at Skyra helped me secure a premium tech role abroad within months. Exceptional service." },
];

const faqData: FAQ[] = [
  { question: "Do you guarantee university admissions?", answer: "While we cannot guarantee admission as it depends on the university's discretion, our expert profiling and application strategies drastically increase your success rate." },
  { question: "How long does the visa process take?", answer: "Processing times vary by destination and visa type, but our team ensures your documentation is flawless to prevent any unnecessary delays." },
  { question: "Do you assist with post-study work visas?", answer: "Yes, our end-to-end service includes guidance on transitioning from a student visa to a post-study work permit." },
];

const statsData: HighlightStat[] = [
  { endValue: 500, suffix: "+", label: "Students Placed" },
  { endValue: 40, suffix: "+", label: "Countries Covered" },
  { endValue: 10, suffix: "+", label: "Years Experience" },
];

const featuresData: string[] = [
  "Personalised Career Guidance",
  "Global University Network",
  "100% Transparent Process",
  "Visa & Job Support",
];

// --- COMPONENTS ---
const AnimatedNumber = ({ endValue, suffix }: { endValue: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [endValue]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

// Simple Accordion Component for FAQs
const FAQItem = ({ faq }: { faq: FAQ }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h4>{faq.question}</h4>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="skyra-wrapper">
      {/* ================= HERO ================= */}
      <section className="hero-premium">
        <div className="hero-bg-image" aria-hidden="true" />
        <div className="hero-overlay-premium" aria-hidden="true" />
        <div className="hero-glow orb-1" aria-hidden="true" />
        <div className="hero-glow orb-2" aria-hidden="true" />
        <div className="hero-glow orb-3" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-badge animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="badge-icon">✨</span>
            <span>Welcome to Skyra</span>
          </div>

          <h1 className="hero-title animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Elevate Your Global <br />
            <span className="text-gradient">Education & Career</span>
          </h1>

          <p className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Skyra connects ambitious minds with elite academic programmes and lucrative international career opportunities through expert, personalised consultancy.
          </p>

          <div className="hero-buttons animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-premium btn-primary" type="button">
              <span>Start Your Journey</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn-premium btn-secondary" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon-left">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>Explore Opportunities</span>
            </button>
          </div>
        </div>

        <div className="scroll-indicator animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="mouse"><div className="wheel"></div></div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-premium">
        <div className="glow-circle glow-left" aria-hidden="true" />
        <div className="glow-circle glow-right" aria-hidden="true" />

        <div className="about-container">
          <div className="about-text fade-up">
            <div className="badge">About Skyra</div>
            <h2>
              Empowering Your <br />
              <span className="text-gradient">Worldwide Trajectory</span>
            </h2>
            <p>
              At Skyra, we are a premier global education and job consultancy dedicated to helping professionals and students realise their potential. From securing placements at elite universities to navigating international job markets, we provide comprehensive, end-to-end strategic guidance.
            </p>

            <div className="about-highlights">
              {statsData.map((stat, index) => (
                <div className="highlight-box" key={index}>
                  <h3 className="text-gradient">
                    <AnimatedNumber endValue={stat.endValue} suffix={stat.suffix} />
                  </h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card floating">
            <h3>The Skyra Advantage</h3>
            <ul className="feature-list">
              {featuresData.map((feature, index) => (
                <li key={index}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="about-btn-premium" type="button">
              <span>Discover More</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-premium">
        <div className="ambient-glow glow-top" aria-hidden="true" />
        <div className="ambient-glow glow-bottom" aria-hidden="true" />

        <div className="services-container">
          <div className="services-header fade-up">
            <div className="badge">What We Do</div>
            <h2 className="services-title">
              Our Premium <span className="text-gradient">Services</span>
            </h2>
            <p className="services-subtitle">
              World-class solutions for education and career growth, tailored to your specific international ambitions.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card-premium fade-up" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="card-glow" />
                <div className="icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="learn-more">
                  <span>Explore</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= COUNTRIES ================= */}
      <section className="countries-premium">
        <div className="ambient-glow glow-top" aria-hidden="true" />
        <div className="ambient-glow glow-bottom" aria-hidden="true" />

        <div className="countries-container">
          <div className="countries-header fade-up">
            <div className="badge">Featured Destinations</div>
            <h2 className="countries-title">
              Gateway to the <span className="text-gradient">World</span>
            </h2>
            <p className="countries-subtitle">
              We connect ambitious minds with elite universities and lucrative career opportunities in top-tier global destinations.
            </p>
          </div>

          <div className="countries-grid">
            {topCountries.map((country, index) => (
              <div className="country-card-premium fade-up" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="card-top-accent" aria-hidden="true" />
                <div className="card-content">
                  <div className="flag-avatar"><span className="flag-emoji">{country.flag}</span></div>
                  <div className="country-info">
                    <h3>{country.name}</h3>
                    <p>{country.description}</p>
                  </div>
                </div>
                <div className="card-action">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-premium">
        <div className="ambient-glow glow-center" aria-hidden="true" />
        <div className="why-container">
          <div className="why-header fade-up">
            <div className="badge">Our Edge</div>
            <h2 className="why-title">
              Why Choose <span className="text-gradient">Skyra</span>
            </h2>
            <p className="why-subtitle">
              Committed to providing reliable, transparent, and result-driven consultancy services.
            </p>
          </div>

          <div className="why-grid">
            {features.map((item, index) => (
              <div className="why-card-premium fade-up" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="card-inner-glow" aria-hidden="true" />
                <div className="why-icon-wrapper">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* ================= CTA ================= */}
      <section className="cta-premium">
        <div className="cta-container fade-up">
          <div className="cta-glow glow-left" aria-hidden="true" />
          <div className="cta-glow glow-right" aria-hidden="true" />
          <div className="cta-content">
            <h2 className="cta-title">
              Start Your <span className="text-gradient">Global Journey</span> Today
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rocket-icon">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </h2>
            <p className="cta-subtitle">
              Partner with Skyra for expert guidance on studying abroad or landing your dream job overseas. Book your free consultation now.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn-premium primary" type="button">
                <span>Book Free Consultation</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </button>
              <button className="cta-btn-premium secondary" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon-left">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}