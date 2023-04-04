import TransitionEffect from "@/components/TransitionEffect";
import React from "react";

export const metadata = {
  title: "Projects | page",
  description: "Showcase of the Projects I made.",
};
function layout({ children }) {
  return (
    <main className="mb-16  pt-20 flex w-full flex-col items-center justify-center dark:text-light">
      <TransitionEffect />
      {children}
    </main>
  );
}

export default layout;
