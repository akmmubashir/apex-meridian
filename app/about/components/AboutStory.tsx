"use client";

import React from "react";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/Heading";
import Paragraph from "@/app/components/Paragraph";
import { motion } from "framer-motion";

const AboutStory = () => {
  return (
    <div className="bg-[#F6F1E8]">
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12.5 max-lg:gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <Heading className="text-[46px] max-lg:text-[36px] max-md:text-[28px]">
              Our Story
            </Heading>
            <div className="flex flex-col gap-5">
              <Paragraph>
                Founded over a decade ago by former partners from elite
                consulting firms, Apex Meridian was built on a single
                conviction: that strategic insight means nothing without
                flawless execution.
              </Paragraph>
              <Paragraph>
                We&apos;ve worked with boards and CEOs at some of the
                world&apos;s leading private equity firms, advising on
                transformative acquisitions, operational overhauls, and growth
                initiatives worth billions in capital.
              </Paragraph>
              <Paragraph>
                What sets us apart is our commitment to staying embedded in our
                clients&apos; organizations until results are realized.
                We&apos;re not just consultants we&apos;re partners in your
                success.
              </Paragraph>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 bg-white rounded-[30px] p-7.5 max-lg:p-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-[56px] max-lg:text-[44px] max-md:text-[36px] text-[#C9AA5E] font-light">
                10+
              </p>
              <p className="text-[16px] max-lg:text-[14px] text-[#0C271A] font-light">
                Years of Experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-[56px] max-lg:text-[44px] max-md:text-[36px] text-[#C9AA5E] font-light">
                $2B+
              </p>
              <p className="text-[16px] max-lg:text-[14px] text-[#0C271A] font-light">
                In Guided Capital Initiatives
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-[56px] max-lg:text-[44px] max-md:text-[36px] text-[#C9AA5E] font-light">
                50+
              </p>
              <p className="text-[16px] max-lg:text-[14px] text-[#0C271A] font-light">
                Transformative Engagements
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutStory;
