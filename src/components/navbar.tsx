import Link from "next/link";
import React from "react";
import Separator from "./custom/separator";
import { routes } from "@/data/routes";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="max-w-[1400px]">
      <div className="flex items-center justify-between leading-none">
        <div>
          <Link
            href="/"
            className="uppercase lg:text-2xl md:text-xl text-lg font-extrabold leading-none text-white"
          >
            genoaes
          </Link>
          <span className="uppercase text-[8px] font-light block">
            genoa entrepreneurship school
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-[40px]">
          <div className="flex gap-[30px]">
            {routes.map((route) => (
              <Link
                href={`/${route.toLowerCase().replace(" ", "-")}`}
                key={route}
                className="text-white text-sm p-2"
              >
                {route}
              </Link>
            ))}
          </div>
          <button className="bg-primaryColor w-[90px] h-[41px] text-white hover:bg-[#43cb13] transition-colors duration-200">
            Apply
          </button>
        </div>
        <Menu className="lg:hidden flex text-white" />
      </div>
      <Separator />
    </nav>
  );
};

export default Navbar;
