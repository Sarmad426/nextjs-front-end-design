import Image from "next/image";
import React from "react";
import Separator from "./custom/separator";
import { Button } from "./custom/button";

export const Sponsors = () => {
  return (
    <div>
      <div className="w-screen flex flex-col items-center justify-center">
        <div className="-mt-9 flex flex-col bg-black w-[95%] p-8">
          <div className="flex flex-wrap items-center justify-between text-center w-full">
            <div>
              <h3 className="text-6xl">$320K</h3>
              <p className="text-secondaryTextColor">
                average raised by our students
              </p>
            </div>
            <div>
              <h3 className="text-6xl">75%</h3>
              <p className="text-secondaryTextColor">
                of our students closing funds round
              </p>
            </div>
            <div>
              <h3 className="text-6xl tracking-wide">9.8/10</h3>
              <p className="text-secondaryTextColor">
                students are likely to recommend us
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-primaryColor text-start text-xl my-4">
              Joined by Experts of
            </h4>
            <div className="flex items-end justify-end gap-x-5">
              <Image
                src={"sequoia.svg"}
                alt="Sponsor 1"
                width={120}
                height={120}
              />
              <Image
                src={"sequoia.svg"}
                alt="Sponsor 1"
                width={120}
                height={120}
              />
              <Image
                src={"sequoia.svg"}
                alt="Sponsor 1"
                width={120}
                height={120}
              />
              <Image
                src={"sequoia.svg"}
                alt="Sponsor 1"
                width={120}
                height={120}
              />
              <Image
                src={"sequoia.svg"}
                alt="Sponsor 1"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 w-full">
        <h4 className="text-start text-3xl text-primaryColor my-3">
          What is Genoa Entrepreneurship school?
        </h4>
        <Separator />
        <div>
          <div className="grid grid-cols-3 my-6">
            <h3 className="text-5xl uppercase col-span-1">
              bridging the startups and academia
            </h3>
            <p className="text-xl text-secondaryTextColor col-span-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique maxime blanditiis inventore! Optio a eum maiores autem
              omnis dolores aperiam recusandae, eligendi culpa voluptatem
              deserunt et delectus quidem magnam, perspiciatis est. Animi eum
              at, distinctio in officia magni nemo expedita eius itaque
              necessitatibus totam, exercitationem repellat et obcaecati? Id, a!
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Button label="Read more about us" />
          </div>
        </div>
      </div>
    </div>
  );
};
