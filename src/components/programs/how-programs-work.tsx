import { ProgramSections } from "./program-sections";

export const HowProgramsWork = () => {
  return (
    <section className="w-[95%] mx-auto my-12">
      <div className="flex flex-col items-start justify-center gap-4">
        <h3 className="text-xl leading-6 md:text-2xl">
          How the program works and what students learn
        </h3>
        <div className="h-[1px] w-full bg-[#BCD4C7] self-end mb-[16px] block">
          <div className="h-[1px] w-[250px] bg-[#193E2C]" />
        </div>
      </div>
      <ProgramSections />
    </section>
  );
};
