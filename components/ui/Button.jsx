import React from "react";

const Button = ({ title }) => {
  return (
    <button
      type="button "
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2  data-[state=open]:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 "
    >
      {title}
    </button>
  );
};

export default Button;
