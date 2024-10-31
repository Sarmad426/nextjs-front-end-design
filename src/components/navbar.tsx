import Link from "next/link";
import React from "react";
import Separator from "./custom/separator";
import { routes } from "@/data/routes";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-[9999] p-6">
      <nav className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-between leading-none text-white">
          <div>
            <Link
              href="/"
              className="uppercase lg:text-2xl md:text-xl text-lg font-extrabold leading-none"
            >
              genoaes
            </Link>
            <span className="uppercase text-[8px] font-light block">
              genoa entrepreneurship school
            </span>
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
