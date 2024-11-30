"use client";

import { Minus, Plus } from "lucide-react";
import { useState, useRef } from "react";

export const Collapsible: React.FC<{ question: string; InnerText: string }> = ({
  question,
  InnerText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="w-full cursor-pointer select-none"
      onClick={toggleCollapsible}
    >
      <div className="flex items-center justify-between min-w-full">
        <span className="font-light text-lg leading-6 md:text-2xl">
          {question}
        </span>
        <Plus className={`w-8 ${isOpen && "hidden"}`} />
        <Minus className={`w-8 ${!isOpen && "hidden"}`} />
      </div>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className={`overflow-hidden transition-all duration-500`}
      >
        <div className="p-3.5">{InnerText}</div>
      </div>
    </div>
  );
};

/*
   <div className="w-full max-w-md mx-auto border rounded-md shadow-lg">
      <button
        className="w-full px-4 py-2 text-left text-lg font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={toggleCollapsible}
      >
        {question}
      </button>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className={`overflow-hidden transition-all duration-500`}
      >
        <div className="p-2">{InnerText}</div>
      </div>
    </div>
*/

/*

 <div
                key={index}
                className="flex items-center justify-between w-full cursor-pointer"
              >
                <span className="font-light text-lg leading-6 md:text-2xl">
                  {faq.question}
                </span>
                <Plus className="w-8" />
              </div>

*/
