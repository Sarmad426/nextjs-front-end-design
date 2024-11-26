import Image from "next/image";
import GeorgeTownUniIcon from "@/assets/georgetown-uni.svg";

import ProgramImg1 from "@/assets/program-img-1.webp";

export const HowProgramsWork = () => {
  const firstSectionButtons = [
    "Law for startups",
    "Finance for startups",
    "Economics for startups",
    "Lean startup principles",
    "Grow in the US",
  ];
  return (
    <section className="w-[95%] mx-auto my-12">
      <div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h3 className="text-xl leading-6 md:text-2xl">
            How the program works and what students learn
          </h3>
          <div className="h-[1px] w-full bg-[#BCD4C7] self-end mb-[16px] block">
            <div className="h-[1px] w-[250px] bg-[#193E2C]" />
          </div>
        </div>
        {/* First Section (Startup theory) */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 w-full mx-auto">
          <div className="my-3 flex flex-col justify-between h-full md:w-[95%] w-full p-3.5">
            <div>
              <span className="font-onest font-light text-lg leading-6 text-primaryColor my-3">
                September 21st - October 20th
              </span>
              <h3 className="font-onest text-2xl leading-7 md:font-light md:text-[32px] md:leading-8 my-3">
                Learn startup theory in Washington, D.C.
              </h3>
              <p className="font-light text-base md:hidden my-3">
                Explore evidence-based entrepreneurship, business models, design
                thinking, and leadership essentials.
              </p>
              <p className="font-light text-lg leading-6 hidden md:flex my-3">
                How to build a solid global business - theory, policy and
                conflict management.
              </p>
              <div className="flex items-center gap-6 my-3">
                <Image
                  src={GeorgeTownUniIcon}
                  alt="Georgetown"
                  className="h-7 w-[112px]"
                />
                <div>
                  <span className="text-[#E4602F] text-xs leading-[14px] w-[194px]">
                    Bloomberg MBA Ranking
                  </span>
                  <span className="leading-[24px] block">
                    <span className="font-semibold">#1</span> World&apos;s most
                    creative & <br className="md:hidden visible" /> innovative
                    graduates
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 my-5">
              <span className="hidden md:flex">Key skills learned:</span>
              <span className="md:hidden">Highlights</span>
              <div className="flex flex-wrap gap-4 justify-start w-full">
                {firstSectionButtons.map((label, i) => {
                  return (
                    <button
                      key={i}
                      className="p-1 bg-transparent text-sm font-extralight border hover:bg-black hover:text-white cursor-default"
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <Image src={ProgramImg1} alt="" className="md:mt-8 lg:h-[550px]" />
        </div>
      </div>
    </section>
  );
};
