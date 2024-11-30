import ProgramImgDesktop from "@/assets/program-img-7.webp";
import ProgramImgMobile from "@/assets/program-img-7-mobile.webp";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const GetSurroundedByTalentedPeople: React.FC = () => {
  return (
    <div className="w-[95%] mx-auto my-16 mt-10 md:mt-12">
      <div className="flex flex-col items-start gap-[8px] w-full my-8">
        <h2 className="leading-[24px] md:leading-[32px] relative z-20 font-onest text-[#43AA13] text-[20px] md:text-[24px] lg:min-w-max">
          <span className="hidden md:flex">
            Get Surrounded by talented people
          </span>
          <span className="md:hidden">
            Industry experts will guide you with personalised advice
          </span>
        </h2>
        <div className="h-[1px] w-full relative bg-[#BCD4C7]">
          <div className="absolute top-0 h-[1px] left-0 bg-[#193E2C] z-10 w-[200px]"></div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row h-full">
        <div className="min-h-full p-4 flex flex-col justify-between gap-4">
          <span className="font-onest font-light text-2xl">
            Admitted students generally completed at least 3 internships and had
            1 entrepreneurial experience before joining
          </span>
          <div className="w-full md:flex items-center justify-end hidden">
            <button className="flex items-center justify-center primary-btn p-2 w-[360px] h-[52px] text-base leading-6">
              <span>Get to know our cohort better</span>
              <ArrowRight className="w-8 ml-2 inline" />
            </button>
          </div>
        </div>
        <Image
          src={ProgramImgDesktop}
          alt="Program Image"
          className="hidden md:flex max-w-[785px] max-h-[342px]"
        />
        <Image
          src={ProgramImgMobile}
          alt="Program Image"
          className="md:hidden min-w-[328px] min-h-[472px] md:w-[95%] md:h-auto"
        />
      </div>
    </div>
  );
};
