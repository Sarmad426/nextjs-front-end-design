import Image from "next/image";
import React from "react";
import Separator from "./custom/separator";
import GoogleIcon from "@/assets/google.svg";
import MetaIcon from "@/assets/meta.svg";
import SequoiaIcon from "@/assets/sequoia.svg";
import MicrosoftIcon from "@/assets/microsoft.svg";
import AppleIcon from "@/assets/apple.svg";
import TeslaIcon from "@/assets/tesla.svg";
import { ArrowRight } from "lucide-react";

import GeorgeTownUniIcon from "@/assets/georgetown-uni.svg";
import GenovaIcon from "@/assets/genova.svg";

const sponsors = [
  SequoiaIcon,
  AppleIcon,
  MicrosoftIcon,
  MetaIcon,
  GoogleIcon,
  TeslaIcon,
];

export const Sponsors = () => {
  return (
    <div className="-mt-24 mx-auto md:w-[95%] w-full bg-[#FCFAF2]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col w-[95%] p-8 bg-[#FCFAF2]">
          <div className="flex lg:flex-row md:flex-wrap flex-col gap-6 items-center justify-between text-center w-full">
            <div>
              <h3 className="lg:text-7xl md:text-6xl text-5xl">$320K</h3>
              <p className="text-secondaryTextColor">
                average raised by our students
              </p>
            </div>
            <div>
              <h3 className="lg:text-7xl md:text-6xl text-5xl">75%</h3>
              <p className="text-secondaryTextColor">
                of our students closing funds round
              </p>
            </div>
            <div>
              <h3 className="lg:text-7xl md:text-6xl text-5xl tracking-wide">
                9.8/10
              </h3>
              <p className="text-secondaryTextColor">
                students are likely to recommend us
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-primaryColor text-start text-2xl my-4">
              Joined by experts with experience in:
            </h4>
            <div className="flex justify-start lg:justify-end gap-x-10 flex-wrap gap-y-5">
              {sponsors.map((sponsor, index) => (
                <Image
                  src={sponsor}
                  alt={`Sponsor ${index}`}
                  className="lg:h-10 md:h-7 h-3"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 mx-auto w-[95%] bg-[#FCFAF2]">
        <h4 className="text-start text-3xl text-primaryColor my-3">
          What is Genoa Entrepreneurship school?
        </h4>
        <Separator />
        <div>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-12 my-6">
            <h3 className="lg:text-5xl md:text-4xl text-3xl uppercase col-span-2">
              bridging the startups and academia
            </h3>
            <p className="lg:text-xl md:text-lg text-sm text-secondaryTextColor col-span-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique maxime blanditiis inventore! Optio a eum maiores autem
              omnis dolores aperiam recusandae, eligendi culpa voluptatem
              deserunt et delectus quidem magnam, perspiciatis est. Animi eum
              at, distinctio in officia magni nemo expedita eius itaque
              necessitatibus totam, exercitationem repellat et obcaecati? Id, a!
            </p>
          </div>
          <div>
            <h4 className="text-xl">Academia Partners</h4>
            <div className="flex items-center md:justify-start justify-between gap-4 flex-wrap mt-3 w-full">
              <div>
                <Image
                  src={GeorgeTownUniIcon}
                  alt="Georgetown"
                  className="h-7"
                />
              </div>
              <div>
                <span className="text-[#E4602F] block text-xs">
                  Bloomberg MBA Ranking
                </span>
                <span className="text-sm">
                  <span className="font-bold">#1</span> World&apos;s most
                  creative & <br className="md:hidden visible" /> innovative
                  graduates
                </span>
              </div>
              <div>
                <Image src={GenovaIcon} alt="Georgetown" className="h-7" />
              </div>
              <div>
                <span className="text-[#E4602F] block text-xs">
                  Cenis ranking of italian universities
                </span>
                <span className="text-sm">
                  <span className="font-bold">#1</span> Engineering in Italy
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center md:justify-end justify-center mt-10">
            <button className="md:w-[250px] md:h-[52px] w-[330px] h-[48px] btn bg-transparent border-2 border-black hover:bg-black hover:text-white flex items-center justify-center gap-2">
              Read more about us
              <ArrowRight className="w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
