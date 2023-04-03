"use client";
import { animate, motion } from "framer-motion";
import React from "react";

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
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AnimatedText = ({ text, className }) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center overflow-hidden  py-2 text-center  sm:py-0  ">
      <motion.h1
        variants={quote}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className={` text-4xl  font-bold capitalize text-dark  dark:text-light md:text-5xl   lg:text-6xl ${className} `}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "-" + index}
            className=" inline-block "
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
