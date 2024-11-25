export const OurBelieve = () => {
  const cardsDivStyles =
    "flex flex-col lg:flex-row gap-[16px] w-full px-[16px] lg:px-[40px] h-full lg:h-[400px] xl:h-[360px]";
    return (
    <section className="w-[95%] mx-auto my-12">
      <div>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-evenly items-start lg:items-center my-6">
          <h2 className="font-light text-[32px] leading-10 md:text-[56px] md:leading-[64px]">
            What we believe in
          </h2>
          <p className="flex md:hidden text-lg leading-4">
            At Genoa Entrepreneurship School, students learn from industry
            leaders,gaining global perspectives and essential skills.
          </p>
          <p className="hidden md:flex font-light text-2xl">
            Students can impact the world if supported by industry experts.
          </p>
        </div>
        <div className={cardsDivStyles}>
          <div className="flex flex-col w-full lg:max-w-[48%] bg-[#FAF5E2] p-[16px] md:p-[40px] h-max lg:h-[360px] gap-[20px] justify-between relative group">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full bg-[#43AA13] opacity-0 transition-all duration-[.3s] group-hover:opacity-100" />
            <h3 className="text-[24px] lg:text-[32px] font-500 uppercase text-[#193E2C]">
              Global Approach
            </h3>
            <p className="text-[18px] leading-[24px] text-[#202020b3] font-300">
              Scaling across the Atlantic is challenging, as evidenced by Uber
              and various European ventures. We believe learning from top US and
              EU institutions and mentors at the early stage of an idea greatly
              aids in scaling. With Genoa ES, you gain deep insights into US and
              EU markets, legal frameworks, and cultures, along with a robust
              network for successful growth right from the start.
            </p>
          </div>
          <div className="flex flex-col w-full lg:max-w-[48%] bg-[#FAF5E2] p-[16px] md:p-[40px] h-max lg:h-[360px] gap-[20px] justify-between relative group">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full bg-[#43AA13] opacity-0 transition-all duration-[.3s] group-hover:opacity-100" />
            <h3 className=" text-[24px] lg:text-[32px] font-500 uppercase text-[#193E2C]">
              Personal Mentorship
            </h3>
            <p className="text-[18px] leading-[24px] text-[#202020b3] font-300">
              Quality mentorship is essential for navigating startup
              complexities. A mentor provides tailored guidance, practical
              advice, and personalized feedback. Support from successful
              founders, investors, and leaders accelerates learning and
              increases success chances. With Genoa ES mentors, you are better
              prepared for obstacles and opportunities from idea inception to
              growth.
            </p>
          </div>
        </div>
        <div className={`${cardsDivStyles} justify-end mt-[16px]`}>
          <div className="flex flex-col w-full lg:max-w-[48%] bg-[#FAF5E2] p-[16px] h-max lg:h-[360px] md:p-[40px] gap-[20px] justify-between relative group">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full bg-[#43AA13] opacity-0 transition-all duration-[.3s] group-hover:opacity-100" />
            <h3 className=" text-[24px] lg:text-[32px] font-500 uppercase text-[#193E2C]">
              Real World experience
            </h3>
            <p className="text-[18px] leading-[24px] text-[#202020b3] font-300">
              Real-world experience for startup founders is essential for
              gaining practical insights and understanding how to execute.
              Thanks to a tailored class schedule and living in the world&apos;s
              best ecosystems, at Genoa ES, you have the time to apply
              immediately what you&apos;ve learned and iterate fast, allowing
              for rapid growth of your startup before graduation time.
            </p>
          </div>
          <div className="flex flex-col w-full lg:max-w-[48%] bg-[#FAF5E2] p-[16px] h-max lg:h-[360px] md:p-[40px] gap-[20px] justify-between relative group">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full bg-[#43AA13] opacity-0 transition-all duration-[.3s] group-hover:opacity-100" />
            <h3 className="text-[24px] lg:text-[32px] font-500 uppercase text-[#193E2C]">
              Solid HARD Skills
            </h3>
            <p className="text-[18px] leading-[24px] text-[#202020b3] font-300">
              Solid hard skills, whether it&apos;s financial analysis, or sales,
              are vital for startup founders because they provide the technical
              expertise necessary to execute tasks fast and effectively. Genoa
              ES mentors ensure you develop these skills through intense and
              highly focused workshops, followed by 1:1 meetings. So you will be
              ready to execute as if you had years of experience in just months.
            </p>
          </div>
        </div>
      </div>
    </section>
)
};
