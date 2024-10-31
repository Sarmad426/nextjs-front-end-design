import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[url(../../public/bg-img.svg)] bg-no-repeat bg-center bg-cover h-[1024px] w-full flex justify-center items-end pb-[180px]">
      <div className="text-center">
        <h2 className="lg:text-7xl md:text-5xl text-4xl text-center text-white uppercase">
          Launch your startup while learning masters degree
        </h2>
        <h4 className="text-2xl text-secondaryTextColor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          quasi!
        </h4>
        <div className="flex flex-wrap gap-8 my-4 items-center justify-center">
          <button className="btn hover:bg-[#f2f0dc] uppercase bg-white text-[16px] text-sm font-medium w-[255px] h-[52px]">
            Discover our Differences
          </button>
          <button className="btn flex items-center justify-center gap-x-[8px] uppercase bg-primaryColor hover:bg-hoverColor text-white md:text-[16px] text-sm font-medium md:w-[350px] w-[255px] h-[52px]">
            Learn more about our Program
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
