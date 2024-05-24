import { AnimatedText } from "@/components/AnimatedText";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import projectsData from "@/public/projects.json";

const Page = () => {
  return (
    <div className="z-0 inline-block h-full w-full p-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto flex w-full flex-col items-center justify-center overflow-hidden pb-10 text-center">
        <AnimatedText
          text={"Imagination Trumps Knowledge!"}
          className={"lg:!text-8xl"}
        />
      </div>
      <div className="grid grid-cols-12 gap-x-6 gap-y-32 sm:gap-y-24 md:gap-x-10 lg:gap-x-16">
        {projectsData.map((project, index) => {
          if (project.type === "featured") {
            return (
              <div className="col-span-12" key={index}>
                <FeaturedProjects
                  title={project.title}
                  description={project.description}
                  gitLink={project.gitLink}
                  projectLink={project.projectLink}
                  src={project.src}
                />
              </div>
            );
          } else {
            return (
              <div className={`col-span-12 sm:col-span-6`} key={index}>
                <Projects
                  title={project.title}
                  description={project.description}
                  gitLink={project.gitLink}
                  projectLink={project.projectLink}
                  src={project.src}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Page;
