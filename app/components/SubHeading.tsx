import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  darkmode?: boolean;
};

const SubHeading = (props: Props) => {
  const { children, className, darkmode } = props;
  return (
    <h6
      className={`text-[14px] max-md:text-[12px] font-medium uppercase leading-tight ${darkmode ? " text-[#C9AA5E]" : "text-[#C9AA5E]"} ${className}`}
    >
      {children}
    </h6>
  );
};

export default SubHeading;
