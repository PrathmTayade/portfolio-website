import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import React from "react";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Bio from "@/components/Bio";

const About = () => {
  return (
    <div className="snap-y snap-mandatory">
      <div className="snap-center">
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
