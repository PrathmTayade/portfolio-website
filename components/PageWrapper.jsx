"use client";

import { motion } from "framer-motion";
import React from "react";

const PageWrapper = ({ children }) => {
  return <motion.main>{children}</motion.main>;
};

export default PageWrapper;
