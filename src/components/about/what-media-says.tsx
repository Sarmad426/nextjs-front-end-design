import { mediaTalks } from "@/data/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const WhatMediaSays = () => {
  return (
    <section className="w-[95%] mx-auto my-12 md:my-16">
      <div>
        <div className="flex flex-col items-start justify-center md:flex-row gap-4 md:justify-between">
          <h3 className="font-light text-[32px] leading-10 md:text-[40px] md:leading-[56px] md:min-w-[30%]">
            What the Media says
          </h3>
          <div className="h-[1px] w-full bg-[#BCD4C7] self-end mb-[16px]">
            <div className="h-[1px] w-[170px] bg-[#193E2C]" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 overflow-scroll scrollbar-hide flex-shrink-0 my-12">
        {mediaTalks.map((media, i) => (
          <div
            key={i}
            className="overflow-hidden min-w-[380px] min-h-[270px] max-h-[432px] text-ellipsis bg-white py-5 px-3.5"
          >
            <div className="w-full">
              <div className="flex items-center justify-between my-5">
                <div>
                  <Image
                    src={media.logo}
                    alt={media.title}
                    height={30}
                    className="inline mx-2.5"
                  />
                  <h4 className="inline mx-1.5 font-medium text-lg leading-5">
                    {media.title}
                  </h4>
                </div>
                <Link
                  className="text-primaryColor inline text-sm leading-4"
                  href={media.link}
                >
                  More
                  <ArrowUpRight className="ml-1.5 inline mx-1" width={18} />
                </Link>
              </div>
              <Image
                src={media.img}
                alt={media.title}
                className="w-[368px] h-[270px] block my-4"
              />
              <p className="mx-2">{media.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
