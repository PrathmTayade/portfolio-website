"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "../LiIcon";
import AnimatedText from "../AnimatedText";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-10  flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-lg font-bold capitalize sm:text-xl lg:text-2xl">
          {type}
        </h3>
        <span className="text-sm font-medium capitalize text-dark/75 dark:text-light/50">
          {time} | {place}
        </span>
        <p className="w-full text-sm font-medium md:text-base">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="h-screen  ">
      <AnimatedText text={"Education"} className="text-center " />
      <div ref={ref} className="relative mx-auto md:w-[75%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 h-full w-[4px] origin-top bg-dark  dark:bg-primaryDark"
        />
        <ul className="list-disc ">
          <Details
            type={"B.Tech"}
            time={"2018-2022"}
            place={"Dr. Babasaheb Ambedkar Techonological University"}
            info={" Graduation degree from DBATU, Lonere, Raigad, Maharashtra "}
          />
          <Details
            type={"H.S.C"}
            time={"2018"}
            place={"G.E.I.S, M.H.High school and Junior College"}
            info={"HSC"}
          />
          <Details
            type={"S.S.C"}
            time={"2016"}
            place={"Carmel Convent High School"}
            info={"SSC "}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
