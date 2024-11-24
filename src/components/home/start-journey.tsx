import React from "react";
import Image from "next/image";
import Journey from "@/assets/journey.webp";
import { ArrowUpRight } from "lucide-react";

export const StartJourney = () => {
  return (
    <div className="mx-auto w-[95%] my-8">
      <div className="flex items-center flex-col lg:grid lg:grid-cols-2 mt-8 w-full xl:col-span-1 xl:justify-center">
        <div className="col-span-1 flex items-center justify-between">
          <Image
            src={Journey}
            alt="Image"
            className="min-w-full h-[300px] md:w-[720px] md:h-[400px] lg:h-[500px]"
          />
        </div>
        <div className="col-span-1 lg:flex lg:flex-col lg:justify-between h-full bg-[#193E2C] w-full p-6 md:max-w-[720px] lg:h-[500px]">
          <div className="lg:flex lg:flex-col md:flex">
            <h4 className="my-2 text-primaryColor font-onest font-normal text-lg leading-6 md:text-[32px] md:leading-10 lg:text-2xl">
              Ready to start your journey
            </h4>
            <p className="font-light text-2xl md:text-[32px] md:leading-10 text-[#FCFAF2] my-2">
              Genoa ES can help you achieve your academic, entrepreneurial, and
              career goals.
            </p>
          </div>
          <div className="lg:mt-12 mt-7">
            <div className="flex items-center md:justify-end justify-center">
              <button className="uppercase btn mt-4 flex items-center justify-center gap-3 bg-primaryColor hover:bg-hoverColor text-white text-lg py-2 w-[340px]">
                Discover our Program
                <ArrowUpRight className="w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
