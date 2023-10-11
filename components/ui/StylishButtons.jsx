import { cn } from "@/lib/utils";
import React from "react";

const StylishButtons = ({ text, className }) => {
  return (
    <div
      className={cn(
        "group relative  transition duration-500 ease-in-out",
        className
      )}
    >
      <div className=" relative flex items-center justify-center text-2xl uppercase">
        {text.split("").map((letter, index) => (
          <div
            key={index}
            className="origin-top text-2xl font-bold  transition-transform duration-300 ease-in-out group-hover:scale-y-0"
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            {letter}
          </div>
        ))}
        <div className=" absolute bottom-0    flex items-center justify-center text-2xl uppercase">
          {text.split("").map((letter, index) => (
            <div
              key={index}
              className="origin-bottom scale-y-0 text-2xl font-bold transition-transform  duration-300 ease-in-out group-hover:scale-y-100"
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StylishButtons;
