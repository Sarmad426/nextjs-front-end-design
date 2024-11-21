import { ArrowDown, ArrowRight } from "lucide-react";
import React from "react";

import Linkedin from "@/assets/linkedin.svg";
import Image from "next/image";

import LiaDelic from "@/assets/lea-delic.webp";
import Chalermchon from "@/assets/chalermchon.webp";
import GabrielRossi from "@/assets/gabriele-rossi.webp";

const OurStudents = () => {
  return (
    <div className="flex flex-col lg:grid grid-cols-4 gap-4 my-12 md:mx-6 mx-1.5">
      <div className="col-span-1 flex lg:flex-col lg:justify-start lg:gap-5 justify-between w-full">
        <h3 className="uppercase font-onest font-light text-[22px] leading-[26px] md:text-[32px] md:leading-10 lg:w-5/6 md:w-[75%] w-[90%]">
          Understand the Experience Directly From our students
        </h3>
        <ArrowRight size={50} className="text-primaryColor hidden md:flex" />
        <ArrowDown size={35} className="text-primaryColor flex md:hidden" />
      </div>
      <div className="col-span-3 flex gap-2.5 overflow-x-scroll w-full">
        <div className="bg-[#E5EBDD] p-4 min-w-[300px] min-h-[600px] md:h-[640px] md:min-w-[436px] overflow-hidden">
          <p className="font-light text-xl leading-6 md:text-2xl">
            “I wasn&apos;t considering pursuing a master&apos;s degree but this
            course is practical and opens incredible doors. It certainly is the
            experience that has improved me the most in my life.”
          </p>
          <div className="mt-12 mb-2">
            <Image src={Linkedin} alt="linkedin" />
            <h5 className="font-medium text-base leading-5 my-3">Lea Delic</h5>
            <p className="font-light text-sm md:text-lg leading-6">
              Student founder 2023
            </p>
          </div>
          <Image
            src={LiaDelic}
            alt="lia delic"
            className="h-[250px] lg:h-[229px] xl:h-[450px] w-full object-cover object-top"
          />
        </div>
        <div className="bg-[#BCD4C7] p-4 min-w-[300px] min-h-[600px] md:h-[640px] md:min-w-[436px] overflow-hidden">
          <p className="font-light text-xl leading-6 md:text-2xl">
            “The other students are amazing people, and mentors are incredible.
            They are at a global level, but they take the time to be with you
            and are ready to support you 24/7.”
          </p>
          <div className="mt-12 mb-2">
            <Image src={Linkedin} alt="linkedin" />
            <h5 className="font-medium text-base leading-5 my-3">
              Chalermchon Puapolthep
            </h5>
            <p className="font-light text-sm md:text-lg leading-6">
              Student founder 2023
            </p>
          </div>
          <Image
            src={Chalermchon}
            alt="Chalermchon"
            className="h-[250px] lg:h-[229px] xl:h-[450px] w-full object-cover object-top"
          />
        </div>
        <div className="bg-[#E5EBDD] p-4 min-w-[300px] min-h-[600px] md:h-[640px] md:min-w-[436px] overflow-hidden">
          <p className="font-light text-xl leading-6 md:text-2xl">
            “The other students are amazing people, and mentors are incredible.
            They are at a global level, but they take the time to be with you
            and are ready to support you 24/7.”
          </p>
          <div className="mt-12 mb-2">
            <Image src={Linkedin} alt="linkedin" />
            <h5 className="font-medium text-base leading-5 my-3">
              Chalermchon Puapolthep
            </h5>
            <p className="font-light text-sm md:text-lg leading-6">
              Student founder 2023
            </p>
          </div>
          <Image
            src={GabrielRossi}
            alt="Gabriel"
            className="h-[250px] lg:h-[229px] xl:h-[450px] w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStudents;
