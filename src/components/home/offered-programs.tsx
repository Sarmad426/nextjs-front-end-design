import React from "react";
import Image from "next/image";
import StudentsImage from "@/assets/students.png";
import MobileViewStudentImage from "@/assets/student.jpg";
import { ArrowUpRight } from "lucide-react";

export const OfferedPrograms = () => {
  return (
    <section className="mx-auto w-[95%]">
      <h3 className="text-primaryColor text-2xl my-2">What do we Offer?</h3>
      <hr className="border-[#BCD4C7]" />
      <hr className="border border-[#193E2C] lg:w-[350px] w-[270px] -mt-[.5px]" />

      <div className="lg:grid lg:grid-cols-2 md:flex items-center justify-center gap-0 md:flex-col lg:flex-row mt-8">
        <div className="flex items-center justify-between col-span-1">
          <Image
            src={StudentsImage}
            alt="Image"
            className="h-[480px] hidden sm:flex"
          />
          <Image
            src={MobileViewStudentImage}
            alt="Image"
            className="h-auto sm:hidden"
          />
        </div>
        <div className="bg-[#193E2C] w-full h-full p-4 col-span-1 max-h-[480px]">
          <div className="lg:flex lg:flex-col md:flex">
            <h3 className="text-[#43AA13] font-normal text-2xl leading-[24px] md:text-[32px] md:leading-[32px] lg:font-light lg:text-5xl lg:leading-[48px]">
              Master in International Business creation
            </h3>
            <div className="text-whiteTextColor mt-3 mx-3">
              <div className="justify-start md:flex md:flex-col lg:flex lg:flex-wrap text-start w-full gap-6 mx-6">
                <div className="flex gap-2">
                  <span className="font-light text-sm leading-[24px] lg:text-lg lg:leading-[24px] pr-0.5 text-[#FCFAF2]">
                    Duration:
                  </span>
                  <p className="font-normal text-base">8 Months</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-light text-sm leading-[24px] lg:text-lg lg:leading-[24px] pr-0.5">
                    Ideal stage:
                  </span>
                  <p className="font-normal text-base">
                    from No idea to pre seed
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-light text-sm leading-[24px] lg:text-lg lg:leading-[24px]">
                    Locations:
                  </span>
                  <p className="text-[16px] leading-[22px] font-normal lg:text-xl lg:leading-[26px] inline">
                    Washington DC, New York, San Francisco,Genoa
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-20 mt-7 text-white">
            <p>
              &quot; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ipsum in animi sint fugit vero molestias libero fugiat &quot;
            </p>
            <span className="text-gray-300 mt-7">Lorem, ipsum dolor.</span>

            <div className="flex items-center md:justify-end justify-center">
              <button className="btn mt-4 flex items-center justify-center gap-3 bg-primaryColor hover:bg-hoverColor font-semibold text-lg py-2 w-[340px]">
                Explore The Program
                <ArrowUpRight className="w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
