import Image from "next/image";
import React from "react";

import GeorgeUniIcon from "@/assets/georgetown-uni.svg";

export const MeetProfessor = () => {
  return (
    <section className="mx-auto md:w-[95%]">
      <div className="mx-auto my-8 bg-[#FAF5E2] text-black">
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="flex-1 flex flex-col justify-between gap-y-12 p-3">
            <h3 className="text-4xl">Meet your professor</h3>
            <div className="border-l-[1.5px] border-primaryColor px-4 font-light text-base leading-[22px] md:text-[20px] md:leading-[28px] lg:text-xl lg:leading-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis voluptates ipsa rem optio consequatur possimus
                provident vitae commodi{" "}
                <span className="font-medium">
                  amet obcaecati quidem perferendis cum omnis neque nemo,
                  explicabo error sequi. Doloremque placeat similique magni
                  veritatis error?
                </span>
              </p>
              <div className="flex items-center justify-start mt-6 gap-x-2 md:gap-x-4">
                <Image src={GeorgeUniIcon} alt="George town university" />
                <div>
                  <h4 className="font-[400] text-lg leading-[24px] md:text-xl md:leading-[24px]">
                    Shy Gilad
                  </h4>
                  <p className="text-sm leading-[18px] md:text-base md:leading-[20px]">
                    Professor at Georgetown university
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[95%] lg:w-[60%] mx-auto">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/j7W44OPRVgM?si=7IYWk19Msgm3DLHB"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
