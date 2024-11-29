import { ArrowRight } from "lucide-react";
import Instructors from "@/assets/program-img-6.webp";
import InstructorsMobile from "@/assets/program-img-6-mobile.webp";
import Image from "next/image";

export const StudentGuides = () => {
  return (
    <div className="w-[95%] mx-auto my-12 mt-8 md:mt-10">
      <div>
        <div className="flex flex-col items-start gap-[8px] w-full my-8">
          <h2 className="leading-[24px] md:leading-[32px] relative z-20 font-onest text-[#43AA13] text-[20px] md:text-[24px] lg:min-w-max">
            Who is personally guiding the students?
          </h2>
          <div className="h-[1px] w-full relative bg-[#BCD4C7]">
            <div className="absolute top-0 h-[1px] left-0 bg-[#193E2C] z-10 w-[200px]"></div>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:place-items-center gap-8 my-8">
          <div className="w-full h-full flex flex-col items-center justify-between">
            <div>
              <h3 className="font-onest font-light text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px]">
                Personalized guidance from +100 start up experts for life, even
                if you don’t launch.
              </h3>
              <p className="font-light text-base md:text-lg md:leading-6">
                Our students always find someone who is an expert in their
                industry, field, and stage, available to clarify their doubts in
                a 1:1 meeting or make an intro whenever is needed.
              </p>
            </div>
            <div className="flex items-end justify-end w-full mt-5">
              <button className="btn bg-transparent hover:bg-black hover:text-white border-2 border-black p-5 w-[328px] h-[52px] md:w-[258px]">
                <span className="text-base leading-5 md:leading-6">
                  Explore our Network
                </span>
                <ArrowRight className="w-8 inline ml-2" />
              </button>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={InstructorsMobile}
              alt="Instructors"
              className="md:hidden"
            />
            <Image
              src={Instructors}
              alt="Instructors"
              className="hidden md:inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
