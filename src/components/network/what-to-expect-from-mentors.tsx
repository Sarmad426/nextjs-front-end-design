import { sponsors, sponsors1 } from "@/data/data";
import Image from "next/image";

export const WhatToExpectFromMentors = () => {
  return (
    <section className="w-[98%] mx-auto my-28 mt-12 md:mt-20">
      <div className="hidden xl:flex flex-col items-start gap-[8px] w-full my-8">
        <h2 className="leading-[24px] md:leading-[32px] relative z-20 text-[#43AA13] text-[20px] md:text-[24px] lg:min-w-max">
          What to expect from Genoa ES mentors
        </h2>
        <div className="h-[1px] w-full relative bg-[#BCD4C7]">
          <div className="absolute top-0 h-[1px] left-0 bg-[#193E2C] z-10 w-[250px] md:w-[350px]"></div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full p-1.5 bg-[#FAF5E2] lg:h-[405px]">
          <div className="mt-8 flex flex-col w-[95%] mx-auto">
            <h5 className="text-primaryColor font-onest font-medium text-base md:text-lg lg:text-xl lg:leading-8">
              Founders
            </h5>
            <hr className="w-full mt-3" />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/2 w-[95%] mx-auto ml-10">
              <div className="mt-10">
                <span className="font-onest font-extralight text-2xl md:text-[28px] md:leading-8 lg:text-[32px] lg:leading-[40px]">
                  Build solid basis with founders who raised +$7.5 bln
                </span>
                <p className="mt-6 md:mt-10 lg:mt-[80px] font-onest font-extralight text-lg leading-6 md:text-xl lg:text-2xl">
                  Some of the companies our +30 founders have built:
                </p>
                <div className="flex flex-wrap items-center gap-6 md:gap-12 mt-6">
                  {sponsors1.map((sponsor, index) => {
                    return (
                      <div key={index}>
                        <Image src={sponsor} alt="Sponsor" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 w-[95%] mx-auto">
              <div className="mb-4">
                <h5 className="font-semibold text-base inline md:text-lg md:leading-6">
                  Prasanna Sankar
                </h5>
                <p className="inline ml-2.5 font-light text-base md:text-lg md:leading-6">
                  (co founder of Rippling, $11bln val.) will show you where to
                  find your customers and validate your ideas quickly. You can
                  use his actual messages and the same words that made him
                  successful in calls.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-base inline md:text-lg md:leading-6">
                  Ugo di Girolamo
                </h5>
                <p className="inline ml-2.5 font-light text-base md:text-lg md:leading-6">
                  (co founder of Compass, $7B IPO) will work with you to craft
                  the exact wording for your website to gain the trust of
                  potential customers, employees, and investors.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-base inline md:text-lg md:leading-6">
                  Edoardo Serra
                </h5>
                <p className="inline ml-2.5 font-light text-base md:text-lg md:leading-6">
                  (managing 120 engineers for 9 years at Apple) will explain
                  exactly what to ask a potential CTO and what constitutes a
                  good answer to your questions. He can also join the interviews
                  to make sure it’s the right fit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-1.5 bg-[#FAF5E2] lg:h-[405px]">
          <div className="mt-8 flex flex-col md:justify-end w-[95%] mx-auto">
            <h5 className="md:ml-auto text-primaryColor font-onest font-medium text-base md:text-lg lg:text-xl lg:leading-8">
              Managers
            </h5>
            <hr className="w-full mt-3" />
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-4">
            <div className="lg:w-1/2 w-[95%] mx-auto ml-10">
              <div className="mt-10">
                <span className="font-onest font-extralight text-2xl md:text-[28px] md:leading-8 lg:text-[32px] lg:leading-[40px]">
                  Build solid basis with founders who raised +$7.5 bln
                </span>
                <p className="mt-6 md:mt-10 lg:mt-[80px] font-onest font-extralight text-lg leading-6 md:text-xl lg:text-2xl">
                  Some of the companies our +30 founders have built:
                </p>
                <div className="flex flex-wrap items-center gap-6 md:gap-12 mt-6">
                  {sponsors.map((sponsor, index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={sponsor}
                          alt="Sponsor"
                          className="max-w-16"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 w-[95%] mx-auto">
              <div className="mb-4">
                <h5 className="font-semibold text-base inline md:text-lg md:leading-6">
                  Prasanna Sankar
                </h5>
                <p className="inline ml-2.5 font-light text-base md:text-lg md:leading-6">
                  (co founder of Rippling, $11bln val.) will show you where to
                  find your customers and validate your ideas quickly. You can
                  use his actual messages and the same words that made him
                  successful in calls.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-base inline md:text-lg md:leading-6">
                  Ugo di Girolamo
                </h5>
                <p className="inline ml-2.5 font-light text-base md:text-lg md:leading-6">
                  (co founder of Compass, $7B IPO) will work with you to craft
                  the exact wording for your website to gain the trust of
                  potential customers, employees, and investors.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-base inline md:text-lg md:leading-6">
                  Edoardo Serra
                </h5>
                <p className="inline ml-2.5 font-light text-base md:text-lg md:leading-6">
                  (managing 120 engineers for 9 years at Apple) will explain
                  exactly what to ask a potential CTO and what constitutes a
                  good answer to your questions. He can also join the interviews
                  to make sure it’s the right fit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-1.5 bg-[#FAF5E2] lg:h-[405px]">
          <div className="mt-8 flex flex-col w-[95%] mx-auto">
            <h5 className="text-primaryColor font-onest font-medium text-base md:text-lg lg:text-xl lg:leading-8">
              Investors
            </h5>
            <hr className="w-full mt-3" />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/2 w-[95%] mx-auto ml-10">
              <div className="mt-10">
                <span className="font-onest font-extralight text-2xl md:text-[28px] md:leading-8 lg:text-[32px] lg:leading-[40px]">
                  Build solid basis with founders who raised +$7.5 bln
                </span>
                <p className="mt-6 md:mt-10 lg:mt-[80px] font-onest font-extralight text-lg leading-6 md:text-xl lg:text-2xl">
                  Some of the companies our +30 founders have built:
                </p>
                <div className="flex flex-wrap items-center gap-6 md:gap-12 mt-6">
                  {sponsors1.map((sponsor, index) => {
                    return (
                      <div key={index}>
                        <Image src={sponsor} alt="Sponsor" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 w-[95%] mx-auto">
              <div className="mb-4">
                <h5 className="font-semibold text-base inline md:text-lg md:leading-6">
                  Prasanna Sankar
                </h5>
                <p className="inline ml-2.5 font-light text-base md:text-lg md:leading-6">
                  (co founder of Rippling, $11bln val.) will show you where to
                  find your customers and validate your ideas quickly. You can
                  use his actual messages and the same words that made him
                  successful in calls.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-base inline md:text-lg md:leading-6">
                  Ugo di Girolamo
                </h5>
                <p className="inline ml-2.5 font-light text-base md:text-lg md:leading-6">
                  (co founder of Compass, $7B IPO) will work with you to craft
                  the exact wording for your website to gain the trust of
                  potential customers, employees, and investors.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-base inline md:text-lg md:leading-6">
                  Edoardo Serra
                </h5>
                <p className="inline ml-2.5 font-light text-base md:text-lg md:leading-6">
                  (managing 120 engineers for 9 years at Apple) will explain
                  exactly what to ask a potential CTO and what constitutes a
                  good answer to your questions. He can also join the interviews
                  to make sure it’s the right fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
