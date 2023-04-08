import Bio from "@/components/sections/Bio";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

const About = () => {
  return (
    <>
      <Bio />

      <Skills />

      <Experience />

      <Education />
    </>
  );
};

export default About;
