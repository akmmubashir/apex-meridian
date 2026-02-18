import React from "react";
import Container from "@/app/components/ui/Container";
import SubHeading from "@/app/components/SubHeading";
import Heading from "@/app/components/Heading";
import Paragraph from "@/app/components/Paragraph";
import Image from "next/image";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: "M&A Transaction Advisory",
      icon: "/assets/icons/m&a-transaction-advisory.svg",
      content:
        "Navigate complex deals with precision and maximize value creation.",
      list: [
        "Due diligence acceleration",
        "Synergy identification & capture",
        "Post-merger integration planning",
      ],
    },
    {
      id: 2,
      title: "Corporate Transformation",
      icon: "/assets/icons/corporate-transformation.svg",
      content:
        "Reimagine operations to unlock sustainable competitive advantage.",
      list: [
        "Operating model redesign",
        "Digital capability building",
        "Change management excellence",
      ],
    },
    {
      id: 3,
      title: "Growth Strategy",
      icon: "/assets/icons/growth-strategy.svg",
      content: "Identify and capture your next horizon of profitable growth.",
      list: [
        "Market entry strategy",
        "Portfolio optimization",
        "Revenue acceleration programs",
      ],
    },
  ];
  return (
    <div className="bg-[#F6F1E8]">
      <Container>
        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-4">
            <SubHeading className="text-center">Our Services</SubHeading>
            <Heading className="text-[46px] font-light text-center">
              Strategic Solutions for <br />
              Complex Challenges
            </Heading>
          </div>
          <div className="flex justify-center">
            <Paragraph className="text-center w-3/5">
              We offer a range of strategic advisory services tailored to the
              unique needs of private equity firms, corporate innovation teams,
              and growth-focused CEOs.
            </Paragraph>
          </div>
          <div className="grid grid-cols-12 gap-12.5">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-span-4 max-lg:col-span-full bg-[#FAFAFA] rounded-[30px] p-7.5 flex flex-col gap-5"
              >
                <div className="bg-[#C9AA5E] w-14 h-14 rounded-lg flex justify-center items-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    className="w-6 h-6 object-contain"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-[24px] text-[#0C271A]">
                    {service.title}
                  </h6>
                  <Paragraph className="">{service.content}</Paragraph>
                </div>
                <div className="bg-[#C9AA5E] w-12 h-px" />
                <div>
                  {service.list.map((item, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <div className="w-1.5 h-1.5 bg-[#76A783] rounded-full"></div>
                      <Paragraph size="medium" className="font-light">
                        {item}
                      </Paragraph>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceSection;
