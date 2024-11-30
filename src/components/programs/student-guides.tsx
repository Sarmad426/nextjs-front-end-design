import { ArrowRight } from "lucide-react";
import Instructors from "@/assets/program-img-6.webp";
import InstructorsMobile from "@/assets/program-img-6-mobile.webp";
import Image from "next/image";

import GeorgeTownUni from "@/assets/academic-alliances-1.webp";
import GenoaUni from "@/assets/academic-alliances-2.webp";

import GeorgeTownUniIcon from "@/assets/georgetown-uni.svg";
import GenoaUniIcon from "@/assets/genova.svg";

export const StudentGuides = () => {
  return (
    <section className="w-[95%] mx-auto my-12 mt-8 md:mt-10">
      <div>
        {/* Heading */}
        <div className="flex flex-col items-start gap-[8px] w-full my-8">
          <h2 className="leading-[24px] md:leading-[32px] relative z-20 font-onest text-[#43AA13] text-[20px] md:text-[24px] lg:min-w-max">
            Who is personally guiding the students?
          </h2>
          <div className="h-[1px] w-full relative bg-[#BCD4C7]">
            <div className="absolute top-0 h-[1px] left-0 bg-[#193E2C] z-10 w-[200px]"></div>
          </div>
        </div>
        {/* Student Guides */}
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
              <button className="primary-btn w-[328px] h-[52px] md:w-[258px]">
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
        {/* Industry experts advice */}
        <div className="flex flex-col md:flex-col-reverse gap-y-10 w-full">
          <div>
            <div className="flex flex-col items-start gap-[8px] w-full my-8 md:hidden">
              <h2 className="text-xl leading-6 text-[#43AA13]">
                Industry experts will guide you with personalised advice{" "}
              </h2>
              <div className="h-[1px] w-full relative bg-[#BCD4C7]">
                <div className="absolute top-0 h-[1px] left-0 bg-[#193E2C] z-10 w-[200px]"></div>
              </div>
            </div>
            <div className="my-12 sm:hidden border-l-2 border-primaryColor pl-6 h-full flex flex-col gap-y-3 justify-between w-full">
              <h5 className="font-light font-onest text-2xl leading-6">
                A new program from two successfull and centuries old academic
                institutions
              </h5>
              <p className="font-light text-sm leading-5">
                At Genoa Entrepreneurship School, students learn from industry
                leaders,gaining global perspectives and essential skills.
              </p>
              <div className="mt-16 flex items-center justify-end w-full">
                <button className="w-[174px] h-[48px] primary-btn">
                  <span>Learn more</span>
                  <ArrowRight className="w-8 inline ml-2" />
                </button>
              </div>
            </div>
            <div className="w-full h-full my-12">
              <div className="my-6 flex flex-col lg:flex-row gap-4 items-center justify-around w-full">
                <Image
                  src={GeorgeTownUni}
                  alt="George town university"
                  className="w-[328px] h-[200px] md:w-auto md:h-auto lg:w-[555px] lg:h-[400px]"
                />
                <div className="w-full p-6 flex flex-col items-start justify-between bg-[#FAF5E2] sm:min-h-[400px]">
                  <div>
                    <h4 className="text-2xl text-primaryColor md:text-[32px] md:leading-[34px] my-3">
                      Georgetown University, McDonough School of Business,{" "}
                    </h4>
                    <p className="font-light text-base md:text-lg md:leading-6">
                      Founded in 1789, Georgetown University shares Genoa ES’
                      passion for innovative education. In times when policy is
                      increasingly involved in business, being pioneers in
                      sustainable entrepreneurship, law, and policy at GU will
                      give Genoa ES students a unique edge, along with access to
                      a strong network.
                    </p>
                  </div>
                  <div className="hidden md:flex gap-3.5 items-center w-full min-h-full mb-6">
                    <Image
                      src={GeorgeTownUniIcon}
                      alt="George town"
                      className="my-3"
                    />
                    <div>
                      <span className="leading-5 md:text-xs md:leading-[14px] my-3">
                        Bloomberg MBA ranking
                      </span>
                      <p className="text-lg leading-8 md:leading-[18px] my-2 md:my-auto">
                        <span className="font-semibold text-2xl md:text-lg md:leading-6 text-primaryColor">
                          #1{" "}
                        </span>
                        World&apos;s most innovative & creative graduates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-6 flex flex-col lg:flex-row-reverse gap-4 items-center justify-around w-full">
                <Image
                  src={GenoaUni}
                  alt="Genoa"
                  className="w-[328px] h-[200px] md:w-auto md:h-auto lg:w-[555px] lg:h-[400px]"
                />
                <div className="w-full p-6 flex flex-col items-start justify-between bg-[#FAF5E2] sm:min-h-[400px]">
                  <div>
                    <h4 className="text-2xl text-primaryColor md:text-[32px] md:leading-[34px] my-3">
                      Genoa University
                    </h4>
                    <p className="font-light text-base md:text-lg md:leading-6">
                      Genoa University has a strong entrepreneurial spirit and
                      excels in technical domains, making it one of the ideal
                      universities for creating a business in Europe.
                      You&apos;ll find an environment with experience in
                      creating startups, numerous technical talents, and custom
                      support for your unique journey.
                    </p>
                  </div>
                  <div className="hidden md:flex gap-3.5 items-center w-full min-h-full mb-6">
                    <Image
                      src={GenoaUniIcon}
                      alt="George town"
                      className="my-3"
                    />
                    <div>
                      <span className="leading-5 md:text-xs md:leading-[14px] my-3">
                        Censis ranking of italian universities
                      </span>
                      <p className="text-lg leading-8 md:leading-[18px] my-2 md:my-auto">
                        <span className="font-semibold text-2xl md:text-lg md:leading-6 text-primaryColor">
                          #1{" "}
                        </span>
                        Engineering in Italy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/3 ml-auto my-12 hidden md:flex flex-col gap-4 items-end justify-end p-5 border-l-2 border-primaryColor pl-2">
                <div className="flex flex-col gap-6 p-3">
                  <h4 className="font-onest font-light text-[40px] leading-[48px]">
                    A new program from two successful and centuries-old academic
                    institutions
                  </h4>
                  <p className="font-light text-lg leading-6">
                    Students receive a UniGe Master’s of 60 ECTS and a
                    Georgetown certificate. Both institutions have been
                    delivering excellent education for over 250 years, making
                    this program recognized by employers and investors from the
                    start.
                  </p>
                </div>
                <div className="w-full flex item-center justify-end mt-5">
                  <button className="primary-btn p-2 w-[368px] h-[52px]">
                    <span>Learn more about universities</span>
                    <ArrowRight className="w-8 inline ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
