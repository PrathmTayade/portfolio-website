"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { SocialIcon } from "react-social-icons";
import ThemeSwitch from "./ThemeSwitch";

const CustomLink = ({ href, className = " ", title }) => {
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}

      <span
        className={` absolute -bottom-0.5 left-0 inline-block h-[1px] w-0  bg-dark transition-[width]  duration-300 ease-linear group-hover:w-full`}
      >
        &nbsp;
      </span>
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
    <header className=" z-1 relative z-10 flex w-full items-center justify-between px-8 font-medium dark:text-light sm:px-12 md:px-16 lg:px-32 lg:py-8 ">
      <nav className="">
        <CustomLink href="/" title={"Home"} className="mr-4  " />
        <CustomLink href="/about" title={"About"} className="mx-4" />
        <CustomLink href="/projects " title={"Projects"} className="mx-4" />
        {/* <CustomLink href="/articles" title={"Articles"} className="ml-4" /> */}
      </nav>

      <div className=" absolute  left-[50%] translate-x-[-50%] ">
        <Logo />
      </div>
      <nav className=" flex  items-center justify-center gap-4 md:flex-wrap    ">
        <CustomIcon network={"twitter"} url={""} />
        <CustomIcon
          network={"github"}
          url={"https://github.com/PrathmTayade"}
        />
        <CustomIcon network={"email"} url={"mailto:prathmtayade30@gmail.com"}  />
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Navbar;
