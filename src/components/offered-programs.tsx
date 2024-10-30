import React from "react";
import Separator from "./custom/separator";
import Image from "next/image";

const OfferedPrograms = () => {
  return (
    <div className="mx-4">
      <h3 className="text-primaryColor text-2xl my-2">What do we Offer?</h3>
      <Separator />
      <div className="flex items-center justify-between">
        <Image src="/students.jpg" alt="Image" width={200} height={200} />
      </div>
    </div>
  );
};

export default OfferedPrograms;
