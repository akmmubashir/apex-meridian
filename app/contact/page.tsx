import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactHeroSection from "./components/ContactHeroSection";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

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
