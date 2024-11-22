import React from "react";
import Separator from "../custom/separator";

import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/routes";
import FooterLogo from "@/assets/footer-logo.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";

import Instagram from "@/assets/instagram.svg";
import Linkedin from "@/assets/linkedin-transparent-bg.svg";

const Footer = () => {
  return (
    <div className="md:w-[95%] w-full mx-auto my-12 relative">
      <div>
        <Separator color="#BCD4C7" />
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start gap-x-12 my-10 md:w-[85%] lg:w-[90%] mx-auto md:mx-6">
        <div className="w-[234px] md:w-[250px] lg:w-[406px] p-2.5 flex flex-col gap-16 md:gap-10 lg:gap-8">
          <div>
            <Image src={FooterLogo} alt="Genoaes" />
            <p className="leading-4 my-3 md:leading-5 lg:text-base lg:leading-4">
              Schedays Associazione culturale e di promozione sociale Piazza
              Santa Maria in Via Lata 11, 16128 Genoa, Italy
            </p>
          </div>
          <div className="my-2">
            <span>Mail</span>
            <Link href="/" className="text-primaryColor underline ml-2.5">
              admission@genoaes.com
            </Link>
          </div>
          <div className="my-2 flex gap-8">
            <Image src={Instagram} alt="Instagram" />
            <Image src={Linkedin} alt="Linkedin" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-20 md:gap-8 gap-4 mx-3">
          <h5 className="text-lg md:text-xl font-light">Navigation</h5>
          <div className="flex md:gap-8 gap-4 flex-wrap justify-between md:justify-start mx-4 md:mx-1.5">
            {footerLinks.map((link) => (
              <Link
                key={link}
                href={`/${link}`}
                className="text-sm leading-4 underline"
              >
                <span className="flex gap-3">
                  <Image src={ArrowIcon} alt="Arrow" />
                  {link}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute md:-right-16 -right-10 lg:-right-20 top-[40%] rotate-90 font-extralight">
        <span className="text-[32px] leading-8 md:text-[40px] md:leading-10">
          2024 &copy;
        </span>
        <p className="uppercase text-sm leading-[14px] md:text-base md:leading-4">
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
