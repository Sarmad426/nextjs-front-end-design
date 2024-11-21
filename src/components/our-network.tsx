import React from "react";

import Mission from "@/assets/mission.webp";
import MissionMobile from "@/assets/mission-mobile.webp";
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
        <Image src={Mission} alt="Our mission" className="hidden lg:flex" />
        <Image
          src={MissionMobile}
          alt="Our mission"
          // className="sm:hidden flex"
          width="8000"
          height="8000"
          decoding="async"
          data-nimg="1"
          className="mt-[24px] lg:hidden flex md:max-h-[800px] object-cover object-bottom"
          loading="lazy"
          style={{ color: "transparent" }}
        />

        <div className="absolute right-1 top-8 text-white lg:w-[45%] w-full p-3.5">
          <h3 className="font-onest font-light text-[32px] leading-[32px] md:text-[40px] md:leading-[48px] lg:text-5xl lg:leading-[54px]">
            Joined by experts who{" "}
            <span className="text-primaryColor">raised</span> over{" "}
            <span className="text-primaryColor">$7.5 billion</span> and manage{" "}
            <span className="text-primaryColor">$100 billion</span> in assets
            combined
          </h3>
          <h5 className="font-light text-xl leading-[26px] md:text-2xl text-[#FCFAF2] my-3">
            World experts dedicate their time to help our students grow.
          </h5>
          <div className="flex items-center md:justify-end justify-end mt-10 mx-6">
            <button className="w-[237px] h-[48px] md:w-[269px] md:h-[52px] btn bg-transparent border border-white hover:bg-white hover:text-black flex items-center justify-center gap-2">
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
