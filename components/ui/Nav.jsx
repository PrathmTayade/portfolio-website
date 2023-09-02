"use client";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Blogs", href: "/blogs", current: false },
];

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
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${
                  open ? "" : "text-opacity-90"
                } group inline-flex items-center justify-center rounded-md  p-2 px-1 text-base font-medium hover:text-opacity-100  focus:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-opacity-75  dark:text-light dark:focus-visible:ring-light`}
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
            <Popover.Panel className="fixed inset-x-0 z-10 mt-3   px-6 ">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative flex flex-col gap-8 bg-light p-7 dark:bg-dark">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className=" ">
                      <Popover.Button className="  flex w-full items-center rounded-lg text-xl font-bold   transition duration-150 ease-in-out hover:bg-gray-50 hover:text-light focus:outline-none focus-visible:ring  focus-visible:ring-opacity-50">
                        {item.name}
                      </Popover.Button>
                    </Link>
                  ))}{" "}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="container">
      <nav
        className="fixed inset-x-0 top-0  z-[5] mx-auto  flex items-center justify-between bg-light/75 p-4 text-dark  transition-colors duration-300 ease-out dark:bg-dark/75 dark:text-light"
        aria-label="Global"
      >
        <div className="sm:hidden ">
          <Menu />
        </div>

        <Logo />

        <div className="hidden sm:flex sm:gap-x-4 md:gap-x-6  lg:gap-x-12">
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
        <div className="">
          <ThemeSwitch />
        </div>

        {/* ALT MENU BTN */}

        {/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark dark:text-light"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div> */}
      </nav>

      {/* ALTERNATE MENU IMPLEMENTATION */}

      {/* <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden"
          onClose={() => setMobileMenuOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition  ease-in-out duration-300 transform"
            enterFrom="translate-x-full "
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="absolute inset-y-0 right-0 z-50 w-full overflow-y-auto  bg-light px-6 py-6  text-dark dark:bg-dark dark:text-light sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <div className="-m-1.5 p-1.5">
                  <ThemeSwitch />
                </div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-dark dark:text-light "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Transition
                        // appear={true}
                        key={item.name}
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300 delay-500 transform"
                        enterFrom="translate-x-full opacity-0  "
                        enterTo="translate-x-0 opacity-100 "
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-dark hover:bg-gray-50 dark:bg-dark dark:text-light dark:hover:bg-gray-600"
                        >
                          {item.name}
                        </Link>
                      </Transition>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition> */}
    </header>
  );
}
