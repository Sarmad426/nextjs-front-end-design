import Image from "next/image";
import GeorgeTownUniIcon from "@/assets/georgetown-uni.svg";
import UniGenovaIcon from "@/assets/genova.svg";

import ProgramImg1 from "@/assets/program-img-1.webp";
import ProgramImg2 from "@/assets/program-img-2.webp";
import ProgramImg3 from "@/assets/program-img-3.webp";
import ProgramImg4 from "@/assets/program-img-4.webp";
import ProgramImg5 from "@/assets/program-img-5.webp";

import { sponsors } from "@/data/data";

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
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 w-full mx-auto my-8">
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
        {/* Second section (Gain practical experience) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full mx-auto my-8">
          <Image src={ProgramImg2} alt="" className="md:mt-8 lg:h-[550px]" />
          <div className="my-3 flex flex-col justify-between h-full md:w-[95%] w-full p-3.5">
            <div>
              <span className="font-onest font-light text-lg leading-6 text-primaryColor my-3">
                October 21st - November 17th{" "}
              </span>
              <h3 className="font-onest text-2xl leading-7 md:font-light md:text-[32px] md:leading-8 my-3">
                Gain practical experience in New York{" "}
              </h3>
              <p className="font-light text-base md:hidden my-3">
                How to think and execute to succeed - mindset, risk management
                and speed.
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
            <div className="w-full">
              <div className="my-5">
                <span className="font-light text-xs block my-3.5">
                  HQ visits or mentors with experience in:
                </span>
                <div className="flex justify-start lg:gap-x-10 gap-x-[26px] flex-wrap gap-y-5 w-full">
                  {sponsors.map((sponsor, index) => (
                    <Image
                      src={sponsor}
                      alt={`Sponsor ${index}`}
                      key={index}
                      className="h-[17px] max-w-[65px]"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="hidden md:flex font-light text-xs my-1.5">
                  Key skills learned:
                </span>
                <span className="md:hidden font-light text-xs block my-1.5">
                  Highlights
                </span>
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
          </div>
        </div>
        {/* Third Section (Network with the best) */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 w-full mx-auto my-8">
          <div className="my-3 flex flex-col justify-between h-full md:w-[95%] w-full p-3.5">
            <div>
              <span className="font-onest font-light text-lg leading-6 text-primaryColor my-3">
                13th November - 13th December{" "}
              </span>
              <h3 className="font-onest text-2xl leading-7 md:font-light md:text-[32px] md:leading-8 my-3">
                Network with the best in San Francisco
              </h3>
              <p className="font-light text-base md:hidden my-3">
                Connect with industry leaders and influencers in Silicon
                Valley&apos;s vibrant tech scene.
              </p>
              <p className="font-light text-lg leading-6 hidden md:flex my-3">
                How to build a solid global business - theory, policy and
                conflict management.
              </p>
            </div>
            <div className="flex flex-col gap-4 my-5">
              <span className="hidden md:flex font-extralight text-xs">
                Key skills learned:
              </span>
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
          <Image src={ProgramImg3} alt="" className="md:mt-8 lg:h-[550px]" />
        </div>
        {/* Fourth section (Build and grow startup) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full mx-auto my-8">
          <Image src={ProgramImg4} alt="" className="md:mt-8 lg:h-[550px]" />
          <div className="my-3 flex flex-col justify-between h-full md:w-[95%] w-full p-3.5">
            <div>
              <span className="font-onest font-light text-lg leading-6 text-primaryColor my-3">
                13th October - 13th November
              </span>
              <h3 className="font-onest text-2xl leading-7 md:font-light md:text-[32px] md:leading-8 my-3">
                Build & grow your startup in Genoa
              </h3>
              <p className="font-light text-base md:hidden my-3">
                How to obtain the first customers - engineering, communication,
                and analysis.
              </p>
              <p className="font-light text-lg leading-6 hidden md:flex my-3">
                How to build a solid global business - theory, policy and
                conflict management.
              </p>
              <div className="flex items-center gap-6 my-3">
                <Image
                  src={UniGenovaIcon}
                  alt="Genova"
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
            <div className="w-full">
              <div className="my-5">
                <span className="font-light text-xs block my-3.5">
                  HQ visits or mentors with experience in:
                </span>
                <div className="flex justify-start lg:gap-x-10 gap-x-[26px] flex-wrap gap-y-5 w-full">
                  {sponsors.map((sponsor, index) => (
                    <Image
                      src={sponsor}
                      alt={`Sponsor ${index}`}
                      key={index}
                      className="h-[17px] max-w-[65px]"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="hidden md:flex font-light text-xs my-1.5">
                  Key skills learned:
                </span>
                <span className="md:hidden font-light text-xs block my-1.5">
                  Highlights
                </span>
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
          </div>
        </div>
        {/* Fifth Section (Graduate in Genoa) */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 w-full mx-auto my-8">
          <div className="my-3 flex flex-col justify-between h-full md:w-[95%] w-full p-3.5">
            <div>
              <span className="font-onest font-light text-lg leading-6 text-primaryColor my-3">
                May 30th
              </span>
              <h3 className="font-onest text-2xl leading-7 md:font-light md:text-[32px] md:leading-8 my-3">
                Pitch and graduate in Genoa
              </h3>
              <p className="font-light text-base md:hidden my-3">
                Have the chance to raise in front of +100 investors while
                obtaining a Master’s.
              </p>
              <p className="font-light text-lg leading-6 hidden md:flex my-3">
                How to build a solid global business - theory, policy and
                conflict management.
              </p>
            </div>
            <div className="flex flex-col gap-4 my-5">
              <div className="flex justify-start lg:gap-x-10 gap-x-[26px] flex-wrap gap-y-5 w-full">
                {sponsors.map((sponsor, index) => (
                  <Image
                    src={sponsor}
                    alt={`Sponsor ${index}`}
                    key={index}
                    className="h-[17px] max-w-[65px]"
                  />
                ))}
              </div>
              <span className="hidden md:flex font-extralight text-xs">
                Key skills learned:
              </span>
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
          <Image src={ProgramImg5} alt="" className="md:mt-8 lg:h-[550px]" />
        </div>
      </div>
    </section>
  );
};
