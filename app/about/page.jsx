import Bio from "@/components/sections/Bio";
import { Skills } from "@/components/sections/Skills";
import Button from "@/components/ui/Button";

const About = () => {
  return (
    <>
      <Bio />

      <Skills />

      {/* <Experience /> */}

      {/* //TODO make timeline exp and on click shows modal with further details  */}

      {/* <Education /> */}

      <Button
        href={"/projects"}
        title={"My Projects"}
        className={"bg-dark dark:bg-light"}
      />
    </>
  );
};

export default About;
