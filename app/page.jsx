import { AnimatedText, FlipAnimationText } from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/profile/developer-pic-1.png";

export default function Home() {
  return (
    <>
      {/* <TransitionEffect /> */}
      <main className=" container flex  items-center  sm:items-start ">
        <div className=" mb-4 w-full px-8 py-5  md:px-16 lg:px-24 ">
          <div className="flex w-full flex-col items-center  justify-between md:flex-row md:items-start ">
            <div className="relative inline-block w-full md:w-1/2  ">
              <Image
                src={profilePic}
                alt="profile"
                className=" object-contain"
                priority
              />
            </div>
            <div className=" flex w-full flex-col  items-center self-center text-center lg:w-1/2 lg:text-left  ">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className={" text-center  md:text-left    "}
              />

              <p className="my-4 text-xs font-medium md:text-base ">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>

              <div className="mt-2 w-full ">
                <div className=" flex items-center  gap-3  self-center lg:self-start ">
                  <Link
                    href="/Resume.pdf"
                    target={"_blank"}
                    className=" flex items-center rounded-lg  bg-dark p-2 px-4 text-lg font-semibold capitalize text-light outline hover:bg-transparent hover:text-dark hover:outline-dark  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:outline-light md:p-2.5 md:px-6 md:text-base"
                    download={true}
                  >
                    Resume <LinkArrow className={"ml-1 w-6 "} />
                  </Link>
                  <Link
                    href="mailto:prathmtayade30@gmail.com"
                    target={"_blank"}
                    className="font-medium capitalize text-dark underline hover:text-gray-700 dark:text-light  "
                  >
                    Contact me
                  </Link>
                </div>
              </div>

              <div className=" mt-3 w-full">
                {/* <Link href={"/about"}>
                  <button
                    type="button  "
                    className="w-full rounded-md font-semibold text-lg  bg-gradient-to-r from-cyan-600 via-emerald-600 to-orange-500 py-3 text-white "
                  >
                    About me
                  </button>
                </Link> */}

                <Button
                  className={
                    "w-full bg-gradient-to-r  from-sky-500 via-emerald-500 to-orange-500 text-light   "
                  }
                  title={"About me"}
                  href={"/about"}
                />

                <FlipAnimationText
                  text="My work"
                  className={
                    "rounded-md border-2 border-gray-700  p-2 capitalize  "
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
