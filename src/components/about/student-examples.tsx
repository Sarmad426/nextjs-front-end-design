import Image from "next/image";

import Students from "@/assets/students.png";

export const StudentExamples = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:w-[95%] lg:mx-auto w-full lg:-mt-20 bg-[#FAF5E2] z-[9999]">
      <Image src={Students} alt="students" className="" />
      <div className="p-3.5 lg:my-7 my-2.5">
        <h3 className="font-medium text-[32px] leading-10 lg:font-normal lg:text-[48px] lg:leading-[48px]">
          <span className="text-primaryColor">Launch while studying</span> like
          Mark Zuckerberg, Bill Gates, or Elon Musk but{" "}
          <span className="text-primaryColor">with time and support.</span>
        </h3>
        <p className="text-lg leading-6 lg:font-light mt-2">
          The University of Genoa partners with Georgetown University&apos;s
          McDonough School of Business, merging innovative education and
          catalytic innovation for visionary explorers.
        </p>
      </div>
    </div>
  );
};
