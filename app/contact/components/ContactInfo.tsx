"use client";

import React from "react";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/Heading";
import Paragraph from "@/app/components/Paragraph";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactMethods = [
    {
      id: 1,
      icon: Mail,
      title: "Email",
      value: "hello@apexmeridian.com",
      description: "Send us an email anytime",
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available for calls during business hours",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Office",
      value: "New York, USA",
      description: "Strategic hub for our operations",
    },
    {
      id: 4,
      icon: Clock,
      title: "Hours",
      value: "Mon - Fri, 9 AM - 6 PM EST",
      description: "Response within 24 hours",
    },
  ];

  return (
    <div className="bg-[#0C271A] border-b border-white/10">
      <Container>
        <motion.div
          className="flex flex-col gap-12 max-lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <Heading
              darkmode
              className="text-[46px] max-lg:text-[36px] max-md:text-[28px]"
            >
              Get in Touch With Us
            </Heading>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-7.5 max-lg:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.id}
                  className="bg-[#143828] border border-white/10 rounded-[20px] p-7.5 max-lg:p-6 flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  whileHover={{
                    borderColor: "rgba(201, 170, 95, 0.3)",
                    backgroundColor: "#1a4a32",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#C9AA5F]/15 p-3 rounded-lg">
                      <Icon size={24} className="text-[#C9AA5E]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] max-lg:text-[18px] text-white font-light mb-1">
                        {method.title}
                      </h3>
                      <p className="text-[16px] max-lg:text-[14px] text-[#C9AA5E] font-medium">
                        {method.value}
                      </p>
                    </div>
                  </div>
                  <Paragraph
                    darkmode
                    className="text-[14px] text-white/80! font-light"
                  >
                    {method.description}
                  </Paragraph>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactInfo;
