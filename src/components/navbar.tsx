import Link from "next/link";
import React from "react";
import Separator from "./custom/separator";
import { routes } from "@/data/routes";
import { Button } from "./custom/button";

const Navbar = () => {
  return (
    <nav className="max-w-[1400px]">
      <div className="pb-[24px] flex items-center gap-[439px]">
        <div>
          <Link
            href="/"
            className="uppercase text-2xl font-extrabold leading-none text-white"
          >
            genoaes
            <span className="text-[8px] font-light block text-secondaryTextColor">
              genoa entrepreneurship school
            </span>
          </Link>
        </div>
        <div className="items-center gap-[40px] hidden lg:flex">
          <div className="flex gap-[30px]">
            {routes.map((route) => (
              <Link
                href={`/${route.toLowerCase().replace(" ", "-")}`}
                key={route}
                className="text-secondaryTextColor text-sm p-2"
              >
                {route}
              </Link>
            ))}
          </div>
          <Button label="Apply" />
        </div>
      </div>
      <Separator />
    </nav>
  );
};

export default Navbar;
