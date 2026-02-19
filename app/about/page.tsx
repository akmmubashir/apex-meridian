import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutStory from "./components/AboutStory";
import AboutValues from "./components/AboutValues";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Apex Meridian - M&A Transaction Advisory, Corporate Transformation, Growth Strategy",
  description:
    "Learn more about Apex Meridian, a leading M&A transaction advisory firm specializing in corporate transformation and growth strategy. Discover our story, values, and commitment to helping businesses achieve sustainable growth.",
  alternates: {
    canonical: "https://apex-meridian-web.vercel.app/about",
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
      "About Apex Meridian - M&A Transaction Advisory, Corporate Transformation, Growth Strategy",
    description:
      "Learn more about Apex Meridian, a leading M&A transaction advisory firm specializing in corporate transformation and growth strategy. Discover our story, values, and commitment to helping businesses achieve sustainable growth.",
    url: "https://apex-meridian-web.vercel.app/about",
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
      "About Apex Meridian - M&A Transaction Advisory, Corporate Transformation, Growth Strategy",
    description:
      "Learn more about Apex Meridian, a leading M&A transaction advisory firm specializing in corporate transformation and growth strategy. Discover our story, values, and commitment to helping businesses achieve sustainable growth.",
    images: ["/assets/common/logo-img.png"],
  },
};

const AboutPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <AboutHeroSection />
      <AboutStory />
      <AboutValues />
      <Footer />
    </div>
  );
};

export default AboutPage;
