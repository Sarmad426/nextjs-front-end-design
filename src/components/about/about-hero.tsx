import GoogleIcon from "@/assets/google-light.svg";
import MetaIcon from "@/assets/meta-light.svg";
import SequoiaIcon from "@/assets/sequoia-light.svg";
import MicrosoftIcon from "@/assets/microsoft-light.svg";
import AppleIcon from "@/assets/apple-light.svg";
import TeslaIcon from "@/assets/tesla-light.svg";
import Image from "next/image";

export const AboutHero = () => {
  const sponsors = [
    SequoiaIcon,
    AppleIcon,
    MicrosoftIcon,
    MetaIcon,
    GoogleIcon,
    TeslaIcon,
  ];
  return (
    <div className="bg-[#193E2C] text-white flex items-center justify-center w-full h-screen">
      <div className="flex flex-col-reverse lg:grid grid-cols-2 mx-8 md:mx-16">
        <div className="col-span-1 flex flex-col items-center gap-5 justify-around">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="font-onest uppercase font-medium text-[32px] leading-8 md:font-light md:text-[40px]">
              Bridging the academia and startup worlds
            </h2>
            <p className="text-lg leading-6 md:font-light md:text-2xl">
              We are a joint effort between the University of Genoa, companies,
              and institutions. Our is goal to empower international
              entrepreneurs through dynamic learning experiences with industry
              experts, companies and the University of Georgetown.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex justify-start item-start lg:gap-x-10 gap-x-[26px] flex-wrap gap-y-5">
              {sponsors.map((sponsor, index) => (
                <Image src={sponsor} alt={`Sponsor ${index}`} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
