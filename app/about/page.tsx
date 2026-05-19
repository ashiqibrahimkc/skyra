// app/about/page.tsx
import { Metadata } from "next";
import AboutView from "./aboutview";

// High-performance SEO Metadata Configuration
export const metadata: Metadata = {
  title: "About Skyra | Elite Study Abroad & Global HR Solutions",
  description: "Operating from Malappuram, Kerala, Skyra bridges global ambitions with top-tier international education consulting and overseas career placements across 4 continents.",
  keywords: [
    "Skyra Malappuram",
    "Study abroad consultancy Kerala",
    "Overseas career placement",
    "International job agency Kerala",
    "Visa and immigration consultants Malappuram",
    "Global HR solutions",
    "Skyra global consulting"
  ],
  alternates: {
    canonical: "https://skyrallp.com/about", // Replace with your verified domain
  },
  openGraph: {
    title: "About Skyra | Architecting Global Futures",
    description: "Meticulous, engineering-grade support for elite study abroad programmes and international job placements.",
    url: "https://skyrallp.com/about",
    siteName: "Skyra",
    images: [
      {
        url: "https://skyrallp.com/og-about.jpg", // Create a clean minimalist preview image
        width: 1200,
        height: 630,
        alt: "Skyra Global Consulting Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyra | Architecting Global Futures",
    description: "Elite study abroad programmes and international job placements from Malappuram, Kerala.",
    images: ["https://skyrallp.com/og-about.jpg"],
  },
};

export default function Page() {
  return <AboutView />;
}