import Image from "next/image";

import ProgramsHeroImg from "@/assets/programs-hero-img.webp";
import { sponsorsLight } from "@/data/data";

export const ProgramsHero = () => {
  return (
    <section className="min-h-screen p-4 md:grid md:grid-cols-1 w-full bg-[#193E2C]">
      <div className="md:max-h-[500px] overflow-hidden flex items-center justify-center w-full h-[300px] md:h-auto">
        <Image
          src={ProgramsHeroImg}
          alt="Hero image"
          className="w-full md:w-[90%]"
        />
      </div>
      <div className="text-center text-[#FCFAF2] w-full md:w-3/4 mx-auto my-0 sm:my-8">
        <h2 className="uppercase font-onest font-light text-[28px] leading-7 md:text-5xl xl:text-[64px] xl:leading-[64px]">
          Create your startup While obtaining a Master&apos;s
        </h2>
        <p className="my-2 font-light text-base md:text-xl lg:text-2xl">
          <span className="text-primaryColor block md:inline">
            Master in International Business Creation
          </span>{" "}
          by UniGe with Georgetown University. Go from zero to fundraising with
          personalized guidance and a strong network while obtaining a degree.
        </p>
      </div>
      <span className="text-[#FCFAF2] text-start md:ml-16 mx-4 hidden md:flex">
        Joined by experts with experience in:{" "}
      </span>
      <div className="w-full my-3 flex justify-start md:justify-center md:gap-x-24 gap-x-[26px] flex-wrap gap-y-5">
        {sponsorsLight.map((sponsor, index) => (
          <Image src={sponsor} alt={`Sponsor ${index}`} key={index} />
        ))}
      </div>
    </section>
  );
};
