import Image from "next/image";
import { experts, icons } from "@/data/data";

export const IndustryExperts = () => {
  return (
    <section className="mx-auto w-full md:w-[95%] my-12 py-2.5">
      <div className="my-2 inline-flex items-center justify-around md:gap-12 gap-6">
        <h3 className="font-light text-[32px] leading-10 md:text-[40px] md:leading-10">
          Backed by industry leaders
        </h3>
        <p className="text-lg leading-5 md:font-light md:text-[24px] md:leading-8">
          Mentors believing in our philosophy, solution and students
        </p>
      </div>
      {/* Industry leaders */}
      <div className="w-full mx-auto">
        <div className="my-8 grid grid-cols-3 md:flex md:flex-wrap md:justify-between items-center gap-x-10 gap-y-6 md:gap-x-16 md:gap-y-8 mx-6 w-full md:mx-auto">
          {icons.map((icon, i) => {
            return (
              <Image
                src={icon}
                alt="Ally icon"
                key={i}
                className={`${i == icons.length - 1 && "hidden md:flex"}`}
              />
            );
          })}
        </div>
      </div>
      {/* Industry experts */}
      <div className="flex items-center gap-6 overflow-scroll scrollbar-hide flex-shrink-0">
        {experts.map((expert, i) => (
          <div
            key={i}
            className="relative overflow-hidden min-w-[300px] min-h-[300px]"
          >
            <Image
              src={expert.img}
              alt={expert.name}
              className="w-[300px] h-[400px]"
            />
            <div className="absolute bottom-2.5 left-2 flex flex-col gap-y-1.5 min-w-full">
              <Image src={expert.orgIcon} alt="" className="my-2.5" />
              <hr className="w-[90%]" />
              <h5 className="font-medium text-[28px] leading-8 text-[#F5F5F5]">
                {expert.name}
              </h5>
              <p className="text-lg leading-6 text-[#F5F5F5]">{expert.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
