"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import {AnimatedText} from "../AnimatedText";
import Link from "next/link";
import LiIcon from "../LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li className="mx-auto  my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          ref={ref}
          className="xs:text-lg text-2xl font-bold capitalize sm:text-xl "
        >
          {position}&nbsp;
          <Link href={companyLink} target="_blank" className="text-orange-400 ">
            @{company}
          </Link>
          |
        </h3>
        <span className="xs:text-sm font-medium capitalize text-dark/75 dark:text-light/50">
          {time} | {address}
        </span>
        <ul className="list-disc font-medium md:text-base  text-sm">
          {work.map((list, id) => (
            <li key={id}>{list}</li>
          ))}
        </ul>
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
    <section className="h-full mb-24  w-full overflow-hidden ">
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
            address={"SMK (Shil , Mumbra , Kalva)"}
            companyLink={"https://www.torrentpower.com/"}
            time={"July 2022 - Nov 2022"}
            work={[
              "Elevated customer satisfaction by 20% via good customer relations and enhanced service processes.",
              "Used critical thinking to break down problems, evaluate solutions and make decisions. Thus, streamlining the leadsgenerating process and consumer grievances.",
              "Reduced customer frustrations by streamlining the process and increasing customer satisfaction, resulting in a 5% rise inrevenue.",
              "Managed all operations within the department single-handedly to ensure proper functioning.",
              "Proven ability to develop and implement creative solutions to complex problems and implementing them to increaseproductivity.",
              "Worked effectively in fast-paced environments.",
              "Gained extensive knowledge in data entry, analysis and reporting.",
              "Reduced manual processes system-wide through automation, eliminated redundancies & established standardizedprocedures for handling the departmental operations alone.",
            ]}
          />
        </ul>
      </div>
    </section>
  );
};

export default Experience;
