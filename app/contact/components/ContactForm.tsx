"use client";

import React, { useState } from "react";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/Heading";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
    alert("Thank you for reaching out. We'll get back to you soon!");
  };

  return (
    <div className="bg-[#F6F1E8]">
      <Container>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div
            className="text-center mb-10 max-lg:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <Heading className="text-[46px] max-lg:text-[36px] max-md:text-[28px]">
              Send Us a Message
            </Heading>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-[30px] p-7.5 max-lg:p-6 max-md:p-5 shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-lg:gap-5 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <label className="block text-[16px] text-[#0C271A] font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-[#C9AA5E]/30 rounded-lg focus:outline-none focus:border-[#C9AA5E] transition-colors text-[#2a2a2a] placeholder:text-[#919191]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <label className="block text-[16px] text-[#0C271A] font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-[#C9AA5E]/30 rounded-lg focus:outline-none focus:border-[#C9AA5E] transition-colors text-[#2a2a2a] placeholder:text-[#919191]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <label className="block text-[16px] text-[#0C271A] font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 border border-[#C9AA5E]/30 rounded-lg focus:outline-none focus:border-[#C9AA5E] transition-colors text-[#2a2a2a] placeholder:text-[#919191]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <label className="block text-[16px] text-[#0C271A] font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-[#C9AA5E]/30 rounded-lg focus:outline-none focus:border-[#C9AA5E] transition-colors text-[#2a2a2a] placeholder:text-[#919191]"
                />
              </motion.div>

              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <label className="block text-[16px] text-[#0C271A] font-medium mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#C9AA5E]/30 rounded-lg focus:outline-none focus:border-[#C9AA5E] transition-colors text-[#2a2a2a] placeholder:text-[#919191]"
                >
                  <option value="">Select a subject</option>
                  <option value="M&A Advisory">M&A Advisory</option>
                  <option value="Transformation">
                    Corporate Transformation
                  </option>
                  <option value="Growth Strategy">Growth Strategy</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: false, margin: "-100px" }}
              className="mb-6"
            >
              <label className="block text-[16px] text-[#0C271A] font-medium mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your strategic priorities..."
                rows={6}
                className="w-full px-4 py-3 border border-[#C9AA5E]/30 rounded-lg focus:outline-none focus:border-[#C9AA5E] transition-colors resize-none text-[#2a2a2a] placeholder:text-[#919191]"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-[#C9AA5E] hover:bg-[#0C271A] text-white rounded-lg py-3 font-medium flex items-center justify-center gap-2 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
            >
              Send Message
              <ArrowRight size={18} />
            </motion.button>
          </motion.form>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactForm;
