import React from "react";

import { ArrowRight } from "lucide-react";

interface Props {
  label: string;
  color?: string;
}

export const Button = ({ label, color }: Props) => {
  return (
    <div>
      {color ? (
        <button
          style={{ backgroundColor: color }}
          className="text-black px-4 py-2 cursor-pointer"
        >
          {label}
        </button>
      ) : (
        <button className="bg-primaryColor px-4 py-2 flex items-center gap-x-1 hover:bg-[#63cc13] cursor-pointer">
          {label}
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
};
