import React from "react";
import AnimatedText from "../AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile pic no bg.png";

const Bio = () => {
  return (
    <section className="">
      <div className="mx-auto flex w-full flex-col items-center justify-center overflow-hidden  text-center">
        <AnimatedText
          text={"Passion Fuels Purpose! "}
          className={"  lg:!text-8xl"}
        />
      </div>

      <div className="flex flex-col items-center justify-evenly gap-5 p-8 md:flex-row  md:p-5 lg:p-12 xl:mt-32   ">
        <div className=" relative h-auto w-full flex-1  rounded-2xl   border-2 border-solid border-dark bg-light  p-8 dark:border-light dark:bg-dark md:w-1/3 ">
          <div className="absolute  -right-3 top-0 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light  " />
          <Image
            alt="profilePic "
            src={profilePic}
            priority
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
            className="h-auto  w-full rounded-2xl bg-dark  brightness-90 dark:bg-light  "
          />
        </div>
        <div className=" flex w-full flex-1 flex-col  items-start justify-start p-6  ">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Biography
          </h2>
          <p>
            I believe that web development is about more than just making things
            look pretty it&apos;s about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
