import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import Image from "next/image";

// type Props = {}

const Footer = () => {
  const navigation = [
    { name: "Privacy Policy", href: "/" },
    { name: "Terms of Service", href: "/" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <div className="bg-[#0C271A]">
      <Container padding="bg-transparent p-[60px_80px] max-2xl:p-[20px_80px] max-lg:p-[20px_40px] max-md:p-[10px_20px]">
        <div className="flex items-center justify-between gap-5 w-full">
          <Link href="/">
            <Image
              src="/assets/common/logo.png"
              alt="logo"
              width={200}
              height={100}
            />
          </Link>
          <div className="flex items-center gap-9">
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
          <p className="text-[18px] text-white">
            @ Apex Meridian Consulting. All Rights Received
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
