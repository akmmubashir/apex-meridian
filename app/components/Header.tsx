import React from "react";
import Container from "./ui/Container";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

// type Props = {}

const Header = () => {
  const navigation = [
    { name: "Services", href: "/" },
    { name: "Why Us", href: "/about" },
    { name: "Approach", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <div className="fixed top-0 z-30 w-full">
      <Container padding="bg-transparent p-[20px_80px] max-2xl:p-[20px_80px] max-lg:p-[20px_40px] max-md:p-[20px_20px]">
        <div className="flex items-center justify-between gap-5 w-full">
          <Link href="/">
            <Image
              src="/assets/common/logo.png"
              alt="logo"
              width={200}
              height={100}
            />
          </Link>
          <div className="max-lg:hidden bg-[#D9D9D9]/5 border border-white/20 p-[10px_40px] rounded-full flex items-center gap-9">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white font-light text-[18px] hover:text-[#C9AA5F] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button className="max-lg:hidden p-[10px_40px] rounded-full bg-[#C9AA5F] hover:bg-white text-[#0C271A] hover:text-[#2a2a2a] text-[16px] font-semibold cursor-pointer transition-colors duration-300">
            Schedule Consultation
          </button>
          <button className="lg:hidden text-white text-[16px] cursor-pointer">
            <Menu size={24} />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
