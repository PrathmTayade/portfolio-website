"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FlipAnimationText } from "./AnimatedText";

function Logo() {
  const MotionLink = motion(Link);
  return (
    <div className="flex items-center justify-center  rounded-full ">
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
        transition={{ repeat: 3 }}
        href={"/"}
        className="flex h-12 w-12 items-center justify-center rounded-full  bg-dark text-xl font-bold text-white dark:border-2 dark:border-solid dark:border-light "
      >
        <FlipAnimationText text={"PT"} />
      </MotionLink>
    </div>
  );
}

export default Logo;
