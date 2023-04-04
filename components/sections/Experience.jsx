"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "../LiIcon";
import AnimatedText from "../AnimatedText";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="xs:text-lg text-2xl font-bold capitalize sm:text-xl ">
          {position}&nbsp;<a href={companyLink}>@{company}</a> |{" "}
        </h3>
        <span className="xs:text-sm font-medium capitalize text-dark/75 dark:text-light/50">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="h-screen w-full overflow-hidden ">
      <div className="p-5">
        <AnimatedText text={"Experience"} className="text-center" />
      </div>
      <div ref={ref} className="relative mx-auto  md:w-[75%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-primaryDark"
        />
        <ul>
          <Details
            position={"Graduate Engineering Trainee"}
            company={"Torrent Power Ltd."}
            address={" mumbra"}
            companyLink={" "}
            time={"July 2022 - Nov 2022"}
            work={
              "Worked on a team responsible for developing new features for Googles search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
