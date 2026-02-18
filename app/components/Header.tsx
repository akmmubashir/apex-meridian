"use client";

import React, { useEffect, useState } from "react";
import Container from "./ui/Container";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

// type Props = {}

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/about" },
    { name: "Approach", href: "/#approach" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleServicesClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      setIsMenuOpen(false);
      return;
    }

    event.preventDefault();
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/#services");
    }

    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <div
      className={`fixed top-0 z-30 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container padding="bg-transparent p-[20px_80px] max-2xl:p-[20px_80px] max-lg:p-[20px_40px] max-md:p-[20px_20px]">
        <div className="flex items-center justify-between gap-5 w-full">
          <Link href="/">
            <Image
              src={
                isScrolled
                  ? "/assets/common/logo-b.png"
                  : "/assets/common/logo.png"
              }
              alt="logo"
              width={200}
              height={100}
            />
          </Link>
          <div
            className={`max-lg:hidden p-[10px_40px] rounded-full flex items-center gap-9 transition-colors duration-300 ${
              isScrolled
                ? "bg-[#0C271A]/5 border border-[#0C271A]/10"
                : "bg-[#D9D9D9]/5 border border-white/20"
            }`}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={
                  item.href === "/#services" ? handleServicesClick : undefined
                }
                className={`font-light text-[18px] max-2xl:text-[16px] max-lg:text-[14px] hover:text-[#C9AA5F] transition-colors duration-300 ${
                  isScrolled ? "text-[#0C271A]" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className={`max-lg:hidden p-[10px_40px] rounded-full text-[16px] font-semibold cursor-pointer transition-colors duration-300 ${
              isScrolled
                ? "bg-[#0C271A] text-white hover:bg-[#C9AA5F] hover:text-[#0C271A]"
                : "bg-[#C9AA5F] hover:bg-white text-[#0C271A] hover:text-[#2a2a2a]"
            }`}
          >
            Schedule Consultation
          </button>
          <button
            className={`lg:hidden text-[16px] cursor-pointer transition-colors duration-300 ${
              isScrolled ? "text-[#0C271A]" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </Container>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
      <div
        className={`fixed right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#0C271A]/10">
          <span className="text-[18px] font-semibold text-[#0C271A]">Menu</span>
          <button
            className="text-[#0C271A]"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={
                item.href === "/#services"
                  ? handleServicesClick
                  : handleNavClick
              }
              className="text-[16px] font-light text-[#0C271A] hover:text-[#C9AA5F] transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <button className="mt-2 rounded-full bg-[#C9AA5F] px-6 py-3 text-[16px] font-semibold text-[#0C271A] hover:bg-[#0C271A] hover:text-white transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
