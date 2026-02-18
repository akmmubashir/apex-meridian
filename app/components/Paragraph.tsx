import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  darkmode?: boolean;
  size?: "medium";
};

const Paragraph = (props: Props) => {
  const { children, className, darkmode, size } = props;
  return (
    <p
      className={`${size === "medium" ? "text-[16px] max-2xl:text-[14px] max-lg:text-[12px]" : "text-[18px] max-2xl:text-[16px] max-lg:text-[14px]"} ${darkmode ? " text-[#9AA6AC]" : "text-[#5C6970]"} ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
