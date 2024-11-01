import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[url(../../public/bg-img.svg)] bg-no-repeat bg-center bg-cover h-[1024px] w-full flex justify-center items-end pb-[180px]">
      <div className="text-center max-w-[90%]">
        <h2 className="lg:text-[64px] leading-[64px] md:text-5xl text-4xl text-white uppercase font-onest">
          Launch your startup <br className="sm:flex hidden" /> while learning
          masters degree
        </h2>
        <h4 className="text-2xl leading-8 font-light text-[#FCFAF2] mt-2">
          Go from zero to fundraising with personalized guidance and strong
          network while obtaining a master&apos;s degree
        </h4>
        <div className="flex flex-wrap gap-8 my-4 items-center justify-center">
          <button className="btn hover:bg-[#f2f0dc] uppercase bg-white text-[16px] leading-6 font-medium w-[255px] h-[52px]">
            Discover our Differences
          </button>
          <button className="btn uppercase bg-primaryColor hover:bg-hoverColor text-white leading-6 text-[16px] font-medium md:w-[350px] w-[330px] h-[52px]">
            Learn more about our Program
            <ArrowRight className="w-4 h-4 inline-block pl-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
