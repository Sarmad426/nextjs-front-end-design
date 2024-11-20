import React from "react";

import Mission from "@/assets/mission.webp";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const OurNetwork = () => {
  return (
    <div className="md:w-[95%] w-full">
      <div className="p-8 w-[95%]">
        <h4 className="text-start font-normal text-xl leading-6 md:text-2xl md:leading-8 text-primaryColor my-2">
          Who is in our network?
        </h4>
        <hr className="border-[#BCD4C7]" />
        <hr className="border border-[#193E2C] lg:w-[250px] w-[220px] -mt-[.5px]" />
      </div>
      <div className="mx-6 flex items-center justify-center w-full relative">
        <Image src={Mission} alt="Our mission" className="hidden sm:flex" />
        <div className="absolute right-1 top-8 text-white w-[45%]">
          <h3 className="font-onest font-light lg:text-5xl lg:leading-[54px]">
            Joined by experts who{" "}
            <span className="text-primaryColor">raised</span> over{" "}
            <span className="text-primaryColor">$7.5 billion</span> and manage{" "}
            <span className="text-primaryColor">$100 billion</span> in assets
            combined
          </h3>
          <h5 className="font-light lg:text-2xl text-[#FCFAF2]">
            World experts dedicate their time to help our students grow.
          </h5>
          <div className="flex items-center md:justify-end justify-center mt-10 mx-6">
            <button className="md:w-[250px] md:h-[52px] w-[330px] h-[48px] btn bg-transparent border border-white hover:bg-white hover:text-black flex items-center justify-center gap-2">
              Discover the network
              <ArrowRight className="w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNetwork;
