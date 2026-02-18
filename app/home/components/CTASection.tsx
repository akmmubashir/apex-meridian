import React from "react";
import Heading from "@/app/components/Heading";
import Paragraph from "@/app/components/Paragraph";
import Container from "@/app/components/ui/Container";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="bg-[#F6F1E8] py-20">
      <Container>
        <div className="flex flex-col gap-7.5">
          <Heading className="text-[46px] font-light text-center">
            Ready to Navigate Your <br />
            <span className="text-[#C9AA5F]">Next Strategic Move?</span>
          </Heading>

          <div className="flex justify-center">
            <Paragraph className="text-center w-3/5">
              We offer a range of strategic advisory services tailored to the
              unique needs of private equity firms, corporate innovation teams,
              and growth-focused CEOs.
            </Paragraph>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-2.5">
              <button className="cursor-pointer bg-[#0C271A] hover:bg-[#C9AA5E] text-white rounded-full p-[8px_30px] font-medium border-2 border-[#0C271A]/50 hover:border-[#C9AA5E]/50 transition-colors duration-300">
                <span className="flex items-center gap-2">
                  Request Strategy Session
                  <ArrowRight size={18} />
                </span>
              </button>
              <button className="cursor-pointer bg-white text-[#0C271A] hover:text-[#f1f1f1] rounded-full p-[8px_30px] font-medium border-2 border-[#FFFFFF]/50 hover:bg-[#000000] hover:border-[#000000]/50 transition-colors duration-300">
                <span>Explore Our Approach</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTASection;
