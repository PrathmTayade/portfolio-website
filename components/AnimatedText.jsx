"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

const quote = {
  hidden: {},
  show: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delayChildren: 1.2 },
  },
};

const colorWord = {
  show: { color: "transparent" },
};

const AnimatedText = ({ text, className }) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center overflow-hidden  py-2 text-center  sm:py-0  ">
      <motion.h1
        variants={quote}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className={` bg-gradient-to-r from-pink-500 to-violet-500  dark:from-cyan-400 dark:to-fuchsia-500 bg-clip-text text-4xl font-bold capitalize text-dark  dark:text-light md:text-5xl   lg:text-6xl ${className} `}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "-" + index}
            className=" inline-block  "
          >
            <motion.span
              variants={colorWord}
              className="   transition-colors  duration-300 ease-in "
            >
              {word}&nbsp;
            </motion.span>
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

const FlipAnimationText = ({ text, className }) => {
  return (
    <div
      className={cn(
        "group relative transition duration-500 ease-in-out font-bold text-xl ",
        className
      )}
    >
      <div className=" sticky inset-0 flex items-center justify-center gap-2">
        {text.split(" ").map((word, wordIndex) => (
          <div key={wordIndex} className=" flex items-center justify-center  ">
            {word.split("").map((letter, letterIndex) => (
              <div
                key={letterIndex}
                className="origin-top   transition-transform duration-300 ease-in-out group-hover:scale-y-0"
                style={{ transitionDelay: `${letterIndex * 75}ms` }}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center gap-2 ">
          {text.split(" ").map((word, wordIndex) => (
            <div
              key={wordIndex}
              className=" flex items-center justify-center   "
            >
              {word.split("").map((letter, letterIndex) => (
                <div
                  key={letterIndex}
                  className="origin-bottom scale-y-0  transition-transform  duration-300 ease-in-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${letterIndex * 75}ms` }}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { AnimatedText, FlipAnimationText };
