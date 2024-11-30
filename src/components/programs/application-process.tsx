import {
  applicationProcessCards1,
  applicationProcessCards2,
} from "@/data/data";
import { ArrowRight } from "lucide-react";

export const ApplicationProcess = () => {
  return (
    <section className="w-[95%] mx-auto my-28 mt-12 md:mt-20">
      <div className="flex flex-col items-start gap-[8px] w-full my-8">
        <h2 className="leading-[24px] md:leading-[32px] relative z-20 text-[#43AA13] text-[20px] md:text-[24px] lg:min-w-max">
          Application process
        </h2>
        <div className="h-[1px] w-full relative bg-[#BCD4C7]">
          <div className="absolute top-0 h-[1px] left-0 bg-[#193E2C] z-10 w-[200px] lg:w-[260px]"></div>
        </div>
      </div>
      <div className="my-7 lg:w-1/2 p-2">
        <p className="font-light text-base md:text-xl lg:text-2xl">
          We work in calendar month batches, and we announce the selected
          students at the end of each month. From application to end the process
          takes about three weeks.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3 my-3.5">
          {applicationProcessCards1.map((card, index) => {
            return (
              <div key={index} className="border-t border-gray-200 py-4 px-1">
                <span className="flex items-center w-full justify-between font-light text-xl leading-5 md:text-2xl font-onest">
                  <span>0{index + 1}</span>
                  <ArrowRight className="w-4 text-primaryColor" />
                </span>
                <h4 className="font-onest font-light text-base my-3 md:text-lg md:leading-6">
                  {card.title}
                </h4>
                <p className="font-light text-sm leading-[18px] my-3.5">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 my-3.5">
          {applicationProcessCards2.map((card, index) => {
            return (
              <div key={index} className="border-t border-gray-200 py-4 px-1">
                <span className="flex items-center w-full justify-between font-light text-xl leading-5 md:text-2xl font-onest">
                  <span>0{index + 4}</span>
                  <ArrowRight className="w-4 text-primaryColor" />
                </span>
                <h4 className="font-onest font-light text-base my-3 md:text-lg md:leading-6">
                  {card.title}
                </h4>
                <p className="font-light text-sm leading-[18px] my-3.5">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
