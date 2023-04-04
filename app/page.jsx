import Image from "next/image";
import profilePic from "../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className=" container flex min-h-screen items-center text-dark dark:text-light sm:items-start ">
        <div className=" z-0 inline-block h-full w-full bg-light px-8 dark:bg-dark md:px-16 lg:px-24 ">
          <div className="flex w-full flex-col items-start justify-between md:flex-row ">
            <div className="inline-block w-full md:w-1/2  ">
              <Image
                src={profilePic}
                alt="profile"
                className="h-auto w-full  "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className=" flex w-full flex-col items-center self-center text-center lg:w-1/2 lg:text-left  ">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className={"text-center md:text-left"}
              />

              <p className="my-4 text-xs font-medium md:text-base ">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>

              <div className="mt-2 flex items-center gap-3  self-center lg:self-start ">
                <Link
                  href="/Prathamesh-Resume.pdf"
                  target={"_blank"}
                  className=" flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2.5 md:px-6 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"ml-1 w-6 "} />
                </Link>
                <Link
                  href="mailto: abcd@gmail.com"
                  target={"_blank"}
                  className="font-medium capitalize text-dark underline dark:text-light  "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
