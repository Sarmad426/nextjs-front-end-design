import React from "react";
import Navbar from "./navbar";
import { Button } from "./custom/button";

const Hero = () => {
  return (
    <div>
      <div className="bg-img w-screen h-screen bg-no-repeat bg-center bg-cover p-6">
        <header>
          <Navbar />
        </header>
        <section className="flex flex-col items-center justify-end text-center mt-[17rem]">
          <div>
            <h2 className="text-7xl">
              Launch your startup while learning masters degree
            </h2>
            <h4 className="text-2xl text-secondaryTextColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              distinctio?
            </h4>
          </div>
          <div className="flex gap-8 my-4">
            <Button label="Discover our difference" color="white" />
            <Button label="Learn about the program" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
