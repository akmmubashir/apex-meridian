"use client";

import React from "react";
import Container from "@/app/components/ui/Container";
import { Inria_Serif } from "next/font/google";
import { motion } from "framer-motion";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: "300",
});

const ContactHeroSection = () => {
  return (
    <motion.div
      className="h-96 max-lg:h-80 max-md:h-80 bg-cover bg-no-repeat bg-center relative overflow-hidden flex items-center"
      style={{
        backgroundImage:
          "url(/assets/common/heroPattern.png), linear-gradient(to bottom, #0C271A 18%, #143828 35%, #2F5E4A 51%, #9EB8AA 85%, #F6F1E8 98%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="flex justify-center items-center">
        <motion.div
          className="flex flex-col gap-6 items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className={`text-[56px] max-lg:text-[44px] max-md:text-[32px] leading-tight text-white ${inriaSerif.className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-[20px] max-lg:text-[16px] max-md:text-[14px] w-3/5 max-lg:w-4/5 font-light text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to discuss your strategic priorities? Let&apos;s connect.
          </motion.p>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default ContactHeroSection;
