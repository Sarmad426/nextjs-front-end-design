"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      data-aos="fade-up"
      className="bg-[url(../../public/bg-img.svg)] bg-no-repeat bg-center bg-cover h-[1024px] w-full flex justify-center items-end pb-[180px]"
    >
      <div className="text-center max-w-[90%]">
        <h2 className="text-[#FCFAF2] uppercase font-onest font-medium text-[28px] leading-7 text-center md:text-[56px] md:leading-[56px] lg:text-[64px] lg:leading-[64px]">
          Launch your startup <br /> while learning masters degree
        </h2>
        <h4 className="text-2xl leading-8 font-light text-[#FCFAF2] mt-2">
          Go from zero to fundraising with personalized guidance and strong
          network while obtaining a master&apos;s degree
        </h4>
        <div className="flex flex-wrap gap-8 my-4 items-center justify-center">
          <button className="btn hover:bg-[#f2f0dc] uppercase bg-white text-[16px] leading-6 font-medium md:w-[275px] w-[330px] h-[52px]">
            Discover our Differences
          </button>
          <button className="flex items-center justify-center btn uppercase bg-primaryColor hover:bg-hoverColor text-white leading-6 text-[16px] font-medium md:w-[350px] w-[330px] h-[52px]">
            <span className="hidden md:flex">Learn more about our Program</span>
            <span className="flex md:hidden">more about our Program</span>
            <ArrowRight className="w-10 inline-block pl-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
