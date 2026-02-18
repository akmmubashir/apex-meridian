import React from "react";

type Props = {
  children: React.ReactNode;
  padding?: string;
  className?: string;
};
const Container = ({ children, padding, className }: Props) => {
  return (
    <div
      className={`${padding ? padding : "p-[100px_80px] max-2xl:p-[80px_80px] max-lg:p-[60px_40px] max-md:p-[40px_20px]"} w-full h-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
