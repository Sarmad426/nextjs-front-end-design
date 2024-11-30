import Image from "next/image";

import LinkedInIcon from "@/assets/linkedin.svg";
import Chalermchon from "@/assets/chalermchon.webp";

export const LifeChanging = () => {
  return (
    <div className="w-[95%] mx-auto my-28 mt-12 md:mt-20">
      <div className="flex flex-col items-start gap-[8px] w-full my-8">
        <h2 className="leading-[24px] md:leading-[32px] relative z-20 text-[#43AA13] text-[20px] md:text-[24px] lg:min-w-max">
          <span className="hidden md:flex">Life-changing for the students</span>
          <span className="md:hidden">
            Industry experts will guide you with personalised advice
          </span>
        </h2>
        <div className="h-[1px] w-full relative bg-[#BCD4C7]">
          <div className="absolute top-0 h-[1px] left-0 bg-[#193E2C] z-10 w-[200px]"></div>
        </div>
      </div>
      <div>
        <h2 className="font-onest font-light text-[22px] leading-[26px] md:text-[26px] lg:text-[32px] lg:leading-[40px] my-6">
          Hands on accelerated growth
        </h2>
        {/* Student cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full overflow-x-scroll scrollbar-hide">
          {/* Card */}
          <div className="flex flex-col lg:flex-row overflow-y-hidden gap-4 p-3 md:py-3 md:px-5 min-h-full lg:min-w-[1015px] bg-[#E5EBDD] text-[#193E2C] lg:h-[450px] md:w-3/4">
            <div className="h-full p-2 flex flex-col justify-between gap-2">
              <p className="font-light text-xl leading-6 md:text-2xl">
                “The other students are amazing people, and mentors are
                incredible. They are at a global level, but they take the time
                to be with you and are ready to support you 24/7.
              </p>
              <div className="flex flex-col md:flex-row-reverse gap-5 justify-between mt-16 md:mt-0">
                <Image
                  src={LinkedInIcon}
                  alt="Linkedin"
                  className="cursor-pointer"
                />
                <div>
                  <span className="font-medium text-base leading-5 block my-2 md:text-xl md:leading-7">
                    Chalermchon Puapolthep
                  </span>
                  <span className="font-light text-sm block mt-1.5">
                    Student founder 2023
                  </span>
                </div>
              </div>
            </div>
            <Image src={Chalermchon} alt="Chalermchon" />
          </div>
          <div className="flex flex-col lg:flex-row overflow-y-hidden gap-4 p-3 md:py-3 md:px-5 min-h-full lg:min-w-[1015px] bg-[#BCD4C7] text-[#193E2C] lg:h-[450px] md:w-3/4">
            <div className="h-full p-2 flex flex-col justify-between gap-2">
              <p className="font-light text-xl leading-6 md:text-2xl">
                “The other students are amazing people, and mentors are
                incredible. They are at a global level, but they take the time
                to be with you and are ready to support you 24/7.
              </p>
              <div className="flex flex-col md:flex-row-reverse gap-5 justify-between mt-16 md:mt-0">
                <Image
                  src={LinkedInIcon}
                  alt="Linkedin"
                  className="cursor-pointer"
                />
                <div>
                  <span className="font-medium text-base leading-5 block my-2 md:text-xl md:leading-7">
                    Chalermchon Puapolthep
                  </span>
                  <span className="font-light text-sm block mt-1.5">
                    Student founder 2023
                  </span>
                </div>
              </div>
            </div>
            <Image src={Chalermchon} alt="Chalermchon" />
          </div>
        </div>
      </div>
    </div>
  );
};
