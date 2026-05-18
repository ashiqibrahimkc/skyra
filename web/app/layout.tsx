import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skyra | Study Abroad & HR Solutions",
  
  description:
    "Skyra provides international study abroad consultancy, visa assistance, career guidance, HR solutions, overseas education support, recruitment, and global placement services.",

  keywords: [
    "Skyra",
    "Study Abroad",
    "International Education",
    "HR Solutions",
    "Overseas Education",
    "Visa Assistance",
    "Career Guidance",
    "Recruitment Agency",
    "Global Placement",
    "Work Abroad",
    "Student Visa",
    "Immigration Services",
    "Kerala Study Abroad Consultancy",
    "Malappuram HR Consultancy",
  ],

  authors: [{ name: "Skyra" }],

  creator: "Skyra",

  publisher: "Skyra",

  metadataBase: new URL("https://www.skyrallp.com"),

  openGraph: {
    title: "Skyra | Study Abroad & HR Solutions",

    description:
      "Trusted international study abroad consultancy and HR solutions company helping students and professionals build global careers.",

    url: "https://www.skyrallp.com",

    siteName: "Skyra",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skyra Study Abroad & HR Solutions",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Skyra | Study Abroad & HR Solutions",

    description:
      "International study abroad consultancy and HR solutions for global opportunities.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}