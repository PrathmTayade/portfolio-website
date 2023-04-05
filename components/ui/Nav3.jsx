"use client";
import { Popover, Tab, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "../Logo";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({ href, className = " ", children }) => {
  const path = usePathname();
  return (
    <Link href={href} className={`${className} group relative       `}>
      {children}
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

const sidebar = {
  open: {
    clipPath: `circle( 300vh at  40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(2rem at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = () => (
  <motion.div
    variants={navVariants}
    className=" flex w-full flex-col justify-center   gap-8  bg-white/80 p-7 dark:bg-dark/80 "
  >
    {navigation.map((item) => (
      <motion.div key={item.name} variants={menuItemVariants}>
        <Link href={item.href} className=" ">
          <Popover.Button className="  flex w-full items-center rounded-lg text-xl font-bold   transition duration-150 ease-in-out hover:bg-gray-50 hover:text-light focus:outline-none focus-visible:ring  focus-visible:ring-opacity-50">
            {item.name}
          </Popover.Button>
        </Link>
      </motion.div>
    ))}
  </motion.div>
);

const Path = (props) => (
  <motion.path
    className="stroke-dark dark:stroke-gray-100"
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ open }) => (
  <motion.div initial={"closed"} animate={open ? "open" : "closed"}>
    <svg width="23" height="23" viewBox="0 0 23 23 ">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.div>
);

function Menu() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${
                  open ? "" : "text-opacity-90"
                } group inline-flex items-center rounded-md  px-3 py-2 text-base font-medium hover:text-opacity-100  focus:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-opacity-75  dark:text-light dark:focus-visible:ring-light`}
          >
            <span>
              <MenuToggle open={open} />
            </span>
          </Popover.Button>
          {/* <motion.div
            initial={"closed"}
            animate={open ? "open" : "closed"}
            className="relative w-screen p-2 "
          > */}
          <Popover.Panel className=" absolute  z-10 mt-3 w-screen  ">
            <motion.div
              variants={sidebar}
              className="  rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
            >
              {/* <div className="relative  w-full flex-col gap-8  bg-white/80 p-7 dark:bg-dark/80"> */}
              <Navigation />
              {/* </div> */}
            </motion.div>
          </Popover.Panel>
          {/* </motion.div> */}
        </>
      )}
    </Popover>
  );
}

const Nav3 = () => {
  return (
    <nav className="fixed inset-x-0  top-0 z-10  flex justify-between bg-light/75 p-4 text-dark  transition-colors duration-300 ease-out dark:bg-dark/75 dark:text-light ">
      <div>
        <div className="hidden md:flex  ">
          <Tab.Group>
            <Tab.List className="flex gap-2  rounded-xl  p-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg px-3  py-2.5 text-base font-medium leading-5 ",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-dark focus:outline-none focus:ring-2",
                        selected
                          ? "bg-dark text-light shadow dark:bg-light dark:text-dark"
                          : "  hover:bg-white/[0.12]  hover:ring-2 "
                      )
                    }
                  >
                    {item.name}
                  </Tab>
                </Link>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>

      <ThemeSwitch />
    </nav>
  );
};

export default Nav3;
