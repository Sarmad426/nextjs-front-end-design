import { Dot } from "lucide-react";

export const InfiniteScrollText = () => {
  const words: string[] = [
    "Pioneer",
    "Discoverer",
    "Navigator",
    "Visionary",
    "Bold",
    "Ambitious",
    "Curious",
    "Forward-thinking",
  ];

  return (
    <div className="w-full mt-24 mb-32">
      <div className="overflow-hidden w-full bg-primaryColor -rotate-3 h-[120px] flex items-center justify-center">
        <div className="word-carousel-track flex animate-scroll">
          {words.map((word, index) => (
            <span
              className="flex items-center justify-center font-light text-[32px] leading-10 text-white whitespace-nowrap mx-4"
              key={`duplicate-${index}`}
            >
              <Dot size={50} className="text-black" />
              {word}
            </span>
          ))}
          {words.map((word, index) => (
            <span
              className="flex items-center justify-center font-light text-[32px] leading-10 text-white whitespace-nowrap mx-4"
              key={`duplicate-${index}`}
            >
              <Dot size={50} className="text-black" />
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
