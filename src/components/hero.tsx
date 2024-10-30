import React from "react";
import Navbar from "./navbar";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="bg-img w-screen h-[125vh] bg-no-repeat bg-center bg-cover p-6">
        <header>
          <Navbar />
        </header>
        <section className="flex flex-col items-center justify-end text-center lg:mt-[440px]">
          <div>
            <h2 className="text-7xl text-center text-white uppercase">
              Launch your startup while learning masters degree
            </h2>
            <h4 className="text-2xl text-secondaryTextColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              distinctio?
            </h4>
          </div>
          <div className="flex gap-8 my-4">
            {/* <Button label="Discover our difference" color="white" /> */}
            <button className="uppercase bg-white text-[16px] leading-[24px] font-semibold w-[255px] h-[52px]">
              Discover our Differences
            </button>
            <button className="flex items-center justify-center gap-x-[8px] uppercase bg-primaryColor text-white text-[16px] leading-[24px] font-semibold w-[350px] h-[52px]">
              Learn more about our Program
              <ArrowRight size={24} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
