"use client";
import Link from "next/link";
import React from "react";
import Separator from "./custom/separator";
import { routes } from "@/data/routes";
import { Menu } from "lucide-react";

import Genoaes from "@/assets/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  console.log("Path", pathname);
  return (
    <header
      className={`absolute top-0 left-0 w-full z-[9999] p-6 ${
        pathname != "/" && "bg-[#193E2C]"
      }`}
    >
      <nav className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-between leading-none text-white">
          <div>
            <Link href="/">
              <Image
                src={Genoaes}
                alt="GenoaES"
                className="w-[112px] h-[24px] md:w-[150px] md:h-[32px]"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-[40px]">
            <div className="flex gap-[12px]">
              {routes.map((route) => (
                <Link
                  href={`/${route.toLowerCase().replace(" ", "-")}`}
                  key={route}
                  className="text-sm px-[18px] leading-6 font-normal"
                >
                  {route}
                </Link>
              ))}
              <select
                title="language"
                name="language"
                className="text-white bg-transparent leading-6 font-normal text-sm pr-1 pl-[26px]"
              >
                <option value="en" className="text-black">
                  EN
                </option>
              </select>
            </div>
            <button className="bg-primaryColor w-[90px] h-[41px]  hover:bg-hoverColor transition-colors duration-200">
              Apply
            </button>
          </div>
          <Menu className="lg:hidden flex cursor-pointer" />
        </div>
        <Separator />
      </nav>
    </header>
  );
};

export default Navbar;
