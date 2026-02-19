"use client";

import React, { useState } from "react";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/Heading";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Loader } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate full_name
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Validate phone
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    // Validate subject
    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormState("error");
      setErrorMessage("Please fix the errors below and try again.");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let errorData;
      try {
        errorData = await response.json();
      } catch {
        throw new Error("Invalid response from server");
      }

      if (!response.ok) {
        throw new Error(
          errorData.error &&
            typeof errorData.error === "string" &&
            errorData.error.trim()
            ? errorData.error
            : "Failed to submit form. Please try again.",
        );
      }

      setFormState("success");
      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        subject: "",
        message: "",
      });

      // Reset success message after 10 seconds
      setTimeout(() => {
        setFormState("idle");
      }, 10000);
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : "An error occurred while submitting the form. Please try again.",
      );
      console.error("Form submission error:", error);
    }
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

          {formState === "success" && (
            <motion.div
              className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CheckCircle
                className="text-green-600 shrink-0 mt-0.5"
                size={20}
              />
              <div>
                <h3 className="text-green-900 font-semibold mb-1">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-800 text-sm">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            </motion.div>
          )}

          {formState === "error" && (
            <motion.div
              className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="text-red-900 font-semibold mb-1">
                  Error Submitting Form
                </h3>
                <p className="text-red-800 text-sm">{errorMessage}</p>
              </div>
            </motion.div>
          )}

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
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  disabled={formState === "loading"}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors text-[#2a2a2a] placeholder:text-[#919191] disabled:bg-gray-100 disabled:cursor-not-allowed ${
                    errors.full_name
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#C9AA5E]/30 focus:border-[#C9AA5E]"
                  }`}
                />
                {errors.full_name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.full_name}
                  </p>
                )}
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
                  disabled={formState === "loading"}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors text-[#2a2a2a] placeholder:text-[#919191] disabled:bg-gray-100 disabled:cursor-not-allowed ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#C9AA5E]/30 focus:border-[#C9AA5E]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
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
                  disabled={formState === "loading"}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors text-[#2a2a2a] placeholder:text-[#919191] disabled:bg-gray-100 disabled:cursor-not-allowed ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#C9AA5E]/30 focus:border-[#C9AA5E]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
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
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  disabled={formState === "loading"}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-[#C9AA5E]/30 rounded-lg focus:outline-none focus:border-[#C9AA5E] transition-colors text-[#2a2a2a] placeholder:text-[#919191] disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  disabled={formState === "loading"}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors text-[#2a2a2a] disabled:bg-gray-100 disabled:cursor-not-allowed ${
                    errors.subject
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#C9AA5E]/30 focus:border-[#C9AA5E]"
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="M&A Advisory">M&A Advisory</option>
                  <option value="Corporate Transformation">
                    Corporate Transformation
                  </option>
                  <option value="Growth Strategy">Growth Strategy</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                )}
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
                disabled={formState === "loading"}
                placeholder="Tell us about your strategic priorities..."
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-none text-[#2a2a2a] placeholder:text-[#919191] disabled:bg-gray-100 disabled:cursor-not-allowed ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#C9AA5E]/30 focus:border-[#C9AA5E]"
                }`}
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">{errors.message}</p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={formState === "loading" || formState === "success"}
              className="w-full bg-[#C9AA5E] hover:bg-[#0C271A] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg py-3 font-medium flex items-center justify-center gap-2 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, margin: "-100px" }}
              whileHover={formState !== "loading" ? { scale: 1.02 } : {}}
            >
              {formState === "loading" ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactForm;
