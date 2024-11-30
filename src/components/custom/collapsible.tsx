"use client";

import { useState, useRef } from "react";

export const Collapsible: React.FC<{ title: string }> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md mx-auto border rounded-md shadow-lg">
      <button
        className="w-full px-4 py-2 text-left text-lg font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={toggleCollapsible}
      >
        {title}
      </button>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className={`overflow-hidden transition-all duration-500`}
      >
        <div className="p-4 bg-white">This is some text</div>
      </div>
    </div>
  );
};
