import { ArrowDown, ArrowRight } from "lucide-react";
import React from "react";

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
      {/* Todo Student cards */}
      <div className="col-span-3">Student cards here</div>
    </div>
  );
};

export default OurStudents;
