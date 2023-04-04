"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Logo() {
  const MotionLink = motion(Link);
  return (
    <div className="flexitems-center justify-center  ">
      <MotionLink
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
        }}
        transition={{ duration: 1, repeatType: "loop" }}
        href={"/"}
        className="flex h-16 w-16 items-center justify-center rounded-full  bg-dark text-2xl font-bold text-white dark:border-2 dark:border-solid dark:border-light "
      >
        PT
      </MotionLink>
    </div>
  );
}

export default Logo;
