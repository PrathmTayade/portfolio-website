import TransitionEffect from "@/components/TransitionEffect";
import React from "react";

export const metadata = {
  title: "About | page",
  description: "Getting to know about me",
};
function layout({ children }) {
  return (
    <main className="flex w-full flex-col items-center  justify-center  gap-6 p-8  dark:text-light sm:px-16 md:px-28 lg:px-32">
      <TransitionEffect />
      {children}
    </main>
  );
}

export default layout;
