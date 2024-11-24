"use client";

import Image from "next/image";
import React from "react";
import GoogleIcon from "@/assets/google.svg";
import MetaIcon from "@/assets/meta.svg";
import SequoiaIcon from "@/assets/sequoia.svg";
import MicrosoftIcon from "@/assets/microsoft.svg";
import AppleIcon from "@/assets/apple.svg";
import TeslaIcon from "@/assets/tesla.svg";
import { ArrowRight } from "lucide-react";

import GeorgeTownUniIcon from "@/assets/georgetown-uni.svg";
import GenovaIcon from "@/assets/genova.svg";

const sponsors = [
  SequoiaIcon,
  AppleIcon,
  MicrosoftIcon,
  MetaIcon,
  GoogleIcon,
  TeslaIcon,
];

export const Sponsors = () => {
  return (
    <section
      data-aos="fade-right"
      className="-mt-24 mx-auto md:w-[95%] w-full bg-[#FCFAF2] -rotate-[.5deg]"
    >
      <div className="w-full flex flex-col items-center ">
        <div className="flex flex-col w-[95%] p-8 bg-[#FCFAF2]">
          <div className="flex lg:flex-row md:flex-wrap flex-col gap-6 items-center justify-between text-center w-full">
            <div className="text-primaryTextColor">
              <h3 className="lg:text-[90px] text-[56px] lg:leading-[88px] leading-[56px] font-onest sm:font-light font-[400]">
                $320K
              </h3>
              <p className="font-light text-lg leading-6 text-center md:font-[400] md:text-base md:leading-5 lg:text-lg lg:leading-6">
                average raised by our students
              </p>
            </div>
            <div>
              <h3 className="lg:text-[90px] text-[56px] lg:leading-[88px] leading-[56px] font-onest sm:font-light font-[400]">
                75%
              </h3>
              <p className="font-light text-lg leading-6 text-center md:font-[400] md:text-base md:leading-5 lg:text-lg lg:leading-6">
                of our students closing funds round
              </p>
            </div>
            <div className="text-primaryTextColor">
              <h3 className="lg:text-[90px] text-[56px] lg:leading-[88px] leading-[56px] font-onest sm:font-light font-[400]">
                9.8/10
              </h3>
              <p className="font-light text-lg leading-6 text-center md:font-[400] md:text-base md:leading-5 lg:text-lg lg:leading-6">
                students are likely to recommend us
              </p>
            </div>
          </div>
          <div className="w-full">
            <h4 className="font-[400] text-2xl leading-8 text-primaryColor md:text-lg md:leading-6 lg:text-2xl mt-6 mb-2.5">
              Joined by experts with experience in:
            </h4>
            <div className="flex justify-start lg:justify-end lg:gap-x-10 gap-x-[26px] flex-wrap gap-y-5">
              {sponsors.map((sponsor, index) => (
                <Image src={sponsor} alt={`Sponsor ${index}`} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 mx-auto w-[95%] bg-[#FCFAF2]">
        <h4 className="text-start font-[400] text-xl leading-6 md:text-2xl md:leading-8 text-primaryColor my-2">
          What is Genoa Entrepreneurship school?
        </h4>
        <hr className="border-[#BCD4C7]" />
        <hr className="border border-[#193E2C] lg:w-[250px] w-[220px] -mt-[.5px]" />
        <div>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-12 my-6">
            <h3 className="font-onest uppercase font-light text-[28px] leading-7 md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[56px] col-span-2">
              bridging the startups and academia
            </h3>
            <p className="text-primaryTextColor col-span-3 font-light text-base md:text-[20px] md:leading-[28px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique maxime blanditiis inventore! Optio a eum maiores autem
              omnis dolores aperiam recusandae, eligendi culpa voluptatem
              deserunt et delectus quidem magnam, perspiciatis est. Animi eum
              at, distinctio in officia magni nemo expedita eius itaque
              necessitatibus totam, exercitationem repellat et obcaecati? Id, a!
            </p>
          </div>
          <div>
            <h4 className="text-primaryTextColor text-base ">
              Academia Partners
            </h4>
            <div className="flex items-center justify-start  flex-wrap mt-3 w-full">
              <div>
                <Image
                  src={GeorgeTownUniIcon}
                  alt="Georgetown"
                  className="h-7 w-[112px]"
                />
              </div>
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
              <div>
                <Image src={GenovaIcon} alt="Georgetown" className="h-7" />
              </div>
              <div>
                <span className="text-[#E4602F] block text-xs">
                  Cenis ranking of italian universities
                </span>
                <span className="text-sm">
                  <span className="font-bold">#1</span> Engineering in Italy
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center md:justify-end justify-center mt-10">
            <button className="md:w-[250px] md:h-[52px] w-[330px] h-[48px] btn bg-transparent border-2 border-black hover:bg-black hover:text-white flex items-center justify-center gap-2">
              Read more about us
              <ArrowRight className="w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
