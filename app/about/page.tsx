import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutStory from "./components/AboutStory";
import AboutValues from "./components/AboutValues";

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
