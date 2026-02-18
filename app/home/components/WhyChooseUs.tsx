import React from "react";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/Heading";
import SubHeading from "@/app/components/SubHeading";
import Paragraph from "@/app/components/Paragraph";
import Image from "next/image";

const WhyChooseUs = () => {
  const whyChooseUsData = [
    {
      id: 1,
      title: "Elite Expertise",
      content:
        "Our team comprises former partners from top-tier firms and seasoned operating executives.",
      icon: "/assets/icons/elite-expertise.svg",
    },
    {
      id: 2,
      title: "Collaborative Partnership",
      content:
        "We work alongside your team,building lasting capabilities-not just delivering reports.",
      icon: "/assets/icons/collaborative-partnership.svg",
    },
    {
      id: 3,
      title: "Execution Focus",
      content:
        "Strategy is only as good as its implementation. We stay until results are realized.",
      icon: "/assets/icons/execution-focus.svg",
    },
    {
      id: 4,
      title: "Confidential & Discreet",
      content:
        "Trusted by boards and investors with the most sensitive strategic initiatives.",
      icon: "/assets/icons/confidential-discreet.svg",
    },
  ];

  return (
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url(/assets/common/why-choose-us.png), linear-gradient(to bottom, #0C271A 18%, #143828 35%, #2F5E4A 51%, #9EB8AA 77%, #F6F1E8 95%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="grid grid-cols-12 gap-25 items-center">
          <div className="col-span-6 max-lg:col-span-full flex flex-col gap-7.5">
            <div className="flex flex-col gap-5">
              <SubHeading darkmode>WHY APEX MERIDIAN</SubHeading>
              <Heading darkmode>
                The Strategic Partner <br /> Leaders Trust
              </Heading>
            </div>
            <Paragraph darkmode className="">
              For over a decade, we&apos;ve guided industry leaders through
              pivotal moments—from transformative acquisitions to
              market-defining growth initiatives.
            </Paragraph>
            <div className="w-fit p-[30px_50px] border border-white/50 rounded-[20px]">
              <p className="text-[#C9AA5E] text-[64px]">$ 2B+</p>
              <p className="text-[22px] text-[#9AA6AC]">
                in guided capital
                <br />
                initiatives
              </p>
            </div>
          </div>
          <div className="col-span-6 max-lg:col-span-full grid grid-cols-12 gap-5 h-fit">
            {whyChooseUsData.map((item) => (
              <div
                key={item.id}
                className="col-span-6 max-md:col-span-full bg-[#0C271A]/30 border border-white/50 rounded-[20px] p-7.5 flex flex-col h-fit gap-3"
              >
                <div className="bg-[#C9AA5F]/15 w-10 h-10 rounded-md flex flex-col justify-center items-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                    width={24}
                    height={24}
                  />
                </div>
                <h6 className="text-[20px] text-white">{item.title}</h6>
                <p className="text-[14px] text-[#F7F7F7]/70">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
