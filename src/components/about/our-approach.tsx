import Image from "next/image";

import FormulaImage from "@/assets/formula.svg";

export const OurApproach = () => {
  return (
    <section className="w-[95%] mx-2 md:mx-auto my-16">
      <h2 className="hidden md:flex font-light text-[56px] leading-[64px]">
        Our Approach
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-2 place-items-center mx-2.5 gap-8">
        <div>
          <div className="md:hidden">
            <h3 className="text-[32px] leading-10 text-primaryColor my-3.5">
              Our learning philosophy
            </h3>
            <p className="font-light text-2xl leading-8 my-2.5">
              Discover. Test. Excel. Our approach integrates exploration and
              execution, crafting a unique journey from insight to impactful
              outcomes.
            </p>
          </div>
          <div className="hidden md:flex flex-col gap-2.5 justify-center my-6">
            <h5 className="text-2xl text-primaryColor">
              How we support your growth
            </h5>
            <p className="font-light text-2xl">
              Sessions industry insights help you develop global thinking and
              strategic decision-making. Simultaneously, practical feedback from
              mentors 1:1 sessions ensures that your execution is of high
              quality, accelerating your progress.
            </p>
          </div>
        </div>
        <Image src={FormulaImage} alt="Formula" />
      </div>
    </section>
  );
};
