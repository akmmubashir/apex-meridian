import { Inria_Serif } from "next/font/google";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  darkmode?: boolean;
};

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: "300",
});

const Heading = (props: Props) => {
  const { children, className, darkmode } = props;
  return (
    <h2
      className={`text-[46px] font-light leading-tight ${inriaSerif.className} ${darkmode ? " text-white" : "text-[#0C271A]"} ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
