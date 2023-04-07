"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import TransitionEffect from "./TransitionEffect";

const PageWrapper = ({ children }) => {
  const path = usePathname();
  console.log(path);
  return (
    <AnimatePresence key={path} mode="wait">
      {children}
    </AnimatePresence>
  );
};

export default PageWrapper;
