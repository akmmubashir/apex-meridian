import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/serviceSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CTASection from "./components/CTASection";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
