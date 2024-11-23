import React from "react";

export const Statistics = () => {
  return (
    <div className="w-[95%] mx-auto my-12">
      <div>
        <div className="flex flex-col items-start justify-center md:flex-row gap-4 md:justify-between">
          <h3 className="font-light text-[32px] leading-10 md:text-[40px] md:leading-[56px]">
            Statistics
          </h3>
          <div className="h-[1px] w-full bg-[#BCD4C7] self-end mb-[16px]">
            <div className="h-[1px] w-[170px] bg-[#193E2C]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mt-[40px]">
          <div className="border border-[#E5EBDD] flex justify-center items-center flex-col p-6 text-center gap-2">
            <h2 className="text-[65px] leading-[72px] font-[400]">20%</h2>
            <p className="text-[20px] leading-[28px] font-[300]">
              of world&apos;s top 500 founders launched while studying
            </p>
          </div>
          <div className="border border-[#E5EBDD] flex justify-center items-center flex-col p-6 text-center gap-2">
            <h2 className="text-[65px] leading-[72px] font-[400]">93%</h2>
            <p className="text-[20px] leading-[28px] font-[300]">
              Georgetown MiM students received a job offer, Class 2022
            </p>
          </div>
          <div className="border border-[#E5EBDD] flex justify-center items-center flex-col p-6 text-center gap-2">
            <h2 className="text-[65px] leading-[72px] font-[400]">75%</h2>
            <p className="text-[20px] leading-[28px] font-[300]">
              of our students raised funding
            </p>
          </div>
          <div className="border border-[#E5EBDD] flex justify-center items-center flex-col p-6 text-center gap-2">
            <h2 className="text-[65px] leading-[72px] font-[400]">$7.5 B</h2>
            <p className="text-[20px] leading-[28px] font-[300]">
              raised by the founders mentoring at Genoa ES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
