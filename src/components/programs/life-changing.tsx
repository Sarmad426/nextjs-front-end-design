import Image from "next/image";

import LinkedInIcon from "@/assets/linkedin.svg";
import Chalermchon from "@/assets/chalermchon.webp";
import LeaDelic from "@/assets/lea-delic.webp";
import GabrielRossi from "@/assets/gabriele-rossi.webp";

import ProgramImg from "@/assets/program-img-9.webp";
import { ArrowRight } from "lucide-react";

export const LifeChanging = () => {
  return (
    <section className="w-[95%] mx-auto my-28 mt-12 md:mt-20">
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
          {/* Card 1 */}
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
          {/* Card 2 */}
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
                    Lea Delic
                  </span>
                  <span className="font-light text-sm block mt-1.5">
                    Student founder 2023
                  </span>
                </div>
              </div>
            </div>
            <Image src={LeaDelic} alt="Chalermchon" />
          </div>
          {/* Card 3 */}
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
                    Gabriel Rossi
                  </span>
                  <span className="font-light text-sm block mt-1.5">
                    Student founder 2023
                  </span>
                </div>
              </div>
            </div>
            <Image src={GabrielRossi} alt="Chalermchon" />
          </div>
        </div>
      </div>
      <div className="my-8 xl:flex xl:items-center xl:justify-between xl:gap-5">
        <Image
          src={ProgramImg}
          alt="Life changing for the students"
          className="xl:w-[785px] lg:w-4/6 w-full"
        />
        <div className="p-2 w-full">
          <h4 className="font-onest font-light text-2xl leading-6 my-3 md:text-[40px] md:leading-[48px]">
            Explore life at Genoa ES
          </h4>
          <p className="font-light text-sm my-3.5 md:text-lg md:leading-6">
            You&apos;ll live in vibrant cities like New York or Silicon Valley,
            explore places like the Google campus, and immerse yourself in a
            community of top experts and talent daily. After graduating,
            you&apos;ll have not only a strong network but also unforgettable
            memories.
          </p>
          <div className="w-full flex items-center justify-center lg:justify-end xl:mt-10 mt-5">
            <button className="primary-btn p-3 flex items-center justify-center xl:w-[295px] xl:h-[52px]">
              <span>See how life is at Genoaes</span>
              <ArrowRight className="ml-2 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
