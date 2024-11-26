export const ProgramOverview = () => {
  const facilities = [
    "Personalized 1:1 guidance from +100 startup experts, at any time.",
    "Spend 1/3 of the time with university professors and 2/3 with industry mentors. ",
    "Learn by networking and working in New York, San Francisco, and Washington, D.C.",
    "Pitch in front +100 investors and obtain a Master degree at the same time.",
  ];

  return (
    <section className="w-[95%] flex flex-col-reverse md:grid md:grid-cols-2 my-12 md:w-[90%] md:mx-auto mx-4">
      <div className="w-full flex flex-col md:justify-between min-h-full">
        <div>
          <h3 className="font-light text-[22px] leading-[26px] md:text-3xl lg:text-[40px] lg:leading-[48px] my-2">
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
        <div className="flex flex-col gap-5 lg:grid-cols-2">
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
    </section>
  );
};
