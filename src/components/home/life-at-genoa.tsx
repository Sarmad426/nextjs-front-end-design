import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import LifeAtGenoaImage from "@/assets/how-is-life-at-genoaes.webp";

export const LifeAtGenoa = () => {
  return (
    <section className="md:w-[95%] w-full xl:mx-auto">
      <div className="p-8 w-[95%]">
        <h4 className="text-start font-normal text-xl leading-6 md:text-2xl md:leading-8 text-primaryColor my-2">
          How is life at Genoa Entrepreneurship School?
        </h4>
        <hr className="border-[#BCD4C7]" />
        <hr className="border border-[#193E2C] lg:w-[250px] w-[220px] -mt-[.5px]" />
      </div>
      <div className="bg-[#FAF5E2] flex flex-col-reverse lg:flex-row h-fit lg:max-h-[640px]">
        <div className="flex flex-col p-[16px] xl:p-[40px] w-full xl:w-[50%] ">
          <h2 className="leading-[32px] md:leading-[48px] font-300 relative z-20 onest text-[#43AA13] text-[28px] md:text-[40px]">
            Learn and build with the best{" "}
            <span className="text-[#202020]">every day</span>
          </h2>
          <p className="onest text-[16px] xl:text-[18px] font-300 leading-[22px] xl:leading-[24px] mt-[24px]">
            Live, work, and grow in stimulating cities like New York,
            Washington, D.C., or San Francisco. You will explore iconic places
            such as Google&apos;s campus, Meta&apos;s skyscraper, and
            Tesla&apos;s factory.
          </p>
          <div className="lg:mt-48 flex items-center md:justify-end justify-end mt-10 mx-6">
            <button className="w-[296px] h-[48px] md:w-[420px] md:h-[52px] primary-btn flex items-center justify-center gap-2">
              <span className="flex md:hidden">Discover more</span>
              <span className="hidden md:flex">
                Discover how is life during the program
              </span>
              <ArrowRight className="w-4" />
            </button>
          </div>
        </div>
        <Image
          src={LifeAtGenoaImage}
          alt="Life at genoa"
          width="500"
          height="500"
          decoding="async"
          data-nimg="1"
          className="max-h-[500px] w-full xl:max-h-[640px] object-cover xl:w-[50%]"
          loading="lazy"
          style={{ color: "transparent" }}
        />
      </div>
    </section>
  );
};
