import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProgramSections } from "./program-sections";

export const HowProgramsWork = () => {
  return (
    <section className="w-[95%] mx-auto my-12">
      <div className="flex flex-col items-start justify-center gap-4">
        <h3 className="text-xl leading-6 md:text-2xl">
          How the program works and what students learn
        </h3>
        <div className="h-[1px] w-full bg-[#BCD4C7] self-end mb-[16px] block">
          <div className="h-[1px] w-[250px] bg-[#193E2C]" />
        </div>
      </div>
      <ProgramSections />
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-x-8 lg:place-items-center w-full my-12">
        <div className="flex flex-col justify-evenly lg:col-span-1 p-4 px-7 bg-[#E5EBDD] w-full min-w-[328px] min-h-[226px] md:min-h-[250px]">
          <div>
            <span className="font-onest text-sm md:text-lg md:leading-7 text-primaryColor">
              Have any question?
            </span>
            <h5 className="font-light text-xl leading-[26px] md:hidden">
              Our ambassadors & student’s are here to help you with any
              questions you may have
            </h5>
            <h5 className="hidden md:flex font-light text-[32px] leading-10">
              Our ambassadors are here to help you.
            </h5>
          </div>
          <div className="flex items-center justify-end">
            <button className="text-center border-2 border-black p-6 btn hover:bg-black hover:text-white">
              <span className="text-base uppercase tracking-wide">
                Schedule a call
              </span>
              <ArrowUpRight className="w-5 ml-1.5 md:inline hidden" />
              <ArrowRight className="w-5 ml-1.5 md:hidden inline" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-evenly lg:col-span-1 p-4 px-7 bg-[#BCD4C7] w-full min-w-[328px] min-h-[226px] md:min-h-[250px]">
          <div>
            <span className="font-onest text-sm md:text-lg md:leading-7 text-primaryColor">
              Looking for more information?{" "}
            </span>
            <h5 className="font-light text-xl leading-[26px] md:hidden">
              Learn more about our programs and opportunities.
            </h5>
            <h5 className="hidden md:flex font-light text-[32px] leading-10">
              Learn more if you are the right fit.{" "}
            </h5>
          </div>
          <div className="flex items-center justify-end">
            <button className="text-center border-2 border-black p-6 btn hover:bg-black hover:text-white">
              <span className="text-base uppercase tracking-wide md:hidden">
                Download Brochure{" "}
              </span>
              <span className="text-base uppercase tracking-wide hidden md:inline">
                Download Brochure No Email required{" "}
              </span>
              <ArrowUpRight className="w-5 ml-1.5 md:inline hidden" />
              <ArrowRight className="w-5 ml-1.5 md:hidden inline" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
