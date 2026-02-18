import React from "react";
import Container from "@/app/components/ui/Container";
import { Inria_Serif } from "next/font/google";
import { ArrowRight } from "lucide-react";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: "300",
});

const HeroSection = () => {
  return (
    <div
      className="h-dvh bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url(/assets/common/heroPattern.png), linear-gradient(to bottom, #0C271A 18%, #143828 35%, #2F5E4A 51%, #9EB8AA 77%, #F6F1E8 95%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="flex items-center justify-center h-full text-center">
          <div className="flex flex-col gap-7.5">
            <div className="flex justify-center items-center">
              <div className="bg-[#FFFFFF]/5 border border-[#ffffff]/10 rounded-full flex items-center gap-2.5 p-[6px_20px]">
                <div className="bg-[#C9AA5E] rounded-full w-2 h-2 aspect-square" />
                <p className="text-[#DCC99B] text-[14px] font-light">
                  Strategic advisory for the bold
                </p>
              </div>
            </div>
            <h1
              className={`flex flex-col text-[68px] leading-tight ${inriaSerif.className}`}
            >
              <span className="text-white">Transform Complexity</span>
              <span className="text-[#C9AA5E]">Into Competitive Advantage</span>
            </h1>
            <div className="flex items-center justify-center">
              <p className="text-[22px] w-2/5 font-light">
                Premier strategic advisory for private equity firms, corporate
                innovation teams, and growth-focused CEOs navigating high-stakes
                decisions.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex gap-2.5">
                <button className="cursor-pointer bg-[#C9AA5E] hover:bg-[#2a2a2a] text-white rounded-full p-[8px_30px] font-medium border-2 border-[#C9AA5E]/50 hover:border-[#2a2a2a]/50 transition-colors duration-300">
                  <span className="flex items-center gap-2">
                    Request Strategy Session
                    <ArrowRight size={18} />
                  </span>
                </button>
                <button className="cursor-pointer bg-transparent text-white hover:text-[#2a2a2a] rounded-full p-[8px_30px] font-medium border-2 border-[#FFFFFF]/50 hover:bg-white hover:border-white transition-colors duration-300">
                  <span>Explore Our Approach</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-7.5 mt-4">
              <h6 className="text-[#F5EEEE] text-[16px] font-semibold uppercase">
                Trusted by industry leaders
              </h6>
              <div className="flex justify-center items-center">
                <div className="flex gap-12.5">
                  {["Blackstone", "KKR", "Appolo", "Carl"].map((company) => (
                    <p
                      key={company}
                      className="text-[#F5EEEE] text-[16px] font-light"
                    >
                      {company}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
