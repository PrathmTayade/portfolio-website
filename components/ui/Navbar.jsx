"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../Logo";
import { SocialIcon } from "react-social-icons";
import ThemeSwitch from "../ThemeSwitch";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Menu from "./Menu";

const CustomLink = ({ href, className = " ", title }) => {
  const path = usePathname();
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      {href === path && (
        <span
          className={` absolute -bottom-0.5 left-0 top-full  block h-[1px] w-full bg-dark dark:bg-light `}
        >
          &nbsp;
        </span>
      )}
    </Link>
  );
};

const CustomIcon = ({ url, network }) => {
  return (
    <SocialIcon
      className=" transition  hover:-translate-y-1 "
      url={url}
      network={network}
      style={{ height: 25, width: 25 }}
    />
  );
};

const Navbar = () => {
  return (
    <nav className=" fixed inset-x-0 top-0 z-10 flex  items-center justify-around bg-light/75 dark:bg-dark/75 ">
      <div>
       menu
      </div>
      <div className="">
       <Logo/>
      </div>
      <div className="">
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
