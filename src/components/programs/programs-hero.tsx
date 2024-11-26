import Image from "next/image";

import ProgramsHeroImg from "@/assets/programs-hero-img.webp";

export const ProgramsHero = () => {
  return (
    <section className="min-h-screen p-4 grid grid-cols-1 place-items-center w-full">
      <div className="max-h-[500px] overflow-hidden flex items-center justify-center  w-full">
        <Image
          src={ProgramsHeroImg}
          alt="Hero image"
          className="w-[90%] -mt-20"
        />
      </div>
      <div>
        <h2 className="font-light text-[28px] leading-7">
          Create your startup While obtaining a Master&apos;s
        </h2>
      </div>
    </section>
  );
};
