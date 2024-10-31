import React from "react";
import Separator from "./custom/separator";
import Image from "next/image";
import StudentsImage from "@/assets/students.png";
import { ArrowUpRight } from "lucide-react";

const OfferedPrograms = () => {
  return (
    <div className="mx-auto w-[95%]">
      <h3 className="text-primaryColor text-2xl my-2">What do we Offer?</h3>
      <Separator />
      <div className="lg:grid lg:grid-cols-2 md:flex items-center justify-center gap-0 md:flex-col lg:flex-row mt-8">
        <div className="flex items-center justify-between col-span-1">
          <Image src={StudentsImage} alt="Image" className="h-[480px]" />
        </div>
        <div className="bg-[#193E2C] w-full h-full p-4 col-span-1 max-h-[480px]">
          <div className="lg:flex lg:flex-col md:flex">
            <h3 className="text-[#43AA13] lg:text-5xl md:text-4xl text-3xl">
              Master in International Business creation
            </h3>
            <div className="text-white m-6">
              <div className="lg:flex w-full gap-6 mx-6">
                <div>
                  <span className="font-light text-gray-300">Duration:</span>
                  <p className="font-semibold inline">8 Months</p>
                </div>
                <div>
                  <span className="font-light text-gray-300">Ideal stage:</span>
                  <p className="font-semibold inline">
                    from No idea to pre seed
                  </p>
                </div>
              </div>
              <div className="my-4 mx-6">
                <span className="font-light inline text-gray-300">
                  Locations:
                </span>
                <p className="font-semibold inline">
                  Washington DC, New York, San Francisco,Genoa
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mt-20 text-white">
            <p>
              &quot; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ipsum in animi sint fugit vero molestias libero fugiat quisquam,
              odit voluptate eum incidunt nihil sit expedita! &quot;
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
    </div>
  );
};

export default OfferedPrograms;
