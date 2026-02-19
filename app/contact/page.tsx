import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactHeroSection from "./components/ContactHeroSection";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Apex Meridian - M&A Transaction Advisory, Corporate Transformation, Growth Strategy",
  description:
    "Get in touch with Apex Meridian for expert guidance on M&A transaction advisory, corporate transformation, and growth strategy. We help businesses navigate complex transactions and achieve sustainable growth.",
  alternates: {
    canonical: "https://apex-meridian-web.vercel.app/contact",
  },

  keywords: [
    "Apex",
    "M&A Transaction Advisory",
    "Corporate Transformation",
    "Growth Strategy",
    "Business Advisory",
    "Mergers and Acquisitions",
    "Strategic Consulting",
    "Financial Advisory",
    "Corporate Strategy",
    "Business Growth",
  ],
  other: {
    publisher: "Apex Meridian",
    "X-Robots-Tag":
      "noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Contact Apex Meridian - M&A Transaction Advisory, Corporate Transformation, Growth Strategy",
    description:
      "Get in touch with Apex Meridian for expert guidance on M&A transaction advisory, corporate transformation, and growth strategy. We help businesses navigate complex transactions and achieve sustainable growth.",
    url: "https://apex-meridian-web.vercel.app/contact",
    siteName: "Apex Meridian",
    images: [
      {
        url: "/assets/common/logo-img.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Apex Meridian - M&A Transaction Advisory, Corporate Transformation, Growth Strategy",
    description:
      "Get in touch with Apex Meridian for expert guidance on M&A transaction advisory, corporate transformation, and growth strategy. We help businesses navigate complex transactions and achieve sustainable growth.",
    images: ["/assets/common/logo-img.png"],
  },
};

const ContactPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <ContactHeroSection />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default ContactPage;
