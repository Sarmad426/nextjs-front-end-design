import { ArrowDown, ArrowRight } from "lucide-react";
import React from "react";

import Linkedin from "@/assets/linkedin.svg";
import Image from "next/image";

import LiaDelic from "@/assets/lea-delic.webp";
// import Link from "next/link";

const OurStudents = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 my-4 mx-6">
      <div className="col-span-1 flex lg:flex-col justify-between">
        <h3 className="font-onest font-light text-[22px] leading-[26px] md:text-[32px] md:leading-10 lg:w-full md:w-[75%] w-[90%]">
          Understand the Experience Directly From our students
        </h3>
        <ArrowRight size={50} className="text-primaryColor hidden md:flex" />
        <ArrowDown size={35} className="text-primaryColor flex md:hidden" />
      </div>
      <div className="col-span-3 flex gap-4 overflow-x-scroll" dir="ltr">
        <div className="bg-[#E5EBDD] p-4 w-[300px] h-[600px] overflow-hidden">
          <p className="font-light text-xl leading-6 md:text-2xl">
            “I wasn&apos;t considering pursuing a master&apos;s degree but this
            course is practical and opens incredible doors. It certainly is the
            experience that has improved me the most in my life.”
          </p>
          <div className="mt-4">
            <Image src={Linkedin} alt="linkedin" />
            <h5 className="font-medium text-base leading-5 my-3">Lea Delic</h5>
            <p className="font-light text-sm md:text-lg leading-6">
              Student founder 2023
            </p>
          </div>
          <Image
            src={LiaDelic}
            alt="lia delic"
            className="md:w-[90%] w-[95%]"
          />
        </div>
        <div className="bg-[#E5EBDD] p-4 w-[300px] h-[600px] overflow-hidden">
          <p className="font-light text-xl leading-6 md:text-2xl">
            “I wasn&apos;t considering pursuing a master&apos;s degree but this
            course is practical and opens incredible doors. It certainly is the
            experience that has improved me the most in my life.”
          </p>
          <div className="mt-4">
            <Image src={Linkedin} alt="linkedin" />
            <h5 className="font-medium text-base leading-5 my-3">Lea Delic</h5>
            <p className="font-light text-sm md:text-lg leading-6">
              Student founder 2023
            </p>
          </div>
          <Image
            src={LiaDelic}
            alt="lia delic"
            className="md:w-[90%] w-[95%]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStudents;
