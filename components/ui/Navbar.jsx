"use client";
import { Popover, Tab, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { SocialIcon } from "react-social-icons";
import ThemeSwitch from "../ThemeSwitch";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
];

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
  <motion.div initial="closed" animate={open ? "open" : "closed"}>
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
    <div className=" ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${
                  open ? "" : "text-opacity-90"
                } group inline-flex items-center justify-center rounded-md  px-3 py-2 text-base font-medium hover:text-opacity-100  focus:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-opacity-75  dark:text-light dark:focus-visible:ring-light`}
            >
              <span>
                <MenuToggle open={open} />
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-sm  px-4 sm:px-0 lg:max-w-xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative flex flex-col gap-8 bg-light p-7 dark:bg-dark">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} className=" ">
                        <Popover.Button className="  flex w-full items-center rounded-lg text-xl font-bold   transition duration-150 ease-in-out hover:bg-gray-50 hover:text-light focus:outline-none focus-visible:ring  focus-visible:ring-opacity-50">
                          {item.name}
                        </Popover.Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="fixed inset-x-0  top-0 z-[5]  flex items-center justify-between bg-light/75 p-4 text-dark  transition-colors duration-300 ease-out dark:bg-dark/75 dark:text-light ">
      <div className="hidden md:flex  ">
        <div className="flex gap-2  rounded-xl  p-1">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className={`w-full rounded-lg px-3 py-2.5  text-base font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-dark focus:outline-none focus:ring-2 ${
                  path === item.href
                    ? "bg-dark text-light shadow dark:bg-light dark:text-dark"
                    : "  hover:bg-white/[0.12]  hover:ring-2"
                }`}
              >
                {/* ("w-full rounded-lg px-3 py-2.5 text-base font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-dark focus:outline-none focus:ring-2  ",
                  path === item.href
                    ? "bg-dark text-light shadow dark:bg-light dark:text-dark"
                    : "  hover:bg-white/[0.12]  hover:ring-2}") */}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>


      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;
