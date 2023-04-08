"use client";
import { motion } from "framer-motion";
import React from "react";
import AnimatedText from "../AnimatedText";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute w-max origin-center cursor-pointer  rounded-full bg-transparent text-sm  font-bold dark:bg-light dark:text-dark sm:px-3 sm:py-1.5  md:bg-dark md:px-4 md:py-2  md:font-semibold md:text-light  lg:px-6 lg:py-3 "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      {name}
    </motion.div>
  );
};
export const Skills = () => {
  return (
    <section className=" w-full  pt-32 ">
      <AnimatedText text={"Skills"} className="text-center" />
      <div className="relative mb-64 flex   h-[40vh] w-full  items-center justify-center rounded-full  bg-circularLight p-6 dark:bg-circularDark sm:h-[60vh] sm:bg-circularLightSm sm:dark:bg-circularDarkSm md:h-[80vh] md:bg-circularLightMd   md:dark:bg-circularDarkMd lg:bg-circularLightLg  lg:dark:bg-circularDarkLg xl:h-[100vh]    ">
        <motion.div
          className="flex cursor-pointer rounded-full bg-dark p-2 text-xs font-semibold text-light shadow-dark dark:bg-light dark:text-dark sm:p-4 md:p-6 lg:p-8 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Redux" x="15vw" y="-12vw" />
        <Skill name="Figma" x="32vw" y="-5vw" />
        <Skill name="MongoDB" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        <Skill name="Github " x="-30vw" y="-2vw" />
      </div>
    </section>
  );
};
