import Image from "next/image";

import AcademicAlliance1 from "@/assets/academic-alliances-1.webp";
import AcademicAlliance2 from "@/assets/academic-alliances-2.webp";
import GeorgeTownUniLogo from "@/assets/georgetown-uni.svg";
import GenoaUniIcon from "@/assets/genova.svg";

export const AcademicBody = () => {
  return (
    <section className="w-[95%] mx-auto my-12 md:my-16">
      <div>
        <div className="flex flex-col items-start justify-center md:flex-row gap-4 md:justify-between">
          <h3 className="font-light text-[32px] leading-10 md:text-[40px] md:leading-[56px] md:min-w-[25%]">
            <span className="hidden md:inline">Academic Body</span>
            <span className="inline md:hidden">Academic Alliances</span>
          </h3>
          <div className="h-[1px] w-full bg-[#BCD4C7] self-end mb-[16px]">
            <div className="h-[1px] w-[170px] bg-[#193E2C]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 my-8">
        <Image src={AcademicAlliance1} alt="Academic Alliance" />
        <div className="my-3 flex flex-col md:justify-between h-[90%] gap-4">
          <div>
            <h3 className="text-[32px] leading-10 text-primaryColor">
              Georgetown University, McDonough School of Business
            </h3>
            <p className="font-light text-2xl md:text-lg md:leading-6 my-4">
              Founded in 1789, Georgetown University shares Genoa ES’ passion
              for innovative education. Being pioneers in sustainable
              entrepreneurship, law, and policy GU will give a unique edge to
              Genoa ES students together with access to a strong network.
            </p>
          </div>
          <div className="md:flex md:justify-evenly items-center w-full mt-2">
            <Image src={GeorgeTownUniLogo} alt="George town" className="my-3" />
            <div>
              <span className="text-[#E4602F] leading-5 md:text-xs md:leading-[14px] my-3">
                Bloomberg MBA ranking
              </span>
              <p className="text-lg leading-8 md:leading-[18px] my-2 md:my-auto">
                <span className="font-semibold text-2xl md:text-lg md:leading-6">
                  #1{" "}
                </span>
                World&apos;s most innovative & creative graduates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-2 my-6 md:my-12">
        <div className="my-3 flex flex-col md:justify-between h-[90%] gap-4">
          <div>
            <h3 className="text-[32px] leading-10 text-primaryColor">
              Genoa University{" "}
            </h3>
            <p className="font-light text-2xl md:text-lg md:leading-6 my-4">
              Genoa University stands as our academic anchor in Europe. With a
              rich heritage and commitment to fostering innovation, it&apos;s
              the ideal backdrop for your entrepreneurial education. Here,
              you&apos;ll find a supportive environment that values your unique
              journey.
            </p>
          </div>
          <div className="md:flex md:justify-start gap-5 items-center w-full mt-2">
            <Image src={GenoaUniIcon} alt="Genoa" className="my-3" />
            <div>
              <span className="text-[#E4602F] leading-5 md:text-xs md:leading-[14px] my-3">
                Censis ranking of italian universities
              </span>
              <p className="text-lg leading-8 md:leading-[18px] my-2 md:my-auto">
                <span className="font-semibold text-2xl md:text-lg md:leading-6">
                  #1{" "}
                </span>
                Engineering in Italy{" "}
              </p>
            </div>
          </div>
        </div>
        <Image src={AcademicAlliance2} alt="Academic Alliance" />
      </div>
    </section>
  );
};
