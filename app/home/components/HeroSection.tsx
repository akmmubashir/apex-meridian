"use client";

import React from "react";
import Container from "@/app/components/ui/Container";
import { Inria_Serif } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: "300",
});

const HeroSection = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <motion.div
      className="h-dvh bg-cover bg-no-repeat bg-center relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage:
          "url(/assets/common/heroPattern.png), linear-gradient(to bottom, #0C271A 18%, #143828 35%, #2F5E4A 51%, #9EB8AA 85%, #F6F1E8 98%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        y,
      }}
    >
      <motion.div style={{ opacity }}>
        <Container>
          <div className="flex items-center justify-center h-full text-center">
            <motion.div
              className="flex flex-col gap-7.5 max-lg:gap-[25px_0]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, margin: "0px" }}
            >
              <div className="flex justify-center items-center">
                <motion.div
                  className="bg-[#FFFFFF]/5 border border-[#ffffff]/10 rounded-full flex items-center gap-2.5 max-lg:gap-1.5 p-[6px_20px] max-lg:p-[6px_10px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  <div className="bg-[#C9AA5E] rounded-full w-2 max-lg:w-1 h-2 max-lg:h-1 aspect-square" />
                  <p className="text-[#DCC99B] text-[14px] max-lg:text-[12px] font-light">
                    Strategic advisory for the bold
                  </p>
                </motion.div>
              </div>

              <motion.h1
                className={`flex flex-col text-[68px] max-2xl:text-[56px] max-lg:text-[34px] leading-tight ${inriaSerif.className}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <span className="text-white">Transform Complexity</span>
                <span className="text-[#C9AA5E]">
                  Into Competitive Advantage
                </span>
              </motion.h1>

              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <p className="text-[22px] max-2xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] w-2/5 max-lg:w-full font-light">
                  Premier strategic advisory for private equity firms, corporate
                  innovation teams, and growth-focused CEOs navigating
                  high-stakes decisions.
                </p>
              </motion.div>

              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false }}
              >
                <div className="flex max-md:flex-col gap-2.5">
                  <button className="text-[16px] max-lg:text-[14px] cursor-pointer bg-[#C9AA5E] hover:bg-[#2a2a2a] text-white rounded-full p-[8px_30px] max-lg:p-[8px_20px] font-medium border-2 border-[#C9AA5E]/50 hover:border-[#2a2a2a]/50 transition-colors duration-300">
                    <span className="flex items-center gap-2">
                      Request Strategy Session
                      <ArrowRight size={18} />
                    </span>
                  </button>
                  <button className="text-[16px] max-lg:text-[14px] cursor-pointer bg-transparent text-white hover:text-[#2a2a2a] rounded-full p-[8px_30px] max-lg:p-[8px_20px] font-medium border-2 border-[#FFFFFF]/50 hover:bg-white hover:border-white transition-colors duration-300">
                    <span>Explore Our Approach</span>
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col gap-7.5 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <h6 className="text-[#F5EEEE] text-[16px] max-lg:text-[14px] font-semibold uppercase">
                  Trusted by industry leaders
                </h6>
                <div className="flex justify-center items-center">
                  <div className="flex gap-12.5">
                    {["Blackstone", "KKR", "Appolo", "Carl"].map((company) => (
                      <motion.p
                        key={company}
                        className="text-[#F5EEEE] text-[16px] max-lg:text-[14px] font-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                      >
                        {company}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
