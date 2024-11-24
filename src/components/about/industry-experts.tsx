import GoogleIcon from "@/assets/google.svg";
import AppleIcon from "@/assets/apple.svg";
import MetaIcon from "@/assets/meta.svg";
import TeslaIcon from "@/assets/tesla.svg";
import MicrosoftIcon from "@/assets/microsoft.svg";
import SequoiaIcon from "@/assets/sequoia.svg";
import IbmIcon from "@/assets/ibm.svg";
import GrammerlyIcon from "@/assets/grammarly.svg";
import SkypeIcon from "@/assets/skype.svg";
import Skyscanner from "@/assets/skyscanner.svg";
import PinterestIcon from "@/assets/pinterest.svg";
import TalisIcon from "@/assets/talis.svg";
import YounitedIcon from "@/assets/younited.svg";
import Image from "next/image";

export const IndustryExperts = () => {
  const icons = [
    GoogleIcon,
    AppleIcon,
    MetaIcon,
    TeslaIcon,
    MicrosoftIcon,
    SequoiaIcon,
    IbmIcon,
    GrammerlyIcon,
    SkypeIcon,
    Skyscanner,
    PinterestIcon,
    TalisIcon,
    YounitedIcon,
  ];

  return (
    <div className="mx-auto w-full md:w-[95%] my-12 py-2.5">
      <div className="my-2 inline-flex items-center justify-around md:gap-12 gap-6">
        <h3 className="font-light text-[32px] leading-10 md:text-[40px] md:leading-10">
          Backed by industry leaders
        </h3>
        <p className="text-lg leading-5 md:font-light md:text-[24px] md:leading-8">
          Mentors believing in our philosophy, solution and students
        </p>
      </div>
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
    </div>
  );
};
