
import React from "react";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Bio from "@/components/Bio";

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
