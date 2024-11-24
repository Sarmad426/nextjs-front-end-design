import GoogleIcon from "@/assets/google.svg";
import AppleIcon from "@/assets/apple.svg";
import MetaIcon from "@/assets/meta.svg";
import TeslaIcon from "@/assets/tesla.svg";
import MicrosoftIcon from "@/assets/microsoft.svg";
import SequoiaIcon from "@/assets/sequoia.svg";
import IbmIcon from "@/assets/ibm.svg";
import GrammarlyIcon from "@/assets/grammarly.svg";
import SkypeIcon from "@/assets/skype.svg";
import Skyscanner from "@/assets/skyscanner.svg";
import PinterestIcon from "@/assets/pinterest.svg";
import TalisIcon from "@/assets/talis.svg";
import YounitedIcon from "@/assets/younited.svg";
import Image from "next/image";

import GrammarlyLightIcon from "@/assets/grammarly-light.svg";
import GoogleLightIcon from "@/assets/google-light.svg";
import SequoiaLightIcon from "@/assets/sequoia-light.svg";
import RipplingIcon from "@/assets/rippling.svg";
import YounitedLightIcon from "@/assets/younited-light.svg";

import T1 from "@/assets/t1.webp";
import T2 from "@/assets/t2.webp";
import T3 from "@/assets/t3.webp";
import T4 from "@/assets/t4.webp";
import T5 from "@/assets/t5.webp";

export const IndustryExperts = () => {
  const icons = [
    GoogleIcon,
    AppleIcon,
    MetaIcon,
    TeslaIcon,
    MicrosoftIcon,
    SequoiaIcon,
    IbmIcon,
    GrammarlyIcon,
    SkypeIcon,
    Skyscanner,
    PinterestIcon,
    TalisIcon,
    YounitedIcon,
  ];

  const experts = [
    {
      img: T1,
      orgIcon: GrammarlyLightIcon,
      name: "Bei Zhang",
      intro: "Head of Marketing Analytics at Grammarly ($13 bln valuation)",
    },
    {
      img: T2,
      orgIcon: GoogleLightIcon,
      name: "Alessandro Cannas",
      intro: "Product Manager at Gemini (Google) (1.65 trillion valuation)",
    },
    {
      img: T3,
      orgIcon: SequoiaLightIcon,
      name: "Douglas Leone",
      intro: "Global Managing Partner at Sequoia ($88 bln under m.)",
    },
    {
      img: T4,
      orgIcon: RipplingIcon,
      name: "Prasanna Sankar",
      intro: "Co-Founder at Rippling.com ($11.3 bln valuation)",
    },
    {
      img: T5,
      orgIcon: YounitedLightIcon,
      name: "Francois de Bodinat",
      intro: "Chief Product Officer at Younited ($1.3 bln valuation)",
    },
  ];

  return (
    <section className="mx-auto w-full md:w-[95%] my-12 py-2.5">
      <div className="my-2 inline-flex items-center justify-around md:gap-12 gap-6">
        <h3 className="font-light text-[32px] leading-10 md:text-[40px] md:leading-10">
          Backed by industry leaders
        </h3>
        <p className="text-lg leading-5 md:font-light md:text-[24px] md:leading-8">
          Mentors believing in our philosophy, solution and students
        </p>
      </div>
      {/* Industry leaders */}
      <div className="w-full mx-auto">
        <div className="my-8 grid grid-cols-3 md:flex md:flex-wrap md:justify-between items-center gap-x-10 gap-y-6 md:gap-x-16 md:gap-y-8 mx-6 w-full md:mx-auto">
          {icons.map((icon, i) => {
            return (
              <Image
                src={icon}
                alt="Ally icon"
                key={i}
                className={`${i == icons.length - 1 && "hidden md:flex"}`}
              />
            );
          })}
        </div>
      </div>
      {/* Industry experts */}
      <div className="flex items-center gap-6 overflow-scroll scrollbar-hide flex-shrink-0">
        {experts.map((expert, i) => (
          <div key={i} className="relative overflow-hidden min-w-[325px]">
            <Image
              src={expert.img}
              alt={expert.name}
              className="w-[340px] h-[325px]"
            />
            <div className="absolute bottom-3 left-1.5 flex flex-col gap-y-1.5 min-w-full">
              <Image src={expert.orgIcon} alt="" />
              <hr className="w-[90%]" />
              <h5 className="font-medium text-[28px] leading-8 text-[#F5F5F5]">
                {expert.name}
              </h5>
              <p className="text-lg leading-6 text-[#F5F5F5]">{expert.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
