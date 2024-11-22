import { AboutHero } from "@/components/about/about-hero";
import { StudentExamples } from "@/components/about/student-examples";
import React from "react";

const About = () => {
  return (
    <div className="w-full mb-[90%]">
      <AboutHero />
      <StudentExamples />
    </div>
  );
};

export default About;
