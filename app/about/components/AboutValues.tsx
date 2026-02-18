"use client";

import React from "react";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/Heading";
import SubHeading from "@/app/components/SubHeading";
import Paragraph from "@/app/components/Paragraph";
import { motion } from "framer-motion";

const AboutValues = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in every engagement, earning the trust of boards and investors.",
    },
    {
      id: 2,
      title: "Excellence",
      description:
        "We deliver exceptional insights and actionable strategies refined through decades of collective experience.",
    },
    {
      id: 3,
      title: "Collaboration",
      description:
        "We partner closely with our clients, embedding ourselves in their teams to ensure successful execution.",
    },
    {
      id: 4,
      title: "Impact",
      description:
        "We focus on measurable results that drive real value creation and sustainable competitive advantage.",
    },
  ];

  return (
    <div className="bg-[#0C271A] border-b border-white/10">
      <Container>
        <motion.div
          className="flex flex-col gap-7.5 max-lg:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div
            className="text-center flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <SubHeading darkmode>OUR VALUES</SubHeading>
            <Heading
              darkmode
              className="text-[46px] max-lg:text-[36px] max-md:text-[28px]"
            >
              Core Principles That Guide Us
            </Heading>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-7.5 max-lg:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                className="bg-[#143828] border border-white/10 rounded-[20px] p-7.5 max-lg:p-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, margin: "-100px" }}
                whileHover={{ borderColor: "rgba(201, 170, 95, 0.3)" }}
              >
                <h3 className="text-[28px] max-lg:text-[24px] max-md:text-[20px] text-[#C9AA5E] font-light">
                  {value.title}
                </h3>
                <Paragraph darkmode className="text-white/80! font-light">
                  {value.description}
                </Paragraph>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutValues;
