import React from "react";
import { Skills } from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Bio from "@/components/sections/Bio";

const About = () => {
  return (
    <div className="snap-y snap-proximity">
      <div className="snap-start">
        <Bio />
      </div>
      <div className="snap-center">
        <Skills />
      </div>
      <div className="snap-center">
        <Experience />
      </div>
      <div className="snap-center">
        <Education />
      </div>
    </div>
  );
};

export default About;
