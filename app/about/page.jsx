import Bio from "@/components/sections/Bio";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import Button from "@/components/ui/Button";

const About = () => {
  return (
    <>
      <Bio />

      <Skills />

      <Experience />

      <Education />

      <Button
        href={"/projects"}
        title={"My Projects"}
        className={"bg-dark dark:bg-light"}
      />
    </>
  );
};

export default About;
