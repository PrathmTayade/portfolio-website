import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// TODO Implement this cva too to make it more reusable

const Button = ({ title, href, className }) => {
  return (
    <Link href={href}>
      <button
        type="button"
        className={cn(
          " inline-flex items-center  justify-center rounded-md px-4 py-3 text-lg font-semibold text-light transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:text-dark    dark:hover:bg-slate-600 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
          className
        )}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;

// <Link href={"/about"}>
//   <button
//     type="button  "
//     className="w-full rounded-md bg-gradient-to-r from-cyan-600  via-emerald-600 to-orange-500 py-3 text-lg font-semibold text-white "
//   >
//     About me
//   </button>
// </Link>;
