export const ProgramOverview = () => {
  const facilities = [
    "Personalized 1:1 guidance from +100 startup experts, at any time.",
    "Spend 1/3 of the time with university professors and 2/3 with industry mentors. ",
    "Learn by networking and working in New York, San Francisco, and Washington, D.C.",
    "Pitch in front +100 investors and obtain a Master degree at the same time.",
  ];

  return (
    <section className="w-[95%] flex flex-col lg:flex-row-reverse gap-16 my-12 md:w-[95%] md:mx-auto mx-4">
      <div className="w-full flex flex-col md:justify-between min-h-full">
        <div>
          <h3 className="font-light font-onest text-[22px] leading-[26px] md:text-3xl lg:text-[40px] lg:leading-[48px] my-2">
            <span className="text-primaryColor">Launch while studying</span>{" "}
            like Mark Zuckerberg, Bill Gates, or Elon Musk but{" "}
            <span className="text-primaryColor">with time & support.</span>
          </h3>
          <p className="font-light text-base md:text-lg my-2">
            Genoa ES helps bright bachelor graduates with little experience
            become successful founders in both the US and Europe. Through a
            unique mix of academia, experts, and real-world experience, you will
            develop the skills to create a venture, build a strong network, and
            obtain a Master
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 mb-12">
          {facilities.map((facility, i) => {
            return (
              <div
                key={i}
                className="font-onest text-base border-l border-primaryColor h-full flex items-center justify-center pl-7 py-3"
              >
                {facility}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full xl:max-w-[40%] bg-[#FAF5E2] p-[24px]">
        <h3 className="text-[18px] md:text-[24px] text-[#43AA13] leading-[24px] md:leading-[32px] font-[300]">
          Program Overview
        </h3>
        <div className="flex flex-col mt-[16px] gap-[18px] md:pl-[20px]">
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[100px] items-start w-full">
            <p className=" text-[16px] leading-[24px] font-300 min-w-[110px]">
              Idea stage
            </p>
            <p className=" text-[18px] leading-[24px] ">
              No business idea required
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[100px] items-start w-full">
            <p className=" text-[16px] leading-[24px] font-300 min-w-[110px]">
              Duration
            </p>
            <p className=" text-[18px] leading-[24px] ">
              8 months, full-time, on campus
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[100px] items-start w-full">
            <p className=" text-[16px] leading-[24px] font-300 min-w-[110px]">
              Locations
            </p>
            <p className=" text-[18px] leading-[24px] ">
              Washington, San Fransisco, New York (US), Genoa (Europe)
              <br />
              <span className="font-300 underline">
                taught fully in English
              </span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[100px] items-start w-full">
            <p className=" text-[16px] leading-[24px] font-300 min-w-[110px]">
              Cohort
            </p>
            <p className="onst text-[18px] leading-[24px] ">
              60% international students
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[100px] items-start w-full">
            <p className=" text-[16px] leading-[24px] font-300 min-w-[110px]">
              Credits
            </p>
            <p className=" text-[18px] leading-[24px] ">
              60 ECTS European Master’s Degree
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[100px] items-start w-full">
            <p className=" text-[16px] leading-[24px] font-300 min-w-[110px]">
              Admission
            </p>
            <p className=" text-[18px] leading-[24px] ">
              Applications closing on 31/08/2024
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[100px] items-start w-full">
            <p className=" text-[16px] leading-[24px] font-300 min-w-[110px]">
              Intake
            </p>
            <p className=" text-[18px] leading-[24px] ">21/09/2024</p>
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[100px] items-start w-full">
            <p className=" text-[16px] leading-[24px] font-300 min-w-[110px]">
              Requirements
            </p>
            <p className=" text-[18px] leading-[24px] ">
              1 month internship, BSc/BA, IELTS 7.0 or higher are required
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[100px] items-start w-full">
            <p className=" text-[16px] leading-[24px] font-300 min-w-[110px]">
              Tuition
            </p>
            <p className=" text-[18px] leading-[24px] ">
              €23,000
              <br />
              <span className="underline font-300">
                Scholarships are available
              </span>
            </p>
          </div>
        </div>
        <a
          className="self-end w-full text-center justify-center mt-[28px] md:mt-[72px] group flex gap-[10px] items-center text-white bg-[#43AA13] border-[1px] uppercase px-[24px] py-[10px] hover:bg-[#5FD528] hover:text-white transition-all duration-[.2s]"
          href="/apply"
        >
          Apply now
        </a>
      </div>
    </section>
  );
};
