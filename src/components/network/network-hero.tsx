import Image from "next/image";

import GoogleIcon from "@/assets/google-light.svg";
import MetaIcon from "@/assets/meta-light.svg";
import SequoiaIcon from "@/assets/sequoia-light.svg";
import MicrosoftIcon from "@/assets/microsoft-light.svg";
import AppleIcon from "@/assets/apple-light.svg";
import TeslaIcon from "@/assets/tesla-light.svg";
import Voss from "@/assets/network-page/voss.webp";

export const NetworkHero = () => {
  const sponsors = [
    SequoiaIcon,
    AppleIcon,
    MicrosoftIcon,
    MetaIcon,
    GoogleIcon,
    TeslaIcon,
  ];
  return (
    <section className="bg-[#193E2C] text-white flex flex-col items-center justify-center w-full p-3 pb-5 lg:pb-1.5 lg:h-[95vh]">
      <div className="flex flex-col-reverse gap-20 lg:grid grid-cols-2 place-items-center mx-6 md:mx-16">
        <div className="col-span-1 flex flex-col items-center gap-5 justify-between min-h-full">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="font-onest uppercase font-medium text-[32px] leading-10 md:font-light md:text-[40px]">
              Meet our mentors from the most renowned companies in the world.
            </h2>
            <p className="text-lg leading-6 md:font-light md:text-2xl text-[#FCFAF2]">
              Access{" "}
              <span className="text-primaryColor">
                professionals from top companies and VCs 24/7
              </span>{" "}
              for introductions and industry-specific guidance.
            </p>
          </div>
          <div className="mt-8 mb-4 lg:mt-36">
            <div className="flex justify-start item-start lg:gap-x-10 gap-x-[26px] flex-wrap gap-y-5">
              {sponsors.map((sponsor, index) => (
                <Image src={sponsor} alt={`Sponsor ${index}`} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src={Voss}
            alt="Vos Genoaes"
            className="min-w-[328px] min-h-[300px] xl:w-[640px] xl:h-[460px]"
          />
        </div>
      </div>
    </section>
  );
};
