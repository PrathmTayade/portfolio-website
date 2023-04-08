import AnimatedText from "@/components/AnimatedText";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import project2 from "../../public/images/projects/Shopping-website.png";
import project1 from "../../public/images/projects/metaverse.png";

const Page = () => {
  return (
    <div className="z-0 inline-block h-full w-full  p-8  sm:px-12 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto flex w-full flex-col items-center justify-center overflow-hidden   pb-10 text-center ">
        <AnimatedText
          text={"Imagination Trumps Knowledge!"}
          className={"  lg:!text-8xl"}
        />
      </div>
      <div className="grid grid-cols-12  gap-x-6 gap-y-32 sm:gap-y-24  md:gap-x-10 lg:gap-x-16 ">
        <div className="col-span-12">
          <FeaturedProjects
            title={"Metaverser Madness"}
            description="Metaverse Madness is a stunning website that will take you on a journey through the imaginative world of virtual reality. Built with the latest web development tools, including Next.js, Tailwind, and Framer Motion, this website features a vibrant home page with stunning animations and a breathtaking gallery of digital art. Discover the creative mind behind the projects, explore the mesmerizing world of metaverse, and get in touch to collaborate on your next virtual reality adventure. Welcome to Metaverse Madness, where reality meets fantasy!"
            gitLink={"https://github.com/PrathmTayade/Metaverse_animations"}
            projectLink={"https://poetic-biscuit-d9ae34.netlify.app/"}
            src={project1}
          />
        </div>
        <div className="col-span-12  sm:col-span-6">
          <Projects
            title={"Shopping Website"}
            projectLink={"https://rainbow-caramel-5eb6ac.netlify.app/"}
            src={project2}
            gitLink={"https://github.com/PrathmTayade/Shopping-Website"}
            description={"asdsds adasdsad sdsadsa d"}
          />
        </div>
        <div className="col-span-12  sm:col-span-6">
          <Projects
            title={"project 2"}
            projectLink={"https://github.com/PrathmTayade"}
            src={project1}
            gitLink={"https://github.com/PrathmTayade"}
            description={"asdsds adasdsad sdsadsa d"}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
