import Link from "next/link";
import React from "react";
import Separator from "./custom/separator";
import { routes } from "@/data/routes";
import { Button } from "./custom/button";

const Navbar = () => {
  return (
    <nav>
      <div className="pb-3 flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="uppercase text-2xl font-extrabold leading-none"
          >
            genoaes
            <span className="text-[8px] font-light block text-secondaryTextColor">
              genoa entrepreneurship school
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-x-6">
          <div>
            {routes.map((route) => (
              <Link
                href={`/${route.toLowerCase().replace(" ", "-")}`}
                key={route}
                className="text-secondaryTextColor text-sm mr-4"
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
